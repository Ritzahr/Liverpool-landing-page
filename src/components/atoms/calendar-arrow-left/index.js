import styles from "./calendar-arrow-left.module.css";
import { ChevronDown } from "../chevron-down";

const LeftCalendarArrow = ({ containerRef, cardWidth, clickedYear }) => {
  const scrollWidth = cardWidth?.offsetWidth;
  const clickHandle = () => {
    containerRef.current.scrollBy({
      left: -scrollWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} onClick={clickHandle}>
        {clickedYear && <ChevronDown height={120} width={120} fill="white" />}
      </div>
    </div>
  );
};

export { LeftCalendarArrow };
