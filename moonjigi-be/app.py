from flask import Flask
from routes.file_upload import file_upload_bp
from flask_cors import CORS  # CORS 라이브러리 추가

app = Flask(__name__)
CORS(app)  # 모든 도메인에서 API 호출 허용

# 블루프린트 등록
app.register_blueprint(file_upload_bp, url_prefix='/api')

# 홈 엔드포인트
@app.route('/')
def home():
    return 'This is Home!'


if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=False)