import styles from "./schedule-table.module.css";
import { gameSchedule } from '../../assets/prem-fixtures/game-schedule';


const ScheduleTable = () => {
  return (
  <div className={styles.wrapper}>
    {
      gameSchedule.map((fixture) => {
        return (
            <table 
            key={`id-${fixture.month}`} 
            className={styles.table}
            > 
              <thead>
                <caption>
                  {gameSchedule.indexOf(fixture) >= 5 ? 2025 : 2024}
                </caption>
                <th colSpan='3' className={styles.th}>{fixture.month}</th>
              </thead>
              <tbody>
                    {fixture.games.map((game) => {
                      return (
                        <tr
                        key={`id-${game.date}/${game.month}-${game.team}`}>
                          <td className={styles.td}>
                            {game.date}
                          </td>
                          <td className={styles.td}>
                            {game.team}
                          </td>
                          <td className={styles.td}>
                            {game.side}
                          </td>
                        </tr>
                      )
                      })
                    }
              </tbody>
            </table>
          )
      })
    }
  </div>
  )
};

export { ScheduleTable };
