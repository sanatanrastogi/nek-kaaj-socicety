import Header from "../components/Header";
import MediaHero from "../components/MediaHero";
import MediaGallery from "../components/MediaGallery";
import MediaVideos from "../components/MediaVideos";
import Footer from "../components/Footer";
import NewsPaperCoverages from "../components/NewsPaperCoverages";
// import MediaPress from "../components/MediaPress";
import { Helmet } from "react-helmet-async";

const Media = () => {
    return (
        <>
            <Helmet>
                <title> Media | NKCS </title>
                <meta name="description" content="Explore the latest media coverage and videos from NKCS." />
            </Helmet>
            <Header />
            <MediaHero />
            <MediaGallery />
            <MediaVideos />
            <NewsPaperCoverages />
            {/* <MediaPress /> */}
            <Footer />
        </>
    );
};

export default Media;
