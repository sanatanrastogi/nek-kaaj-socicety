import "../styles/MediaHero.css";
import { useTranslation } from "react-i18next";

const MediaHero = () => {
  const { t } = useTranslation();
  return (
    <section className="media-hero">
      <div className="media-hero-overlay">
        <div className="media-hero-content">
          <h1>{t("media_gallery_title", "Media & Gallery")}</h1>
          <p>
            {t("media_gallery_desc", "Explore our events, moments, and impact stories captured through photos and videos.")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaHero;
