import { useState } from "react";
import Lightbox from "./Lightbox";
import "../styles/MediaGallery.css";

const images = [
    "../assets/programs/program1_image1.png",
    "../assets/programs/program1_image2.png",
    "../assets/programs/program1_image3.png",
    "../assets/programs/program2_image1.png",
    "../assets/programs/program2_image2.png",
    "../assets/programs/program3_image1.png",
    "../assets/programs/program3_image2.png",
    "../assets/programs/program4_image1.png",
    "../assets/programs/program4_image2.png",
    "../assets/programs/program5_image1.png",
    "../assets/programs/program5_image2.png",
    "../assets/programs/program5_image3.png",
    "../assets/programs/program5_image4.png",
    "../assets/programs/program5_image5.png",
    "../assets/programs/program6_image1.png",
    "../assets/programs/program6_image2.png",
    "../assets/programs/program6_image3.png",
    "../assets/programs/program7_image1.png",
    "../assets/programs/program7_image2.png",
    "../assets/programs/program7_image3.png",
];

const MediaGallery = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    index: 0,
    title: "",
  });

  return (
    <section className="media-gallery">
      <h2>Photo Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="media"
            onClick={() =>
              setLightbox({
                isOpen: true,
                images: images,
                index: i,
                title: "Event Gallery",
              })
            }
          />
        ))}
      </div>

      {lightbox.isOpen && (
        <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
      )}
    </section>
  );
};

export default MediaGallery;
