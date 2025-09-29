import styles from './fixture-card.module.css';

const FixtureCard = ({games, setIsHovering, setHoveredTeam, setClickedMonth}) => {
  const onMouseEnter = ({target}) => {
    const team = target.children[1].innerHTML;
    setHoveredTeam(team)
    setIsHovering(true)
    console.log(target);
  };

  const onMouseLeave = () => setIsHovering(false);

  const closeHud = () => {
    setClickedMonth(null);
  };

  return (  
    <div className={styles.container}>
       <div className={styles.exit} onClick={closeHud}>
        X
      </div>
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