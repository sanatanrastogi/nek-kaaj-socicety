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
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title> About Us | NKCS </title>
        <meta name="description" content="Learn more about NKCS and our mission to serve the community." />
      </Helmet>
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
