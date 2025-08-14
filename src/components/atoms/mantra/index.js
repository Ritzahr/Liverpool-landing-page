import styles from './mantra.module.css';

const Mantra = ({text}) => {
 return (
  <div className={styles.container}>
    <h1 className={styles.mantra}>
      &quot;{text}&quot;
    </h1>
  </div>
 )    
};

export { Mantra };