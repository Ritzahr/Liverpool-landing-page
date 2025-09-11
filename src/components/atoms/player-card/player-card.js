import Image from "next/image";
import styles from "./player-card.module.css";

const PlayerCard = ({ name, position, img, handleClick }) => {
  return (
    <main
      className={styles.card}
      onClick={() => handleClick(name)}
    >
      <div className={styles.contents}>
        <div className={styles.imgWrapper}>
          <Image
            src={img}
            alt={`image of ${name}`}
            className={styles.img}
          />
        </div>
        <div className={styles.meta}>
          <div className={styles.info}>
            <h1>{` ${name}`}</h1>
            <p>{` ${position}`}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export { PlayerCard };