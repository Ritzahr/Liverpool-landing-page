import { useState } from "react";
import { LeftCalendarArrow } from "../calendar-arrow-left";
import { RightCalendarArrow } from "../calendar-arrow-right";
import { Months } from "../months";
import styles from "./calendar-dates.module.css";

const CalendarDates = ({ range, months, showGames, clickedYear, clickedMonth, setClickedMonth }) => {
  const [cardWidth, setCardWidth] = useState(null);
  const [containerRef, setContainerRef] = useState(null);

  return (
    <div className={styles.container}>
      <Months
        setContainerRef={setContainerRef}
        setCardWidth={setCardWidth}
        range={range}
        months={months}
        showGames={showGames}
        clickedMonth={clickedMonth}
        setClickedMonth={setClickedMonth}        
      />
      <LeftCalendarArrow
        containerRef={containerRef}
        cardWidth={cardWidth?.current}
        clickedYear={clickedYear}
        clickedMonth={clickedMonth}
      />
      <RightCalendarArrow
        containerRef={containerRef}
        cardWidth={cardWidth?.current}
        clickedYear={clickedYear}
        clickedMonth={clickedMonth}
      />
    </div>
  );
};
export { CalendarDates };
