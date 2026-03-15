// src/components/InspiredBy.js
import "../styles/InspiredBy.css";
import { useTranslation } from "react-i18next";
import inspirations from "../data/inspirations.json";

const InspiredBy = () => {
  const { t } = useTranslation();

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
              <img src={person.image} alt={t(person.name)} />
            </div>
            <h4>{t(person.name)}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspiredBy;
