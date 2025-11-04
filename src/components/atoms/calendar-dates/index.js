import { LeftCalendarArrow } from "../calendar-arrow-left";
import { RightCalendarArrow } from "../calendar-arrow-right";
import { Months } from "../months";
import styles from "./calendar-dates.module.css";

const CalendarDates = ({ range, months, showGames, clickedYear }) => {
  return (
    <div className={styles.container}>
      <Months range={range} months={months} showGames={showGames} />
      <LeftCalendarArrow clickedYear={clickedYear}/>
      <RightCalendarArrow clickedYear={clickedYear}/>
    </div>
  );
};
export { CalendarDates };
