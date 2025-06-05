import { FixtureCard } from '@/components/atoms/fixture-card';
import styles from './fixture-hud.module.css';
import { gameSchedule } from '@/assets/prem-fixtures/game-schedule';

const FixtureHud = ({month, setClickedMonth}) => {
  const closeHud = () => {
    setClickedMonth(null)
  }
 return (
  <div className={`${styles.container} ${month ? styles.active : ''}`}>
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
            />
          )
        })
      }
    </ul>
  </div>
 )
}

export { FixtureHud };
