import { ChevronDown } from "../chevron-down/chevron-down";
import styles from "./arrows.module.css";

const Arrow = () => {
  return (
    <div className={styles.arrows}>
      <div className={styles.arrowsContent}>
        <div className={styles.left}>
          <ChevronDown 
          />
        </div>
        <div className={styles.right}>
          <ChevronDown 
          />
        </div>
      </div>
    </div>
  );
};

export { Arrow };
