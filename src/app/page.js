'use client';

import styles from './page.module.css';
import heroImg from "../images/logo.webp";
import { teamImages } from "../assets/images/misc/index";
import rowImage3 from "../assets/Project Images/tour-squad-20072025-cover_040f80905435737cf66c96caa16205fa.jpg";
import { Hero } from "@/components/organisms/hero/hero";
import { RowImage } from "@/components/molecules/row-image/row-image";
import { Cardsection } from "@/components/molecules/card-section/card-section";
import { Footer } from "@/components/molecules/footer/footer";
import { SquadRow } from "@/components/molecules/squad-row/squad-row";
import { GameFixturesSection } from "@/components/molecules/game-fixtures-section/game-fixtures-section";

export default function Home() {
  return (
    <main> 
      <div className={styles.container}> 
          <Hero img={heroImg} title={"The Official Unofficial Liverpool Football Club Landing Page!"}/>
          <RowImage img={teamImages} text={"Game Fixtures"} />
          <GameFixturesSection/>
          <SquadRow img={[rowImage3]} />
          <Cardsection/>
      </div>
      <Footer/>
    </main>
  );
}