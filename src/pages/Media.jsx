import Header from "../components/Header";
import MediaHero from "../components/MediaHero";
import MediaGallery from "../components/MediaGallery";
import MediaVideos from "../components/MediaVideos";
import Footer from "../components/Footer";
import NewsPaperCoverages from "../components/NewsPaperCoverages";
// import MediaPress from "../components/MediaPress";

const Media = () => {
    return (
        <>
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
