import styles from "../index.module.scss";

function HowTo() {
  return (
    <div className={styles.howToContainer}>
      <h2 className={styles.howToTitle}>
        But HOW ?&nbsp;<span className={styles.emoji}>👀</span>
      </h2>
      <div className={styles.stepArea}>
        <div className={styles.howToBox}>
          <div className={styles.number}>1</div>
          <div className={styles.textBox}>난독화된 php 파일을 비난독화</div>
        </div>
        <div className={styles.howToBox}>
          <div className={styles.number}>2</div>
          <div className={styles.textBox}>
            비난독화된 파일 및 일반 파일로부터
            <br />
            AST, opcode 추출
          </div>
        </div>
        <div className={styles.howToBox}>
          <div className={styles.number}>3</div>
          <div className={styles.textBox}>TextRank 기반 알고리즘 구현</div>
        </div>
        <div className={styles.howToBox}>
          <div className={styles.number}>4</div>
          <div className={styles.textBox}>
            머신러닝을 이용한
            <br />
            성능평가 수행 및 시각화
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
