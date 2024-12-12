import "./css/card.scss";
import "./css/global.scss";

import HeroSection from "./components/content/hero";
import { Navbar } from "./components/navbar";
import { AboutSection } from "./components/content/about";
import { ExperiencesSection } from "./components/content/experiences";
import { SkillsSection } from "./components/content/skills";
import { Footer } from "./components/footer";
import { ScrollToTop } from "./components/scroll-top";

function App() {
  return (
    <>
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        <>
          <HeroSection />
          <AboutSection />
          <ExperiencesSection />
          <SkillsSection />
        </>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}

export default App;
