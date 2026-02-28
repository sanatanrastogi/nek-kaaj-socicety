// src/components/Hero.js
import "../styles/Hero.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{t("hero_title")}</h1>
          <p>{t("hero_desc")}</p>
          <div className="hero-buttons">
            <button className="primary-btn">{t("hero_btn1")}</button>
            <button className="secondary-btn" onClick={()=> navigate("/donate")}>{t("hero_btn2")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
