import { Arrow } from "@/components/atoms/arrows/arrows";
import { PlayerCarousel } from "../player-carousel/player-carousel";
import { useState } from "react";
import { players } from "@/assets/players-2024/roster";
import styles from "./card-section.module.css";

const Cardsection = () => {
  const [fade, setFade]= useState(null);
  const [cardClicked, setCardClicked]= useState(null);

  const cardClick = (name) => { 
    setCardClicked(players.find((player) => player.name===name))
    setFade('fadeIn')
  };

  return (
    <div className={styles.wrapper}>
    <div className={styles.gradientTop}>
      <PlayerCarousel 
        handleClick={cardClick} 
        fade={fade}
        cardClicked={cardClicked}
        players={players}
      />
      <div className={styles.gradientBottom}></div>
      <Arrow />
    </div>
    </div>
  );
};

export { Cardsection };
