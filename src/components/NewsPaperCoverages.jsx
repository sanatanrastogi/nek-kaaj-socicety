import { useState } from "react";
import Lightbox from "./Lightbox";
import "../styles/MediaGallery.css";
import { useTranslation } from "react-i18next";

const images = [
    "../assets/newspaper_cutting/Picture1.png",
    "../assets/newspaper_cutting/Picture2.png",
    "../assets/newspaper_cutting/Picture3.png",
    "../assets/newspaper_cutting/Picture4.png",
    "../assets/newspaper_cutting/Picture5.png",
    "../assets/newspaper_cutting/Picture6.png",
    "../assets/newspaper_cutting/Picture7.png",
];

const NewsPaperCoverages = () => {
    const { t } = useTranslation();
    const [lightbox, setLightbox] = useState({
        isOpen: false,
        images: [],
        index: 0,
        title: "",
    });

    return (
        <section className="media-gallery">
            <h2>{t("newspaper_coverages", "Newspaper Coverages")}</h2>

            <div className="gallery-grid">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt="newspaper coverage"
                        onClick={() => setLightbox({
                            isOpen: true,
                            images: images,
                            index: i,
                            title: t("newspaper_coverages", "Newspaper Coverages")
                        })}
                    />
                ))}
            </div>

            {lightbox.isOpen && (
                <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
            )}
        </section>
    );
};

export default NewsPaperCoverages;