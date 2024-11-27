import { ChevronDown } from "../chevron-down/chevron-down";
import styles from "./arrows.module.css";

const Arrow = ({arrowClick}) => {
  return (
    <div className={styles.arrows}>
      <div className={styles.arrowsContent}>
        <div
          className={styles.left}
          onClick={() => arrowClick('left')}
        >
          <ChevronDown 
          />
        </div>
        <div 
          className={styles.right}
          onClick={() => arrowClick('right')}
        >
          <ChevronDown 
          />
        </div>
      </div>
    </div>
  );
};

export { Arrow };
