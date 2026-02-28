// src/components/InspiredBy.js
import "../styles/InspiredBy.css";
import { useTranslation } from "react-i18next";

const InspiredBy = () => {
  const { t } = useTranslation();
  const inspirations = [
    {
      name: t("inspired_by_person1", "Mrs. Sudha Murty"),
      image: "/assets/inspired/SudhaMurthy.png"
    },
    {
      name: t("inspired_by_person2", "Ms. Madan Mohan Malviya"),
      image: "/assets/inspired/MadanMohanMalviya.png"
    },
    {
      name: t("inspired_by_person3", "Ms. Ratan Naval Tata"),
      image: "/assets/inspired/RatanNavalTata.png"
    },
    {
      name: t("inspired_by_person4", "Mrs. Nita Ambani"),
      image: "/assets/inspired/NitaAmbani.png"
    }
  ];

  return (
    <section className="inspired-section">
      <h2>{t("inspired_by_title", "Inspired By")}</h2>
      <p className="inspired-subtitle">
        {t("inspired_by_subtitle", "Our values and mission are shaped by the lives and teachings of these great visionaries.")}
      </p>

      <div className="inspired-grid">
        {inspirations.map((person, index) => (
          <div className="inspired-card" key={index}>
            <div className="img-wrapper">
              <img src={person.image} alt={person.name} />
            </div>
            <h4>{person.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspiredBy;
