// src/pages/Donate.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import DonateBanner from "../components/DonateBanner";
import DonateDetails from "../components/DonateDetails";
import ThankYouDonate from "../components/ThankYouDonate";
import SanskritQuote from "../components/SanskritQuote";

const Donate = () => {
  return (
    <>
      <Header />
      <DonateBanner />
      <DonateDetails />
      <ThankYouDonate />
      <SanskritQuote quote="परहितार्थ धर्मः सर्वोतमः|" meaningKey="sloka2_meaning" />
      <Footer />
    </>
  );
};

export default Donate;
