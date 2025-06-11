import styles from './fixture-card.module.css';

const FixtureCard = ({games, setIsHovering, setHoveredTeam}) => {
  const onMouseEnter = ({target}) => {
    const team = target.children[1].innerHTML;
    setHoveredTeam(team)
    setIsHovering(true)
  };

  const onMouseLeave = () => setIsHovering(false);

  return (  
    <div className={styles.container}>
      {games.map((game) => {
        return (
          <div
            className={styles.game}
            key={`fixture-${game.team}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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

export { FixtureCard };