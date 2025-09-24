import styles from './bio.module.css';

const Bio = ({fade, cardClicked}) => {
  return (
     <div className={`${styles.bio} ${fade ? styles.bioFade : ""}`}>
        <p>{cardClicked.bio}</p>
      </div>
  )
};

export { Bio };
