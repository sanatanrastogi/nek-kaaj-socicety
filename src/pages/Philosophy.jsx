import Header from "../components/Header";
import PhilosophyHero from "../components/PhilosophyHero";
import PhilosophySection from "../components/PhilosophySection";
import SanskritQuote from "../components/SanskritQuote";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Philosophy = () => {
    const quote = `अष्टादशपुराणेषु व्यासस्य वचनद्वयम्।\nपरोपकारः पुण्याय पापाय परपीडनम्॥`;
    return (
        <>
            <Helmet>
                <title> Founder's Philosophy </title>
                <meta name="description" content="Discover the guiding principles and values that shape our mission at Nek Kaaj Charitable Society." />
            </Helmet>
            <Header />
            <PhilosophyHero />
            <PhilosophySection />
            <SanskritQuote
                quote={quote}
                meaningKey="philosophy_sanskrit_meaning"
            />
            <Footer />
        </>
    );
};

export default Philosophy;