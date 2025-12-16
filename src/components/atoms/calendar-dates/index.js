import { useState } from "react";
import { Months } from "../months";
import styles from "./calendar-dates.module.css";
import { CalendarArrow } from "@/components/molecules/calendar-arrow";

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
      <CalendarArrow
        clickedMonth={clickedMonth}
        clickedYear={clickedYear}
        containerRef={containerRef}
        cardWidth={cardWidth?.current}
      />
      <CalendarArrow
        clickedMonth={clickedMonth}
        clickedYear={clickedYear}
        containerRef={containerRef}
        cardWidth={cardWidth?.current}
        direction="right"
        order={3}
        rotation={180}
      />
    </div>
  );
};
export { CalendarDates };
