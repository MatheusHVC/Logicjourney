import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { ExploreSection } from '../../components/ExploreSection';
import { GameModes } from '../../components/GameModes';
import { WelcomeSection } from '../../components/WelcomeSection';
import { PhasesSection } from '../../components/PhasesSection/PhasesSection';

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreSection />
      <GameModes />
      <WelcomeSection />
      <PhasesSection />
    </>
  );
}