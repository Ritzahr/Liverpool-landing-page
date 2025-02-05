import { PlayerCarousel } from "../player-carousel/player-carousel";
import styles from "./card-section.module.css";

const Cardsection = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.gradientTop}>
      <PlayerCarousel />
    </div>
    </div>
  );
};

export { Cardsection };
