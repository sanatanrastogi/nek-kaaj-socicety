import Header from "../components/Header";
import OurProgramsHero from "../components/OurProgramsHero";
import ProgramsSection from "../components/ProgramsSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const OurPrograms = () => {
    return (
        <>
            <Helmet>
                <title> Our Programs | NKCS </title>
                <meta name="description" content="Discover the impactful programs and initiatives of Nek Kaaj Charitable Society." />
            </Helmet>
            <Header />
            <OurProgramsHero />
            <ProgramsSection />
            <Footer />
        </>
    );
};

export default OurPrograms;
