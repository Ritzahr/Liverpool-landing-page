import styles from './fixture-card.module.css';

const FixtureCard = ({games}) => {
  return ( 
    <div className={styles.container}>
      {games.map((game) => {
        return (
          <div
            className={styles.game}
            key={`fixture-${game.team}`}
          >
            <p>{game.date}</p>
            <p>{game.team}</p>
            <p>{game.side}</p>
          </div>
        )
      })}
    </div>
  )

};

export { FixtureCard }