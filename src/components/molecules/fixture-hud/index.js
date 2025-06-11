import { FixtureCard } from '@/components/atoms/fixture-card';
import styles from './fixture-hud.module.css';
import { gameSchedule } from '@/assets/prem-fixtures/game-schedule';

const FixtureHud = ({month, setClickedMonth, setIsHovering, setHoveredTeam, isHovering}) => {
  const closeHud = () => {
    setClickedMonth(null)
  }
 return (
   <div className={`${month ? styles.true : styles.false} ${isHovering ? styles.active : ''}`}>
      <button
        className={styles.exit}
        onClick={closeHud}
      >
        X
      </button>
      <ul className={styles.games}>
        {
          gameSchedule.map((game) => {
            if (game.month.includes(month))
              return (
            <FixtureCard 
            key={month}
            games={game.games}
            setIsHovering={setIsHovering}
            setHoveredTeam={setHoveredTeam}
            isHovering={isHovering}
            />
          )
        })
      }
      </ul>
  </div>
 )
}

export { FixtureHud };
