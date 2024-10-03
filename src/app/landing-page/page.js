import Image from "next/image";
import styles from "./page.module.css";
import heroImg from "../../images/logo.webp";
import rowImage from "../../images/arne-slot.jpg";
import rowImage2 from "../../images/van-djik-edit.png";
import fixturesImage from "../../images/fixtures-banner2.png";
import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { RowImage } from "@/components/row-image/row-image";
import { FixturesImage } from "@/components/fixtures-image/fixtures-image";
import { ScheduleTable } from "@/components/schedule-table/schedule-table";
import { Carousel } from "@/components/carousel/carousel";

export const metadata = {
  title: "Liverpool Landing Page - You Will Never Walk Alone",
};

export default function Page() {
  return (
    <main>
      <header>
        <Nav />
        <Hero img={heroImg} />
      </header>
      <div className={styles.mantraContainer}>
        <h1 className={styles.mantra}>
          &quot;You Will Never Walk Alone.&quot;
        </h1>
      </div>
      <section>
        <RowImage img={rowImage} text={"Game Fixtures"} />
      </section>
      <section>
        <FixturesImage img={fixturesImage}>
          <ScheduleTable />
        </FixturesImage>
      </section>
      <section>
        <div>
          <RowImage img={rowImage2} text={"Squad Details"} />
        </div>
      </section>
      <section>
        <Carousel/>
      </section>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </main>
  );
}
