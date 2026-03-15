import "../styles/ProgramsSection.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Lightbox from "./Lightbox";
import programsData from "../data/programsData.json";

const ProgramsSection = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    index: 0,
    title: ""
  });

  const { t } = useTranslation();
  const programs = programsData;

  return (
    <section className="programs-section">
      <div className="programs-container">
        {programs.map((program, index) => (
          <div
            className={`program-block ${index % 2 !== 0 ? "reverse" : ""
              }`}
            key={index}
          >
            {/* Image Gallery */}
            <div className="program-gallery">
              {program.images.map((img, i) => (
                <img
                  src={img}
                  alt={t(program.title)}
                  key={i}
                  loading="lazy"
                  onClick={() => setLightbox({
                    isOpen: true,
                    images: program.images,
                    index: i,
                    title: t(program.title)
                  })}
                />
              ))}
            </div>

            {/* Content */}
            <div className="program-content">
              <h2>{t(program.title)}</h2>
              <p>{t(program.description)}</p>
              {/* <button className="program-btn">Learn More</button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <Lightbox lightbox={lightbox} setLightbox={setLightbox} />
      )}

    </section>
  );
};

export default ProgramsSection;
