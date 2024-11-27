import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <header> 
        <nav>
          <p>Testing area</p>
        </nav>
        </header>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Landing Page
          </a>
        </div>
      </main>
    </div>
  );
}
