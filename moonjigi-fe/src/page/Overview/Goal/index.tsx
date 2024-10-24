import styles from "../index.module.scss";

function Goal() {
  return (
    <div className={styles.goalContainer}>
      <h2 className={styles.goalTitle}>
        <span className={styles.emoji}>⚽️</span>&nbsp;The GOAL is ...
      </h2>
      <div className={styles.goalBox}>
        본 과제는 딥 러닝 및 머신 러닝 기법을 활용한 난독화 웹쉘 탐지 모델
        개발을 목표로 한다.
        <br />
        <br />
        먼저 난독화 및 비난독화 도구를 기반으로 난독화 웹쉘 전처리 모듈을
        구현하는 등 웹쉘 분석 환경을 구축한 다음, 난독화 웹쉘 탐지를 위한
        textrank 기반 알고리즘을 구현한다. 마지막으로 시각화 도구를 이용하여
        웹쉘 탐지 결과를 시각적으로 쉽게 파악할 수 있도록 한다.
        <br />
        <br />
        <ol>
          <li>
            <p className={styles.bold}>난독화 편향 문제 해결</p>
            웹쉘과 일반 파일의 opcode와 AST 시퀀스를 이용해 이들 간의 관계 및
            연관성을 분석하는 웹쉘 맞춤 TextRank 알고리즘을 활용하여, 전체적인
            문서의 관계 및 연관성을 파악하고 특징을 추출하는 방법을 제안한다.
            이를 통해 난독화 편향 문제가 발생하지 않는 웹쉘 탐지 방법을
            도입한다. 데이터 셋에 난독화된 일반 파일이 포함되어 있을 때, 웹쉘
            탐지 과정에서 난독화 편향 문제가 나타나지 않도록 특징을 추출하고
            탐지하는 방법을 제공한다. 이를 통해 오탐을 줄이고 탐지 정확성을
            향상시킨다.
          </li>
          <br />
          <li>
            <p className={styles.bold}>성능 평가</p>
            제안하는 방법에 다양한 머신러닝 알고리즘을 적용하여
            정확도(accuracy), 정밀도(precision)에 대한 성능 평가를 진행한다.
          </li>
          <br />
          <li>
            <p className={styles.bold}>시각화</p>
            시각화 도구를 이용하여 웹쉘 탐지 결과를 시각적으로 쉽게 파악할 수
            있도록 한다. 이러한 과제는 난독화 웹쉘을 탐지함은 물론, 결과를
            한눈에 파악하기 쉽게 하여 누구나 쉽게 웹쉘 탐지의 과정과 결과에 쉽게
            접근할 수 있도록 한다.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Goal;
