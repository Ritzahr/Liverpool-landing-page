import { players } from "@/assets/players-2024/roster";
import { PlayerCard } from "@/components/atoms/player-card/player-card";
import { useEffect, useState } from "react";
import styles from './player-carousel.module.css';

const PlayerCarousel = () => {
  const [cardClicked, setCardClicked]= useState(null);
  const [isHiding, setIsHiding] = useState(true);
  const [fade, setFade]= useState(null);

  useEffect(() => {
    if (fade === "fadeIn") {
      const timer = setTimeout(() => setFade(null), 500);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  const cardClick = (name) => { 
    setCardClicked(players.find((player) => player.name===name))
    setFade('fadeIn')
  };

  return (
    <main className={styles.section}>
      <div className={styles.hologramSection}>
        {cardClicked && (
          <img className={`${styles.image} ${fade ? styles.fadeIn : ""}`} src={`${cardClicked.bodyImage.src}`} />
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
                  handleClick={cardClick} 
                />
                );
            })};
        </div>
    </main>
  );
};


export { PlayerCarousel };

