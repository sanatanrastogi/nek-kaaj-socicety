// src/components/SpecialThanks.js
import "../styles/SpecialThanks.css";
import { useTranslation } from "react-i18next";
import thanksList from "../data/thanksList.json";

const SpecialThanks = () => {
  const { t } = useTranslation();
  
  return (
    <section className="thanks-section">
      <h2>{t("special_thanks_title", "Special Thanks")}</h2>
      <p className="thanks-subtitle">
            {t("special_thanks_subtitle", "We express our heartfelt gratitude to all individuals and organizations whose support, trust, and dedication have strengthened our mission and made our work possible.")}
      </p>

      <div className="thanks-grid">
        {thanksList.map((item, index) => (
          <div className="thanks-card" key={index}>
            <div className="thanks-card-photo">
              <img src={item.img_src} alt={item.alt_text} />
            </div>
            <h4>{t(item.name)}</h4>
            <span>{t(item.role)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialThanks;
