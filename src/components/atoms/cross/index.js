import styles from './cross.module.css';

const Cross = ({setCardClicked}) => {
  return (
    <div className={styles.container} role="button" onClick={() => setCardClicked(null)}>
      X
    </div>
  );
};

export { Cross };
