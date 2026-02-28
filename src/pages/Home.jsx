// src/pages/Home.js
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
// import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FocusAreas from "../components/FocusAreas";
import ImpactSection from "../components/ImpactSection";
import LeadershipMessage from "../components/LeadershipMessage";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroCarousel />
      {/* <Hero /> */}
      <AboutSection />
      <FocusAreas />
      <ImpactSection />
      <LeadershipMessage />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
