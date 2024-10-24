### 1. 프로젝트 소개
#### 1.1. 배경 및 필요성
> 웹쉘은 웹 서버를 침투하여 추가적인 공격을 시작할 수 있는 악성 스크립트이다.
> 이러한 악성 스크립트 웹쉘을 이용한 공격은 지속적으로 증가하고 있다.
> 또한 기존 웹쉘 정적 탐지에서 많이 사용된 통계적인 기법은 웹쉘 탐지 성능이 감소하는 난독화 편향 문제가 발생한다.
> 그러므로 난독화 편향 문제가 발생하지 않으면서, 웹쉘을 탐지하는 방법을 제안하려한다.

#### 1.2. 목표 및 주요 내용
> 본 과제는 딥 러닝 및 머신 러닝 기법을 활용한 난독화 웹쉘 탐지 모델 개발을 목표로 한다.
> 먼저 난독화 및 비난독화 도구를 기반으로 난독화 웹쉘 전처리 모듈을 구현하는 등 웹쉘 분석 환경을 구축한 다음, 난독화 웹쉘 탐지를 위한 textrank 기반 알고리즘을 구현한다.
> 마지막으로 시각화 도구를 이용하여 웹쉘 탐지 결과를 시각적으로 쉽게 파악할 수 있도록 한다.
> 이러한 과제는 난독화 웹쉘을 탐지함은 물론, 결과를 한눈에 파악하기 쉽게 하여 누구나 쉽게 웹쉘 탐지의 과정과 결과에 쉽게 접근할 수 있도록 한다.

### 2. 상세설계
#### 2.1. 과제 수행 흐름
![흐름도](https://github.com/user-attachments/assets/59d5e74c-d9c4-4d91-b1d9-167108003271)

#### 2.2. 사용 기술
#### Front-end
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
#### Back-end
![Python](https://img.shields.io/badge/Python-3776AB.svg?&style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000.svg?&style=for-the-badge&logo=flask&logoColor=white)
![Flask-Cors](https://img.shields.io/badge/Flask--Cors-FF69B4.svg?&style=for-the-badge&logo=flask&logoColor=white)
![xgboost](https://img.shields.io/badge/xgboost-9cf.svg?&style=for-the-badge&logo=python&logoColor=white)
![pandas](https://img.shields.io/badge/pandas-150458.svg?&style=for-the-badge&logo=pandas&logoColor=white)
![numpy](https://img.shields.io/badge/numpy-013243.svg?&style=for-the-badge&logo=numpy&logoColor=white)
![bottleneck](https://img.shields.io/badge/bottleneck-lightgrey.svg?&style=for-the-badge)

## 3. 📥 설치 및 사용 방법

### 3.1. 필요한 소프트웨어
- **Python**: v3.10 이상
- **Flask**: v2.2.2 이상
- **Flask-Cors**: v5.0.0 이상
- **xgboost**: v2.1.1 이상
- **pandas**: v2.2.3 이상
- **numpy**: v1.23.5 이상
- **bottleneck**: v1.4.0 이상

### 3.2. 설치 방법

#### Backend 설치
1. **Python 가상환경 생성 ( macOS, Linux )**
    ```bash
    source venv/bin/activate
    ```
2. **PHPDeobfuscator 의 폴더 내에서 composer 설치**
    ```bash
    composer install 
    ```
   
#### Frontend 설치
1. **프로젝트 클론**
    ```bash
    git clone https://github.com/your-repo/project-name.git
    cd project-name/frontend
    ```
2. **필수 패키지 설치**
    ```bash
    npm install
    ```

### 3.3. 사용 방법

1. **백엔드 서버 실행**
    ```bash
    python app.py
    ```

2. **프론트엔드 서버 실행**
    ```bash
    npm run dev
    ```

3. 웹 브라우저로 접속하여 프로젝트를 실행합니다.

---

## 4. 🎥 소개 및 시연 영상

프로젝트 작동 원리 및 시연 영상을 통해 더 자세한 내용을 확인할 수 있습니다.

[[프로젝트 시연 영상]](https://example.com/path_to_demo_video)

> 위를 클릭하면 외부 사이트로 이동하여 시연 영상을 확인할 수 있습니다.

---

## 5. 👥 팀 소개

| **이름**  | **역할**          | **설명**                                       |
|---------|-----------------|----------------------------------------------|
| **문정윤** | 팀장, Frontend 개발 | AI 모델 설계 및 웹쉘 탐지 알고리즘 구현, 프론트엔드 개발 담당        |
| **구지원** | Backend 개발      | AI 모델 설계 및 웹쉘 탐지 알고리즘 구현, Flask 기반 백엔드 개발 담당 |
| **차기은** | Frontend 개발 | AI 모델 설계 및 웹쉘 탐지 알고리즘 구현, 프론트엔드 개발 담당        |
