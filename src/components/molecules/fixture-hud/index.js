import { FixtureCard } from "@/components/atoms/fixture-card";
import styles from "./fixture-hud.module.css";
import { gameSchedule } from "@/assets/prem-fixtures/game-schedule";
import { useEffect } from "react";

const FixtureHud = ({
  month,
  setClickedMonth,
  setIsHovering,
  setHoveredTeam,
  isHovering,
}) => {

  return (
    <div
      className={`${month ? styles.true : styles.false} ${
        isHovering ? styles.active : ""
      }`}
    >
      <ul className={styles.games}>
        {gameSchedule.map((game) => {
          if (game.month.includes(month))
            return (
              <FixtureCard
                key={month}
                games={game.games}
                setIsHovering={setIsHovering}
                setHoveredTeam={setHoveredTeam}
                isHovering={isHovering}
                setClickedMonth={setClickedMonth}
              />
            )
        })}
      </ul>
    </div>
  )
};

export { FixtureHud };
