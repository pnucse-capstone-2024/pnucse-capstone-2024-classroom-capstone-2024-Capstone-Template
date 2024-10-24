import React from "react";
import styles from "../index.module.scss";

const RandomForest: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Forest</h1>
      <div className={styles.description}>
        Normal 클래스에서 높은 정밀도(96%)를 보여, 정상 트래픽을 잘 식별했지만,
        재현율(Recall)은 90%로 다소 낮았다.
        <br />
        반면 Webshell 클래스는 정밀도(83%)가 낮은 편이지만 재현율(94%)이 높아,
        악성 웹셸을 놓치는 경우가 적었다. <br />
        전반적으로 F1-score는 두 클래스에서 모두 88~93%로 균형 잡힌 성능을
        보였다.
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>precision</th>
            <th>recall</th>
            <th>f1-score</th>
            <th>support</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>normal</td>
            <td>0.96</td>
            <td>0.90</td>
            <td>0.93</td>
            <td>355</td>
          </tr>
          <tr>
            <td>webshell</td>
            <td>0.83</td>
            <td>0.94</td>
            <td>0.88</td>
            <td>191</td>
          </tr>
          <tr>
            <td>accuracy</td>
            <td></td>
            <td></td>
            <td>0.91</td>
            <td>546</td>
          </tr>
          <tr>
            <td>macro avg</td>
            <td>0.90</td>
            <td>0.92</td>
            <td>0.90</td>
            <td>546</td>
          </tr>
          <tr>
            <td>weighted avg</td>
            <td>0.92</td>
            <td>0.91</td>
            <td>0.91</td>
            <td>546</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RandomForest;
