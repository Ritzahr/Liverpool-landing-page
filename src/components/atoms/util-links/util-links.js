import Link from 'next/link';
import styles from './util-links.module.css';


const UtilLinks = ({ links }) => {
  return (
    <div className={styles.utilities}>
      <ul>
        {links.map((tag) => {
          return (
          <li 
            className={styles.link}
            key={`Link-${tag}`}
            >
            <Link href="/test-page">{tag}</Link>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export { UtilLinks };
