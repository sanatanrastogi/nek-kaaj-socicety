import "../styles/OurProgramsHero.css";
import { useTranslation } from "react-i18next";

const OurProgramsHero = () => {
  const { t } = useTranslation();
  return (
    <section className="programs-hero">
      <div className="programs-hero-overlay">
        <div className="programs-hero-content">
          <h1>{t("programs")}</h1>
          <p>{t("program_hero_desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default OurProgramsHero;
