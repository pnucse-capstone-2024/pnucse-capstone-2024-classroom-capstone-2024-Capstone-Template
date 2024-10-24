import Goal from "./Goal";
import HowTo from "./HowTo";
import styles from "./index.module.scss";
import Information from "./Information";
import Problem from "./Problem";

const Overview = () => {
  return (
    <div className={styles.container}>
      <Information />
      <Problem />
      <Goal />
      <HowTo />
    </div>
  );
};

export default Overview;
