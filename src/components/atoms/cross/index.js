import styles from './cross.module.css';

const Cross = ({setCardClicked}) => {
  return (
    <div className={styles.container} onClick={() => setCardClicked(null)}>
      X
    </div>
  );
};

export { Cross };
