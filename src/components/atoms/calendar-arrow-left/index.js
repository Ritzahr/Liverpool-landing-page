import styles from "./calendar-arrow-left.module.css";
import { ChevronDown } from "../chevron-down";

const LeftCalendarArrow = ({ clickedYear }) => (
  <div className={styles.container} >
    {clickedYear && <ChevronDown height={120} width={120} fill="white" />}
  </div>
);

export { LeftCalendarArrow };
