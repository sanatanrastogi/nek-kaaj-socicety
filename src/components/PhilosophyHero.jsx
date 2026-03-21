import "../styles/PhilosophyHero.css";
import { useTranslation } from "react-i18next";

const PhilosophyHero = () => {
  const { t } = useTranslation();

  return (
    <section className="philosophy-hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <h1>{t("philosophy_hero_title")}</h1>

          <p>{t("philosophy_hero_subtitle")}</p>

          <div className="hero-divider"></div>

          <span className="hero-tagline">
            {t("philosophy_hero_tagline")}
          </span>

        </div>
      </div>
    </section>
  );
};

export default PhilosophyHero;