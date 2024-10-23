import Image from "next/image";
import styles from './player-card.module.css';

const PlayerCard = ({ name, position, img, handleClick }) => {
    return (
      <div className={styles.card} 
          onClick={() => handleClick(name)}
        >
            <Image 
              src={img}
              alt=""
              className={styles.img}
              />
                <div className={styles.infosection}>  
                    <h1>{` ${name}`}</h1>
                    <p>{` ${position}`}</p>
                </div>
        </div>
    );
};

export { PlayerCard };