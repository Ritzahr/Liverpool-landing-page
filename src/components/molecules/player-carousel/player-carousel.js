import { PlayerCard } from "@/components/atoms/player-card/player-card";
import { players } from "@/assets/players-2024/roster";
import { useEffect, useRef, useState } from "react";
import styles from './player-carousel.module.css';
import { Arrow } from "@/components/atoms/arrows/arrows";
import Image from "next/image";

const PlayerCarousel = () => {
  const [fade, setFade]= useState(null);
  const [cardClicked, setCardClicked]= useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);

  const cardClick = (name) => { 
    setCardClicked(players.find((player) => player.name===name))
    setFade('fadeIn')
  };

  useEffect(() => {
    setCurrentIndex(players.indexOf(cardClicked));
  },[cardClicked]);

  const arrowClick = (direction) => {
    const allCards = playerRef.current.children;
    const nextCard = players[currentIndex + 1];
    const prevCard = players[currentIndex - 1];

    if (direction==='right' && cardClicked && players.indexOf(cardClicked) !== players.length - 1) {
      cardClick(nextCard.name);
      allCards[currentIndex+1].scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (direction==='left' && cardClicked && players.indexOf(cardClicked) !== 0) {
      cardClick(prevCard.name);
      allCards[currentIndex-1].scrollIntoView({ behavior: "smooth", block: "start" })
    }
  };
  
  useEffect(() => {
    if (fade === "fadeIn") {
      const timer = setTimeout(() => setFade(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  return (
    <main className={styles.section}>
      <div className={styles.hologramSection}>
        {cardClicked && (
          <>
            <Image
              className={`${styles.image} ${fade ? styles.fadeIn : ""}`} 
              src={`${cardClicked.bodyImage.src}`} 
              alt={`Image of ${cardClicked.bodyImage.src}`}
              width={650}
              height={960}
            />
            <div className={`${styles.bio} ${fade ? styles.bioFade : ""}`}>
              <p>{cardClicked.bio}</p>
            </div>
          </>
          )}
      </div>
        <div 
         className={styles.container}
         ref={playerRef}
        >
          {players.map((player) => {
            return (
              <PlayerCard
                  key={`${player.name}-${player.image}`}
                  name={`${player.name}`}
                  position={`${player.position}`}
                  img={player.image}
                  handleClick={cardClick}
              />
              );
            })};
        </div>
        <div className={styles.bottom}>
         <Arrow 
            arrowClick={arrowClick}
            cardClicked={cardClicked}
         />
        </div>
    </main>
  );
};

export { PlayerCarousel };

