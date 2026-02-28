// src/pages/About.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "../components/AboutBanner";
import AboutWho from "../components/AboutWho";
import VisionMission from "../components/VisionMission";
// import Values from "../components/Values";
// import Journey from "../components/Journey";
import InspiredBy from "../components/InspiredBy";
import SpecialThanks from "../components/SpecialThanks";
import ActiveMembers from "../components/ActiveMembers";

const About = () => {
  return (
    <>
      <Header />
      <AboutBanner />
      <InspiredBy />
      <AboutWho />
      <VisionMission />
      <SpecialThanks />
      <ActiveMembers />
      {/* <Values /> */}
      {/* <Journey /> */}
      <Footer />
    </>
  );
};

export default About;
