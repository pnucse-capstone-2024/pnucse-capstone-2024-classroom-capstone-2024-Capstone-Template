import json
from collections import Counter
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import normalize
import numpy as np
from scipy.sparse import csr_matrix

# AST 시퀀스에서 모든 'nodeType' 값을 추출하는 함수
def extract_node_types(ast, node_types=None):
    if node_types is None:
        node_types = []

    if isinstance(ast, dict):
        if 'nodeType' in ast:
            node_types.append(ast['nodeType'])
        for key, value in ast.items():
            extract_node_types(value, node_types)
    elif isinstance(ast, list):
        for item in ast:
            extract_node_types(item, node_types)

    return node_types

# 빈도 필터링 함수 (임계값을 매개변수로 전달)
def frequency_of_use_filtering(seq, threshold=10):
    total = Counter()
    for element in seq:
        counts = Counter(element.split())
        for item, count in counts.items():
            total[item] += count

    filtered = []
    for element in seq:
        words = element.split()
        filtered_seq = [word for word in words if total[word] > threshold]
        filtered.append(' '.join(filtered_seq))

    return filtered

# 단어 그래프 생성 함수
def weighted_words_graph(sentences, targets):
    cnt = CountVectorizer()
    
    if not sentences:
        raise ValueError("입력된 문장이 비어 있습니다.")

    cnt_mat = cnt.fit_transform(sentences)
    
    if cnt_mat.shape[0] == 0:
        raise ValueError("단어 사전이 비어 있습니다. 입력이 유효하지 않거나 불용어로만 구성되어 있습니다.")
    
    cnt_mat = normalize(cnt_mat)
    vocab = cnt.vocabulary_
    
    # 단어 공출현 그래프 생성
    words_graph = np.dot(cnt_mat.T, cnt_mat)

    # 특정 단어에 추가 가중치 부여
    for s in targets:
        if s in vocab:
            idx = vocab[s]
            words_graph[idx, idx] += 0.5  # 대각 원소에 가중치 추가

    # 인덱스와 단어를 매핑하는 딕셔너리 생성
    word_dict = {idx: word for word, idx in vocab.items()}
    
    return words_graph, word_dict

# TextRank 계산 함수
def calculation(graph, damping_factor=0.85):
    A = graph.copy()
    matrix_size = A.shape[0]

    if matrix_size == 0:
        raise ValueError("그래프가 비어 있습니다.")

    # 대각선에 대한 작업 수행
    for id in range(matrix_size):
        A[id, id] = 0
        link_sum = np.sum(A[:, id])
        if link_sum != 0:
            A[:, id] /= link_sum
        A[:, id] *= -damping_factor
        A[id, id] = 1

    # 1차원 벡터 B 생성
    B = (1 - damping_factor) * np.ones(matrix_size)

    # 선형 방정식 Ax = B 풀기
    ranks = np.linalg.solve(A, B)

    return {idx: r for idx, r in enumerate(ranks)}

# 파일에서 opcode 시퀀스와 AST 시퀀스를 읽는 함수
def load_opcode_sequences(filepath):
    with open(filepath, 'r') as file:
        opcode_sequences = file.readlines()
    opcode_sequences = [line.strip() for line in opcode_sequences]
    return opcode_sequences

def load_ast_sequences(filepath):
    with open(filepath, 'r') as file:
        ast_sequences = json.load(file)  # AST 파일은 JSON 형식으로 가정
    return ast_sequences

# numpy float64 값을 파이썬 float 값으로 변환하는 함수
def convert_numpy_to_python_float(data):
    if isinstance(data, dict):
        return {k: convert_numpy_to_python_float(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [convert_numpy_to_python_float(item) for item in data]
    elif isinstance(data, np.float64):
        return float(data)
    else:
        return data

# AST 및 Opcode 데이터를 결합하고 처리하는 함수
def process_ast_and_opcode(opcode_filepath, ast_filepath):
    # 파일에서 opcode 및 ast 시퀀스를 로드
    opcode_sequences = load_opcode_sequences(opcode_filepath)
    ast_sequences = load_ast_sequences(ast_filepath)

    if not opcode_sequences or not ast_sequences:
        raise ValueError("AST 또는 Opcode 시퀀스가 비어 있습니다.")

    # AST에서 nodeType 값을 추출
    ast_node_types = extract_node_types(ast_sequences)

    # Opcode 시퀀스를 문자열로 변환하여 결합
    opcode_str = ' '.join(opcode_sequences)  # Opcode 시퀀스를 문자열로 변환
    ast_str = ' '.join(ast_node_types)       # AST nodeType도 문자열로 변환

    combined_sequences = [opcode_str, ast_str]  # 두 문자열을 결합하여 리스트에 저장

    # 빈도 기반 필터링 (임계값 10으로 설정)
    filtered_sequences = frequency_of_use_filtering(combined_sequences, threshold=10)

    # 단어 그래프 생성
    word_freq = Counter(' '.join(filtered_sequences).split())
    targets = [word for word in word_freq.keys() if word_freq[word] > 10]
    words_graph, word_dict = weighted_words_graph(filtered_sequences, targets)

    # TextRank 계산
    words_graph_dense = csr_matrix(words_graph).toarray()
    ranked_words = calculation(words_graph_dense)

    # 계산된 rank 값을 단어로 변환
    ranked_words_result = {word_dict[idx]: score for idx, score in ranked_words.items()}

    # numpy float64 값을 파이썬 float로 변환
    ranked_words_result = convert_numpy_to_python_float(ranked_words_result)

    # 결과 출력 확인
    print(f"Ranked Words Result: {ranked_words_result}")  # 이 부분 추가
    
    # JSON 형식으로 변환하여 반환
    # return json.dumps(c, ensure_ascii=False)
    return ranked_words_result