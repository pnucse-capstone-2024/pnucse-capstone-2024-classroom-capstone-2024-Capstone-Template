# 머신러닝, 자연어 처리 기반 중고차 추천 플랫폼

### 1. 프로젝트 소개
#### 1.1. 배경 및 필요성
* 기존 LLM은 일반적인 질문에는 쉽게 답변하지만, 특정 분야의 전문적인 지식이 요구되는 질문에는 한계가 있다.
* 이를 보완하기 위해서는 해당 도메인에 특화된 추가 학습 또는 추가적인 정보 검색 및 연동 시스템이 필요하다.
* 중고차 매물 및 관련 정보들은 매우 방대하지만, 일반 소비자들이 원하는 정보를 찾기에는 힘든 경우가 많다.

#### 1.2. 목표 및 주요 내용
* 중고차 관련 지식이 부족한 일반 사용자도 쉽게 정보를 얻고, 적합한 매물을 추천받을 수 있는 챗봇을 제작한다.
* 간단하고 직관적인 인터페이스의 웹 애플리케이션 형태로 서비스를 제공하여 사용자가 쉽게 사용하도록 한다.

### 2. 상세설계
#### 2.1. RAG 모델
<div align="center">
    <img src="https://github.com/user-attachments/assets/961eee3d-045d-4b5b-bdf6-140e911c1490" alt="RAG 모델" />
</div>

#### 2.2. 챗봇 서비스
<div align="center">
    <img src="https://github.com/user-attachments/assets/6ae027a5-ee55-4864-b7c6-5ed91dadcca3" alt="챗봇 서비스" />
</div>

#### 2.3. 사용 기술
> 
> #### 디자인 기술 스택
> Tailwind CSS - 3.4.12  
> PostCSS - 8.4.47  
> Autoprefixer - 10.4.20  
>
> #### 프론트엔드 기술 스택
> React, React DOM - 18.3.1  
> React Router - 6.26.2  
> Axios - 1.7.7  
> React Cookie - 7.2.1  
> TypeScript - 4.4.2  
> React Scripts - 5.0.1  
>
> #### 백엔드 기술 스택
> Spring Boot - 3.3.2  
> MariaDB - 3.4.1  
> Java - Java 17  

### 3. 설치 및 사용 방법
> #### 해당 서비스를 동작하기 위해 사전에 다음과 같은 프로그램을 설치합니다.
>
>  1. node.js
> - 공식 홈페이지에서 node.js를 설치하세요(https://nodejs.org/en)
> - 설치를 완료하고 ```npm i -g yarn```을 실행해 패키지 매니저를 다운받는다
>  
> 2. intellij IDEA
> - 공식 홈페이지에서 intellij를 설치하세요 (https://www.jetbrains.com/idea/download/?section=windows)
> - community 버전을 사용해도 무관하지만 untilmate 버전을 추천드립니다.
> 
> 3. Docker Desktop
> - 공식 홈페이지에서 docker desktop을 설치하세요 (https://www.docker.com/products/docker-desktop/)
> - 다운로드 후 실행했을 때 wsl 오류가 발생한다면 호스트 파일 변경을 차단하는 경우가 있을 수 있으니, 알약 등 백신 프로그램에서 해당 기능을 해제하세요.
> 
> 4. MariaDB
> - 공식 홈페이지에서 MariaDB를 설치하세요 (https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.5.2&os=windows&cpu=x86_64&pkg=msi&mirror=blendbyte)
> - msi 파일을 다운받고 실행한 후 단계별로 따라오면 됩니다.
> - user setting 페이지에서 root 계정에 사용할 비밀 번호와 UTF8을 사용하게 설정합니다.
> - 이후 설치를 완료하면 HeidSQL을 동작시켜 왼쪽 하단의 NEW를 클릭, 설정한 password를 입력하면 서버에 접속할 수 있습니다.
> 
> #### 서비스 실행
> 1. github에서 모든 파일을 local로 내려받는다.
> 2. intellij에서 내려받은 경로를 통해 car-talk-develop 폴더를 열고 gradle 설정이 완료될 때 까지 기다린다.
> 3. 좌측 terminal에서 ```pip install -r infra/requirements.txt``` 를 입력하고 실행한다.
> 4. windows powershell을 실행하고 루트 폴더 (yarn.lock 파일이 존재하는 경로)로 이동해 yarn을 입력해 실행한다.
> 5. docker desktop을 실행하고 intellij에서 docker-compose.yml 파일을 실행한다.
> 6. docker에서 모든 파일이 ruuning 상태임을 확인하면 application-local(h2 database 사용), application-dev.yml(MariaDB 사용) 중 택하여 실행한다.
> 7. springboot 프로젝트와 docker가 정상적으로 동작하면 windows powershell에서 루트 폴더 (yarn.lock 파일이 존재하는 경로)로 이동한 후 ```yarn start:dev```를 입력하고 실행한다.
> 8. localhost:3000으로 접속하거나, 잠시 기다려 서비스 동작을 확인한다.
### 4. 소개 및 시연 영상
[![2024년 전기 졸업과제 34 도미노](http://img.youtube.com/vi/Cjc282zJxf8/0.jpg)](https://www.youtube.com/watch?v=Cjc282zJxf8)

### 5. 팀 소개
* 이은진 ltdmswls@pusan.ac.kr
  - 챗봇 웹페이지 UI 디자인 설계
  - 중고차 관련 외부 데이터 수집
  - RAG 시스템 설계 및 모델 구현
  - 프론트엔드 일부 기능 개발
  
* 최성빈 sb4759@naver.com
  - 데이터베이스 구조 설계
  - 백엔드 전체 시스템 개발
  - 프론트엔드 일부 기능 개발
  - 버그 수정 및 최종 테스트

* 최희웅 dhw1966@pusan.ac.kr
  - 중고차 매물 크롤링 및 전처리
  - 중고차 관련 외부 데이터 수집
  - Flask를 이용한 챗봇 API 구축
  - 프론트엔드 일부 기능 개발

