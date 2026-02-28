import "../styles/ProgramsSection.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Lightbox from "./Lightbox";

const ProgramsSection = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    index: 0,
    title: ""
  });


  const { t } = useTranslation();

  const programs = [
    {
      title: t("program_title1", "Distribution of blankets in harsh winter"),
      description: t("program_desc1"),
      images: [
        "/assets/programs/program1_image1.png",
        "/assets/programs/program1_image2.png",
        "/assets/programs/program1_image3.png"
      ]
    },
    {
      title: t("program_title2", "Holi, the festival of colours, is a sweet gift"),
      description: t("program_desc2"),
      images: [
        "/assets/programs/program2_image1.png",
        "/assets/programs/program2_image2.png"
      ]
    },
    {
      title: t("program_title3"),
      description: t("program_desc3"),
      images: [
        "/assets/programs/program3_image1.png",
        "/assets/programs/program3_image2.png"
      ]
    },
    {
      title: t("program_title4"),
      description: t("program_desc4"),
      images: [
        "/assets/programs/program4_image1.png",
        "/assets/programs/program4_image2.png"
      ]
    },
    {
      title: t("program_title5"),
      description: t("program_desc5"),
      images: [
        "/assets/programs/program5_image1.png",
        "/assets/programs/program5_image2.png",
        "/assets/programs/program5_image3.png",
        "/assets/programs/program5_image4.png",
        "/assets/programs/program5_image5.png"
      ]
    },
    {
      title: t("program_title6"),
      description: t("program_desc6"),
      images: [
        "/assets/programs/program6_image1.png",
        "/assets/programs/program6_image2.png",
        "/assets/programs/program6_image3.png"
      ]
    },
    {
      title: t("program_title7"),
      description: t("program_desc7"),
      images: [
        "/assets/programs/program7_image1.png",
        "/assets/programs/program7_image2.png",
        "/assets/programs/program7_image3.png"
      ]
    }
  ];


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
                  alt={program.title}
                  key={i}
                  loading="lazy"
                  onClick={() => setLightbox({
                    isOpen: true,
                    images: program.images,
                    index: i,
                    title: program.title
                  })}
                />
              ))}
            </div>

            {/* Content */}
            <div className="program-content">
              <h2>{program.title}</h2>
              <p>{program.description}</p>
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
