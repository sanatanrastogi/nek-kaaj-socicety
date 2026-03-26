import "../styles/MediaVideos.css";
import { useTranslation } from "react-i18next";

const MediaVideos = () => {
  const { t } = useTranslation();
  return (
    <section className="media-videos">
      <h2>{t("video_highlights", "Video Highlights")}</h2>

      <div className="video-grid">
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default MediaVideos;
