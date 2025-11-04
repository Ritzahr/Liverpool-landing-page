import styles from "./calendar-arrow-right.module.css";
import { ChevronDown } from "../chevron-down";

const RightCalendarArrow = ({ clickedYear }) => {
  const clickHandle = () => {
    console.log("Click", clickedYear);
  };

  return (<div className={styles.container}>
    <div className={styles.wrapper} onClick={clickHandle}>
      {clickedYear && <ChevronDown height={120} width={120} fill="white" />}
    </div>
  </div>
  )
};


export { RightCalendarArrow };
