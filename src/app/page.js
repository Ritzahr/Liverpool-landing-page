'use client';

import heroImg from "../images/logo.webp";
import { teamImages } from "../assets/images/misc/index";
import rowImage2 from "../images/van-djik-edit.png";
import fixturesImage from "../images/fixtures-banner2.png";
import { Hero } from "@/components/atoms/hero/hero";
import { RowImage } from "@/components/molecules/row-image/row-image";
import { FixturesImage } from "@/components/atoms/fixtures-image/fixtures-image";
import { ScheduleTable } from "@/components/atoms/schedule-table/schedule-table";
import { Cardsection } from "@/components/molecules/card-section/card-section";
import { Footer } from "@/components/molecules/footer/footer";
import { SquadRow } from "@/components/molecules/squad-row/squad-row";
import { GameFixturesSection } from "@/components/molecules/game-fixtures-section/game-fixtures-section";

export default function Home() {
  return (
    <main>
      <header> 
        <Hero img={heroImg} />
      </header>
        <RowImage img={teamImages} text={"Game Fixtures"} />
        <GameFixturesSection/>
        <SquadRow img={[rowImage2]} />
        <Cardsection/>
        <Footer/>
    </main>
  );
}