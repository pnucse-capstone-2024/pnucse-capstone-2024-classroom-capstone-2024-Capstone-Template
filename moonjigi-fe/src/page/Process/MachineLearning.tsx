import styles from "./index.module.scss";

const ML = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <h2 className={styles.highlight}>Machine Learning</h2>
        <ul className={styles.listItem}>
          <li className={styles.list}>
            Random Forest
            <p className={styles.description}>
              여러 개의 결정 트리를 모아 다수결로 최종 예측을 내리는 앙상블 학습 기법
            </p>
          </li>
          <li className={styles.list}>
            SVM
            <p className={styles.description}>
              데이터를 두 개의 클래스 사이에서 최대 폭의 마진을 가진 초평면으로 분류하는 모델
            </p>
          </li>
          <li className={styles.list}>
            XGBoost
            <p className={styles.description}>
              여러 트리 모델을 순차적으로 학습시켜 성능을 개선하는 부스팅 기법
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ML;
