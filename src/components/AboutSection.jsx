import "../styles/AboutSection.css";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const {t} = useTranslation();
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>{t("about_title")}</h2>
        <p>
          {t("about_desc")}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
