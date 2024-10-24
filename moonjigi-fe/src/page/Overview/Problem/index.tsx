import styles from "../index.module.scss";

const Problem = () => {
  return (
    <div className={styles.problemPageContainer}>
      <h2 className={styles.problemTitle}>
        What’s the PROBLEM ?&nbsp;<span className={styles.emoji}>🧐</span>
      </h2>
      <div className={styles.problemBox}>
        <p>
          웹쉘은 웹 서버를 침투하여 추가적인 공격을 시작할 수 있는 악성
          스크립트이다. 이러한 악성 스크립트 웹쉘을 이용한 공격은 지속적으로
          증가하고 있다.
          <br />
          <br />
          마이크로소프트의 Microsoft 365 Defender에서 발표한 ‘Web shell attacks
          continue to rise’에 따르면, 2022년과 2021년에 발견된 웹쉘은 14만
          건으로 2019년부터 2년간 발생된 웹쉘 평균 개수의 7만 7천 건에 비해 2배
          증가한 수치이다. 이러한 추세는 웹쉘이 지속적으로 증가함을 보여준다.
          또한, 그 추세를 나타내는 아래의 그래프는 웹쉘이 단순히 지속적으로
          증가한다는 사실과 더불어 가속화되고 있다는 것을 보여준다.
          <br />
          <br />
          <div className={styles.imgContainer}>
            <img
              src="src/assets/graph1.png"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </div>
          <br />
          국내의 경우, LG유플러스에서 2009년과 2018년에 업로드된
          악성코드(웹쉘)가 2023년 1월까지도 삭제되지 않은 채로 남아 있었고,
          대규모 개인정보 유출 사고로 인해 과징금 68억원과 과태료 2700만원을
          부과하였다. 이와 같은 사례로 웹쉘의 심각성을 알 수 있다.
          <br />
          <br />
          이러한 웹쉘의 증가하는 보편성은 공격자에게 얼마나 단순하고
          효과적인지에 기인할 수 있다. 또한 기존 웹쉘 정적 탐지에서 많이 사용된
          통계적인 기법은 웹쉘 탐지 성능이 감소하는 난독화 편향 문제가 발생한다.
          그러므로 난독화 편향 문제가 발생하지 않으면서, 웹쉘을 탐지하는 방법을
          제안하려한다.
        </p>
      </div>
    </div>
  );
};

export default Problem;
