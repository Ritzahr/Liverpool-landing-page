import { PlayerCard } from "@/components/atoms/player-card/player-card";
import { players } from "@/assets/players-2024/roster";
import { useEffect, useRef, useState } from "react";
import styles from './player-carousel.module.css';
import { Arrow } from "@/components/atoms/arrows/arrows";

const PlayerCarousel = () => {
  const [fade, setFade]= useState(null);
  const [cardClicked, setCardClicked]= useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollClicked, setScrollClicked] = useState(0);
  const playerRef = useRef(null);

  const cardClick = (name) => { 
    setCardClicked(players.find((player) => player.name===name))
    setFade('fadeIn')
  };

  // const scroll = (direction, name) => {
  //   setCardClicked(players.find((player) => player.name===name))

  //   setScrollClicked(direction);
  // };

  //dont need the fade effect.
  //Need to have scroll three cards down, without targetting a specific card.
  

  useEffect(() => {
    setCurrentIndex(players.indexOf(cardClicked));
  },[cardClicked, scrollClicked]);

  const arrowClick = (direction) => {
    const allCards = playerRef.current.children;
    const nextCard = players[currentIndex + 1];
    const prevCard = players[currentIndex - 1];

    if (direction==='right' && cardClicked && players.indexOf(cardClicked) !== players.length - 1) {
      cardClick(nextCard.name);
      // scroll(direction, nextCard.name)
      allCards[currentIndex+1].scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (direction==='left' && cardClicked && players.indexOf(cardClicked) !== 0) {
      cardClick(prevCard.name);
      allCards[currentIndex-1].scrollIntoView({ behavior: "smooth", block: "start" })
    }
  };
  
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
        <div 
         className={styles.cardRow}
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

