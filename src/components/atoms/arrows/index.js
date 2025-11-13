import { ChevronDown } from "../chevron-down";
import styles from "./arrows.module.css";

const Arrows = ({ arrowClick }) => {
  return (
    <div className={styles.section}>
      <div className={styles.left} onClick={() => arrowClick("left")}>
        <ChevronDown />
      </div>
      <div className={styles.right} onClick={() => arrowClick("right")}>
        <ChevronDown />
      </div>
    </div>
  );
};

export { Arrows };
