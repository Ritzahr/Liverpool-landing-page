import styles from './util-links.module.css';


const UtilLinks = ({ links }) => {
  return (
    <div className={styles.utilities}>
      <ul>
        {links.map((tag) => {
          return <li>{tag}</li>;
        })}
      </ul>
    </div>
  );
};

export { UtilLinks };
