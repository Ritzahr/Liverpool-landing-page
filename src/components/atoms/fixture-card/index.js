import styles from "./fixture-card.module.css";

const FixtureCard = ({
  games,
  setIsHovering,
  setHoveredTeam,
  setClickedMonth,
}) => {
  const onMouseEnter = ({ target }) => {
    const team = target?.children[1]?.innerHTML;
    setHoveredTeam(team);
    setIsHovering(true);
  };

  const onMouseLeave = () => setIsHovering(false);

  const closeHud = () => {
    setClickedMonth(null);
  };

  return (
    <div className={styles.container} data-testid="fixture-card">
      <div className={styles.exit} role="button" onClick={closeHud}>
        X
      </div>
      {games.map((game, i) => {
        return (
          <div
            className={styles.game}
            data-testid="game"
            key={`fixture-${game.team}-${i}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <p>{game.date}</p>
            <p>{game.team}</p>
            <p>{game.side}</p>
          </div>
        );
      })}
    </div>
  );
};

export { FixtureCard };
