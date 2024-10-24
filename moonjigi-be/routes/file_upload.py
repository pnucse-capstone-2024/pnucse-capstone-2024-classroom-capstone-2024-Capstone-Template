import os
from flask import Blueprint, request, jsonify
from services.deobfuscation import deobfuscate_php, save_deobfuscated_code
from services.extract_ast import extract_ast
from services.extract_opcode import extract_opcode
from services.process_rank import process_ast_and_opcode
import xgboost as xgb
import pandas as pd
import numpy as np

file_upload_bp = Blueprint('file_upload', __name__)

UPLOAD_FOLDER = 'uploads/'
OUTPUT_FOLDER = 'outputs/'
MODEL_PATH = 'model/xgboost_model.model'

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

if not os.path.exists(OUTPUT_FOLDER):
    os.makedirs(OUTPUT_FOLDER)

# 사전 학습된 XGBoost 모델 로드
model = xgb.XGBClassifier()
model.load_model(MODEL_PATH)

# 파일의 내용을 읽어오는 헬퍼 함수
def read_file_content(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        return file.read()

@file_upload_bp.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"message": "파일이 없음"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"message": "파일 이름이 없음"}), 400

    if file and file.filename.endswith('.php'):
        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filepath)

        # 비난독화 과정
        deobfuscation_result = deobfuscate_php(filepath)
        if isinstance(deobfuscation_result, tuple):
            return jsonify({"message": "비난독화 실패", "details": deobfuscation_result}), 500

        deobfuscated_file = save_deobfuscated_code(deobfuscation_result, file.filename)

        # AST 및 Opcode 추출
        ast_result = extract_ast(deobfuscated_file)
        opcode_result = extract_opcode(deobfuscated_file)

        if isinstance(ast_result, tuple) and ast_result[1] != 200:
            return jsonify({"message": "AST 추출 실패", "details": ast_result}), 500

        if isinstance(opcode_result, tuple) and opcode_result[1] != 200:
            return jsonify({"message": "Opcode 추출 실패", "details": opcode_result}), 500

        # 파일 경로 추출
        ast_filepath = ast_result[0].split(": ")[1].strip()  # ast_result에서 파일 경로 추출
        opcode_filepath = opcode_result[0].split(": ")[1].strip()  # opcode_result에서 파일 경로 추출

        ranked_words_result = process_ast_and_opcode(opcode_filepath, ast_filepath)

        # 모델에 맞는 feature names 로드
        model_feature_names = model.get_booster().feature_names

        # ranked_words_result에 모델 feature names와 맞지 않는 feature가 있으면 제거
        numeric_ranked_words = {key: value for key, value in ranked_words_result.items() if key in model_feature_names}

        # DataFrame을 모델에 맞는 feature 순서로 정렬하여 생성
        df = pd.DataFrame([numeric_ranked_words], columns=model_feature_names).fillna(0)

        # 예측 실행
        prediction = model.predict(df)

        # 결과를 JSON 형식으로 반환
        return jsonify({
            "message": "success",
            "Deobfuscated_Code": deobfuscation_result,
            "AST": read_file_content(ast_filepath),
            "Opcode": read_file_content(opcode_filepath),
            "Ranked_Words_Result": ranked_words_result,
            "Prediction": int(prediction[0])
        })
    else:
        return jsonify({"message": "PHP 파일만 허용됨"}), 400