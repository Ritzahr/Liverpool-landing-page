import styles from "./calendar-arrow-right.module.css";
import { ChevronDown } from "../chevron-down";

const RightCalendarArrow = ({ containerRef, cardWidth, clickedYear, intersectionRect }) => {
  const scrollWidth = cardWidth?.offsetWidth;
  const clickHandle = () => {
    console.log("Click", clickedYear, containerRef.current);
    containerRef.current.scrollBy({
      left: scrollWidth,
      behavior: "smooth"
    })
  };
   console.log(intersectionRect?.width)
  return (<div className={styles.container}>
    <div className={styles.wrapper} onClick={clickHandle}>
      {clickedYear && <ChevronDown height={120} width={120} fill="white" />}
    </div>
  </div>
  )
};


export { RightCalendarArrow };
