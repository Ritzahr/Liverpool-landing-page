import Image from "next/image";
import styles from './player-card.module.css';


const PlayerCard = ({ name, position, img }) => {
    return (
        <div className={styles.card}>
                    <Image 
                        src={img}
                        alt="1"
                        className={styles.img}
                    />
                <div className={styles.infosection}>  
                    <div>{` ${name}`}</div>
                    <div>Position:{` ${position}`}</div>
                </div>
        </div>
    );
};

export { PlayerCard };
