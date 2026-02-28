import "../styles/MediaVideos.css";

const MediaVideos = () => {
  return (
    <section className="media-videos">
      <h2>Video Highlights</h2>

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
