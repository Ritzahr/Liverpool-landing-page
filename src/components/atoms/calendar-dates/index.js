import { useRef, useState } from "react";
import { LeftCalendarArrow } from "../calendar-arrow-left";
import { RightCalendarArrow } from "../calendar-arrow-right";
import { Months } from "../months";
import styles from "./calendar-dates.module.css";

const CalendarDates = ({ range, months, showGames, clickedYear }) => {
  const [visibleMonth, setVisibleMonth ] = useState(null);
  const [intersectionRect, setIntersectRect] = useState(null);
  const [cardWidth, setCardWidth] = useState(null);
  const [containerRef, setContainerRef] = useState(null);

  console.log("CARD WIDTH", containerRef)
  return (
    <div className={styles.container}>
      <Months setContainerRef={setContainerRef} setCardWidth={setCardWidth} range={range} months={months} showGames={showGames} setVisibleMonth={setVisibleMonth} setIntersectRect={setIntersectRect}/>
      <LeftCalendarArrow clickedYear={clickedYear}/>
      <RightCalendarArrow containerRef={containerRef} cardWidth={cardWidth?.current} clickedYear={clickedYear} intersectionRect={intersectionRect}/>
    </div>
  );
};
export { CalendarDates };
