import React from "react";
import styles from "../index.module.scss";

const XGBoost: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>XGBoost</h1>
      <div className={styles.description}>
        Normal과 Webshell 두 클래스 모두에서 우수한 성능을 보였다. <br />
        특히 웹셸 탐지에서는 정밀도(88%)와 재현율(96%)이 균형 있게 높아, 거의
        모든 악성 웹셸을 정확하게 탐지할 수 있었다. <br />두 클래스의 F1-score도
        95%, 92%로 매우 높아, 다른 모델들에 비해 전반적으로 가장 안정적인 성능을
        나타냈다.
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
            <td>0.98</td>
            <td>0.93</td>
            <td>0.95</td>
            <td>355</td>
          </tr>
          <tr>
            <td>webshell</td>
            <td>0.88</td>
            <td>0.96</td>
            <td>0.92</td>
            <td>191</td>
          </tr>
          <tr>
            <td>accuracy</td>
            <td></td>
            <td></td>
            <td>0.94</td>
            <td>546</td>
          </tr>
          <tr>
            <td>macro avg</td>
            <td>0.93</td>
            <td>0.95</td>
            <td>0.93</td>
            <td>546</td>
          </tr>
          <tr>
            <td>weighted avg</td>
            <td>0.94</td>
            <td>0.94</td>
            <td>0.94</td>
            <td>546</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default XGBoost;
