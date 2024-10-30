### 1. 프로젝트 소개

팬데믹을 거치며 성인 남성의 비만율은 46.3%까지 증가하였고, 남학생과 여학생의 비만율은 각각 17.5%, 9.1%로 10년 전 대비 2배 이상 증가하였다.
체중 감량이나 증량을 원하는 사람들에게 개인의 목표에 맞는 일일 섭취 칼로리와 영양소를 정확하게 계산해 제공함으로써 목표 달성을 보다 쉽게 도울 수 있는 서비스가 요구된다

### 2. 팀소개

이혁재, jeuss385@naver.com, 프론트앤드 개발, 데이터 수집

김상해, pelikan@pusan.ac.kr, 백앤드 개발, 데이터 수집

문성재, paulmoon00@naver.com, 모델 학습, FastAPI 서버 개발

### 3. 시스템 구성도

![구성도_이미지](https://github.com/user-attachments/assets/306ef462-213c-4208-b65a-45763354c70e)

### 4. 소개 및 시연 영상

[![작품_소개_영상](http://img.youtube.com/vi/1qgnZnbgKTY/0.jpg)](https://www.youtube.com/watch?v=1qgnZnbgKTY)

### 5. 설치 및 사용법

본 프로젝트는 python 3.8이상과 java 21, springboot 3.0이상의 환경에서 동작 가능합니다.\
다음의 과정으로 관련 패키지의 설치와 실행이 가능합니다.

**웹서버 빌드 및 실행**
```
cd ./src/web_server
./gradlew build clean
cd /build/libs
java -jar SmartPlate-0.0.1-SNAPSHOT.jar
```
**인공지능 서버 빌드 및 실행**
```
cd ./src/ai_server
pip install -r requirements.txt
nohup uvicorn main:app --host=0.0.0.0 --port=8000 &
```