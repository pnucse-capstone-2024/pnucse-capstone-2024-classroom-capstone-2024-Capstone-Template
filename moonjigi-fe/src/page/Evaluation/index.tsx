import React from "react";
import RandomForest from "./RandomForest";
import XGBoost from "./XGBoost";
import SupportVector from "./SVM";

const Evaluation: React.FC = () => {
  return (
    <>
      <RandomForest/>
      <SupportVector/>
      <XGBoost/>
    </>
  );
};

export default Evaluation;
