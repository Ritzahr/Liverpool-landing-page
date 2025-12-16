import { ChevronDown } from "@/components/atoms/chevron-down";
import styles from "./calendar-arrow.module.css";

const CalendarArrow = ({ containerRef, cardWidth, clickedYear, direction='left', order=0, rotation=0 }) => {
  const scrollWidth = cardWidth?.offsetWidth;

  const clickHandle = () => {
    containerRef.current.scrollBy({
      left: (direction === 'left' ? -scrollWidth : scrollWidth),
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container} style={{ order, transform: `rotate(${rotation}deg)` }}>
      <div className={styles.wrapper} onClick={clickHandle}>
        {clickedYear && <ChevronDown height={120} width={120} fill="white" />}
      </div>
    </div>
  );
};

export { CalendarArrow };
