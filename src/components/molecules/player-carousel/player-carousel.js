import { PlayerCard } from "@/components/atoms/player-card/player-card";
import { useEffect } from "react";
import styles from './player-carousel.module.css';

const PlayerCarousel = ({ handleClick, fade, cardClicked, players }) => {

  useEffect(() => {

    if (fade === "fadeIn") {
      const timer = setTimeout(() => setFade(null), 500);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  return (
    <main className={styles.section}>
      <div className={styles.hologramSection}>
        {cardClicked && (
          <img 
            className={`${styles.image} ${fade ? styles.fadeIn : ""}`} 
            src={`${cardClicked.bodyImage.src}`} />
          )}
      </div>
        <div className={styles.cardRow}>
          {players.map((player) => {
            return (
                <PlayerCard
                  name={`${player.name}`}
                  position={`${player.position}`}
                  img={player.image}
                  key={`${player.name}-${player.image}`}
                  handleClick={handleClick} 
                />
                );
            })};
        </div>
    </main>
  );
};


export { PlayerCarousel };

