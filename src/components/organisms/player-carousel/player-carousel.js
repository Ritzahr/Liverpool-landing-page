import { PlayerCard } from "@/components/atoms/player-card/player-card";
import { players } from "@/assets/players-2024/roster";
import { useEffect, useRef, useState } from "react";
import styles from "./player-carousel.module.css";
import { Arrow } from "@/components/atoms/arrows/arrows";
import { Hologram } from "@/components/molecules/hologram";

const PlayerCarousel = () => {
  const [fade, setFade] = useState(null);
  const [cardClicked, setCardClicked] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);
  const cardRef = useRef(null);

  const cardClick = (name) => {
    setCardClicked(players.find((player) => player.name === name));
    setFade("fadeIn");
  };

  const keyHandler = (e) => {
    if (e.key === "ArrowRight") arrowClick("right");
    if (e.key === "ArrowLeft") arrowClick("left");
  }


  useEffect(() => {
    setCurrentIndex(players.indexOf(cardClicked));
    console.log(cardRef)
  }, [cardClicked]);

  const arrowClick = (direction) => {
    const allCards = playerRef.current.children;
    const nextCard = players[currentIndex + 1];
    const prevCard = players[currentIndex - 1];

    if (
      direction === "right" &&
      cardClicked ) {
      cardClick(nextCard.name);
      // allCards[currentIndex+1].scrollIntoView({ behavior: "smooth", block: "end", container: "nearest"})
      if (players.indexOf(cardClicked) !== players.length - 1 && players.indexOf(cardClicked) > 2) {
        playerRef.current.scrollBy({
          left: cardRef.current.offsetWidth * 1.1,
          behaviour: "smooth"
        });
      }
      if (
        direction === "left" &&
        cardClicked &&
        players.indexOf(cardClicked) !== 0
      ) {
        cardClick(prevCard.name);
        playerRef.current.scrollBy({
          right: cardRef.current.offsetWidth * 1.1,
          behaviour: "smooth"
        });
        // allCards[currentIndex - 1].scrollIntoView({behavior: "smooth", block: "start"});
      }
    }
  };

  useEffect(() => {
    if (fade === "fadeIn") {
      const timer = setTimeout(() => setFade(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  return (
    <main
      className={styles.container}
      onKeyDown={keyHandler}
      tabIndex={0}
    >
      <Hologram
        cardClicked={cardClicked}
        setCardClicked={setCardClicked}
        fade={fade}
      />
      <div
        className={`${styles.section} ${cardClicked ? styles.hide : ""}`}
        ref={playerRef}
      >
        {players.map((player, i) => {
          return (
            <div
              key={`${player.name}-${player.image}`}
              ref={cardRef}
            >
            <PlayerCard
              name={`${player.name}`}
              position={`${player.position}`}
              img={player.image}
              handleClick={cardClick}
              />
            </div>
          );
        })}
        ;
      </div>
      <div className={`${styles.bottom} ${cardClicked ? styles.hide : ""}`}>
        <Arrow arrowClick={arrowClick} cardClicked={cardClicked} />
      </div>
    </main>
  );
};

export { PlayerCarousel };
