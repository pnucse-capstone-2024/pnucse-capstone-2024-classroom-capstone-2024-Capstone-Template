import React from "react";
import styles from "../index.module.scss";

const SupportVector: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SVM</h1>
      <div className={styles.description}>
        Normal 클래스에서는 재현율(97%)이 매우 높아 정상 트래픽을 잘 식별했지만,
        Webshell 클래스에서 재현율(65%)이 낮아 악성 웹셸을 놓치는 경우가 많았다.
        <br />두 클래스의 F1-score 차이(90% vs 76%)가 크며, 이는 SVM이 웹셸
        탐지에 있어 다소 성능이 떨어진다는 것을 보여준다.
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
            <td>0.84</td>
            <td>0.97</td>
            <td>0.90</td>
            <td>355</td>
          </tr>
          <tr>
            <td>webshell</td>
            <td>0.91</td>
            <td>0.65</td>
            <td>0.76</td>
            <td>191</td>
          </tr>
          <tr>
            <td>accuracy</td>
            <td></td>
            <td></td>
            <td>0.86</td>
            <td>546</td>
          </tr>
          <tr>
            <td>macro avg</td>
            <td>0.87</td>
            <td>0.81</td>
            <td>0.83</td>
            <td>546</td>
          </tr>
          <tr>
            <td>weighted avg</td>
            <td>0.86</td>
            <td>0.86</td>
            <td>0.85</td>
            <td>546</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SupportVector;
