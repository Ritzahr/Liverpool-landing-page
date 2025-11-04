import styles from "./calendar-arrow-right.module.css";
import { ChevronDown } from "../chevron-down";

const RightCalendarArrow = ({ clickedYear }) => (
  <div className={styles.container}>
    {clickedYear && <ChevronDown height={120} width={120} fill="white" />}
  </div>
);

export { RightCalendarArrow };
