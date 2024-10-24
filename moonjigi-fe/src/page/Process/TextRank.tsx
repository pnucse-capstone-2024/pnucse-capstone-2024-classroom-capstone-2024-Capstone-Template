import ImageWithText from "./components/ImageWithText.tsx";
import styles from "./index.module.scss";

const TextRank = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <h2 className={styles.highlight}>TextRank</h2>
        <h1 className={styles.title}>코드의 연관성을 통해 중요도를 판단</h1>
        <p className={styles.subtitle}>
          웹쉘 탐지에 알맞게 적용한 웹쉘 맞춤 TextRank 알고리즘을 제안한다.
        </p>
      </div>
      <div className={styles.terminalSection}>
        <div className={styles.imgSide}>
          <ImageWithText>
            {`import os
from collections import Counter
import json
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import normalize
import numpy as np
from scipy.sparse import csr_matrix

# 파일에서 opcode 데이터를 로드합니다.
def load_opcode_sequences(filepath):
    with open(filepath, 'r') as file:
        opcode_sequences = file.readlines()
    opcode_sequences = [line.strip() for line in opcode_sequences]
    return opcode_sequences

# 파일에서 AST 데이터를 로드합니다.
def load_ast_sequences(filepath):
    with open(filepath, 'r') as file:
        ast_sequences = json.load(file)
    return ast_sequences

# AST 시퀀스에서 nodeType 값을 추출하는 함수입니다.
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

# 빈도수 기반 필터링 함수입니다.
def frequency_of_use_filtering(seq):
    total = Counter()
    for element in seq:
        counts = Counter(element.split())
        for item, count in counts.items():
            total[item] += count

    filtered = []
    for element in seq:
        words = element.split()
        filtered_seq = [word for word in words if total[word] > 10]  # 임계값 조정
        filtered.append(' '.join(filtered_seq))

    return filtered

def weighted_words_graph(sentences, targets):
    if not sentences or all(len(s.strip()) == 0 for s in sentences):
        print("Error: Sentences list is empty or contains only empty strings.")
        return None, None
    
    #print(f"Sentences: {sentences}")  # 데이터 확인용 출력

    # CountVectorizer에서 중지어 제거를 하지 않도록 설정
    cnt = CountVectorizer(stop_words=None)

    try:
        # 문장에서 단어의 빈도를 카운트합니다.
        cnt_mat = cnt.fit_transform(sentences)
    except ValueError as e:
        print(f"Error during fit_transform: {e}")
        return None, None

    cnt_mat = normalize(cnt_mat)
    vocab = cnt.vocabulary_
    
    # 단어 공출현 그래프 생성
    words_graph = np.dot(cnt_mat.T, cnt_mat)

    # 특정 단어에 추가 가중치 부여
    for s in targets:
        if s in vocab:
            idx = vocab[s]
            words_graph[idx, idx] += 0.5

    # 인덱스를 단어로 매핑
    word_dict = {idx: word for word, idx in vocab.items()}
    
    return words_graph, word_dict

# 그래프 계산 함수입니다.
def calculation(graph, damping_factor=0.85):
    A = graph.copy()
    matrix_size = A.shape[0]

    for id in range(matrix_size):
        A[id, id] = 0
        link_sum = np.sum(A[:, id])
        if link_sum != 0:
            A[:, id] /= link_sum
        A[:, id] *= -damping_factor
        A[id, id] = 1

    B = (1 - damping_factor) * np.ones(matrix_size)

    ranks = np.linalg.solve(A, B)
    return {idx: r for idx, r in enumerate(ranks)}

# 여러 파일을 처리하는 함수입니다.
def process_files(opcode_folder, ast_folder, output_file):
    # 파일 개수 확인
    opcode_files = sorted(os.listdir(opcode_folder))
    ast_files = sorted(os.listdir(ast_folder))
    print(f"Total Opcode files: {len(opcode_files)}")
    print(f"Total AST files: {len(ast_files)}")

    result = {}  # 최종 결과를 저장할 딕셔너리

    for opcode_file, ast_file in zip(sorted(os.listdir(opcode_folder)), sorted(os.listdir(ast_folder))):
        if opcode_file.split('.')[0] == ast_file.split('.')[0]:
            print(f"Processing {os.path.join(opcode_folder, opcode_file)} and {os.path.join(ast_folder, ast_file)}")

            opcode_sequences = load_opcode_sequences(os.path.join(opcode_folder, opcode_file))
            ast_sequences = load_ast_sequences(os.path.join(ast_folder, ast_file))

            ast_node_types = extract_node_types(ast_sequences)

            combined_sequences = opcode_sequences + [' '.join(ast_node_types)]
            filtered_sequences = frequency_of_use_filtering(combined_sequences)
            
            if not filtered_sequences or all(len(seq.strip()) == 0 for seq in filtered_sequences):
                print("Warning: Filtered sequences list is empty or only contains empty strings.")
                continue  # 빈 데이터는 스킵

            sentences = filtered_sequences

            # 단어 빈도에 기반한 타겟 리스트 생성
            word_freq = Counter(' '.join(sentences).split())
            targets = [word for word in word_freq.keys() if word_freq[word] > 10]

            # 단어 그래프 생성
            words_graph, word_dict = weighted_words_graph(sentences, targets)

            if words_graph is None or word_dict is None:
                print("Warning: words_graph or word_dict is None, skipping this file.")
                continue  # 빈 그래프는 스킵

            # Sparse matrix로 변환 후 계산
            try:
                words_graph_dense = csr_matrix(words_graph).toarray()
                ranked_words = calculation(words_graph_dense)
                ranked_words = {word_dict[idx]: score for idx, score in ranked_words.items()}

                # 결과를 JSON 형식으로 저장
                result[opcode_file.split('.')[0]] = ranked_words

            except ValueError as e:
                print(f"Error during matrix conversion or calculation: {e}")
                continue  # 변환 실패 시 스킵

    # 결과를 JSON 파일로 저장
    with open(output_file, 'w') as json_file:
        json.dump(result, json_file, indent=4)
    print(f"Results saved to {output_file}")

# opcode 및 ast 파일들이 저장된 폴더 경로 설정
opcode_folder = '/root/gradProj/result/webshell_deobfuscated_opcode_normal'  # opcode 파일이 있는 폴더 경로
ast_folder = '/root/gradProj/result/webshell_deobfuscated_ast_normal'

# 결과를 저장할 JSON 파일 경로
output_file = 'ranked_words_result.json'

# 파일 처리 실행
process_files(opcode_folder, ast_folder, output_file)`}
          </ImageWithText>
          <div className={styles.captionSide}>TextRank 추출 코드</div>
        </div>
        <div className={styles.imgSide}>
          <ImageWithText>
            {`{
    "assign": 0.15000000000000002,
    "expr_assign": 0.9144625056228913,
    "expr_variable": 1.0381218063694537,
    "scalar_string": 1.0381218063694537,
    "stmt_expression": 1.0092938816382035
}`}
          </ImageWithText>
          <div className={styles.captionSide}>TextRank</div>
        </div>
      </div>
    </div>
  );
};

export default TextRank;
