import { useTranslation } from "react-i18next";
import "../styles/AboutBanner.css";

const AboutBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="about-banner">
      <div className="about-banner-overlay">
        <h1>{t("about_page_title", "About Us")}</h1>
      </div>
    </section>
  );
};

export default AboutBanner;
