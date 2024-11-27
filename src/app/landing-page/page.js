'use client';

import Image from "next/image";
import styles from "./page.module.css";
import heroImg from "../../images/logo.webp";
import rowImage from "../../images/arne-slot.jpg";
import rowImage2 from "../../images/van-djik-edit.png";
import fixturesImage from "../../images/fixtures-banner2.png";
import { Nav } from "@/components/atoms/nav/nav";
import { Hero } from "@/components/atoms/hero/hero";
import { RowImage } from "@/components/molecules/row-image/row-image";
import { FixturesImage } from "@/components/atoms/fixtures-image/fixtures-image";
import { ScheduleTable } from "@/components/atoms/schedule-table/schedule-table";
import { Cardsection } from "@/components/molecules/card-section/card-section";

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
        <Cardsection/>
    </main>
  );
}
