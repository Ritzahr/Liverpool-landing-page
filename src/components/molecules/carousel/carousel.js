import { PlayerCard } from "../../atoms/player-card/player-card";
import styles from "./carousel.module.css";
import { players } from "@/assets/players-2024/roster";
import { useState } from "react";

const PlayerCarousel = () => {
  const [cardClicked, setCardClicked]= useState(false);
  const [hologramIMG, sethologramIMG]= useState(null);

  
  const cardClick = (name) => { 
      setCardClicked(players.find((player) => player.name===name))
      sethologramIMG(name)
  };
  console.log(cardClicked)

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.hologram} ${cardClicked ? styles.hologramClicked : ''}`}>
        {cardClicked && (<img src={`${cardClicked.bodyImage.src}`}/>)}
      </div>
      <div className={styles.gradientTop}>
        <div className={styles.inner}>
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
            })}
          </div>
          <div className={styles.arrows}>
            <div className={styles.arrowsContent}> *ARROWS HERE* </div>
          </div>
        </div>
        <div className={styles.gradientBottom}></div>
      </div>
    </div>
  );
};

export { PlayerCarousel };
