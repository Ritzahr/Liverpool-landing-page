import { useState } from "react";
import { LeftCalendarArrow } from "../calendar-arrow-left";
import { RightCalendarArrow } from "../calendar-arrow-right";
import { Months } from "../months";
import styles from "./calendar-dates.module.css";

const CalendarDates = ({ range, months, showGames, clickedYear, clickedMonth, setClickedMonth }) => {
  const [cardWidth, setCardWidth] = useState(null);
  const [containerRef, setContainerRef] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <div className={styles.container}>
      <Months
        setContainerRef={setContainerRef}
        setCardWidth={setCardWidth}
        range={range}
        months={months}
        showGames={showGames}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
        clickedMonth={clickedMonth}
        setClickedMonth={setClickedMonth}        
      />
      <LeftCalendarArrow
        containerRef={containerRef}
        cardWidth={cardWidth?.current}
        clickedYear={clickedYear}
      />
      <RightCalendarArrow
        containerRef={containerRef}
        cardWidth={cardWidth?.current}
        clickedYear={clickedYear}
      />
    </div>
  );
};
export { CalendarDates };
