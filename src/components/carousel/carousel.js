import { PlayerCard } from "../player-card/player-card";
import styles from "./carousel.module.css";
import { players } from "@/assets/players-2024/roster";


const PlayerCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradientBottom}>
        <div className={styles.inner}>
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
        <div className={styles.gradientTop}></div>
      </div>
    </div>
  );
};

export { PlayerCarousel };
