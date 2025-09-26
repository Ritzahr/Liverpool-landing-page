import Image from "next/image";
import styles from "./player-card.module.css";
import { useEffect, useState } from "react";

const PlayerCard = ({ name, position, img, handleClick, isActive, onClick}) => {
  
  return (
    <main
      className={`${styles.card} ${isActive ? styles.selected : ''}`}
      onClick={() => {onClick(), handleClick(name)}}
    >
      <div className={styles.contents}>
        <div className={styles.imgWrapper}>
          <Image
            src={img}
            alt={`image of ${name}`}
            className={styles.img}
            fill
          />
        </div>
        <div className={styles.meta}>
            <h1>{` ${name}`}</h1>
            <p>{` ${position}`}</p>
        </div>
      </div>
    </main>
  );
};

export { PlayerCard };