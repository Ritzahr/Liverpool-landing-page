import styles from "./calendar-arrow-right.module.css";
import { ChevronDown } from "../chevron-down";

const RightCalendarArrow = ({ containerRef, cardWidth, clickedYear }) => {
  const scrollWidth = cardWidth?.offsetWidth;
  const clickHandle = () => {
    console.log("click")
    containerRef.current.scrollBy({
      left: scrollWidth,
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

export { RightCalendarArrow };


// Maybe I could use the intersection observer here to trigger the show games on Months?
// NEED TO CHECK WHY THE ARROWS ARENT WORKING IN 2026 AND ALSO WHY THEY AREN'T WORKING WHEN NO MONTH HAS BEEN SELECTED.
