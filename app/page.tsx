"use client";
import { HomeAboutUSSection } from "./components/HomeAboutUSSection";
import { HomeClientsReviewSection } from "./components/HomeClientsReviewSection";
import { HomeFranchiseeSection } from "./components/HomeFranchiseeSection";
import { HomeMenuSection } from "./components/HomeMenuSection";
import { HomeQualitySection } from "./components/HomeQualitySection";
import { HomeSupportSection } from "./components/HomeSupportSection";
import { MainImageSection } from "./components/MainImageSection";
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import('./components/HomeLocationSection').then((mod) => mod.HomeLocationSection), // Replace '.Map' with your actual component name
  { ssr: false }
);

export default function Home() {
  return (
    <div className="block h-full">
      <main className="flex flex-col gap-[90px] lg:gap-[150px]">
        {/* // ZStack Div for main background image  */}
       <MainImageSection/>
       <HomeAboutUSSection/>
       <HomeMenuSection/>
       <HomeQualitySection/>
       <HomeFranchiseeSection/>
       <HomeClientsReviewSection/>
       <HomeSupportSection/>
       <MapWithNoSSR />
      </main>
    </div>
  );
}
