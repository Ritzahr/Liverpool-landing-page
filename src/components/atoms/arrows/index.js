import { ChevronDown } from "../chevron-down";
import styles from "./arrows.module.css";

const Arrows = ({ arrowClick }) => {
  return (
    <div className={styles.section}>
      <div className={styles.left} role= "button" onClick={() => arrowClick("left")}>
        <ChevronDown />
      </div>
      <div className={styles.right} role= "button" onClick={() => arrowClick("right")}>
        <ChevronDown />
      </div>
    </div>
  );
};

export { Arrows };
