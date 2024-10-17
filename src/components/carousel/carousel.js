import { PlayerCard } from "../player-card/player-card";
import styles from "./carousel.module.css";
import { players } from "@/assets/players-2024/roster";


const PlayerCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradientTop}>
        <div className={styles.inner}>
          <div className={styles.cardRow}>
           {players.map((player)=>{
             return <PlayerCard 
             name={`${player.name}`} 
             position={`${player.position}`} 
             img={player.image}
             key={`${player.name}-${player.image}`} 
             />
            })
          }
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
