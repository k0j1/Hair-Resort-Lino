import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { MenuSection } from '../components/MenuSection';
import { SponsorSection } from '../components/SponsorSection';

export function Home() {
  return (
    <>
      <HeroSlider />
      <MenuSection />
      <SponsorSection />
    </>
  );
}
