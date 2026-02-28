import "../styles/DonateBanner.css";
import { useTranslation } from "react-i18next";

const DonateBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="donate-banner">
      <div className="donate-banner-overlay">
        <h1>{t("donate","Donate")}</h1>
        <p>{t("donate_banner_desc","One small act of kindness can change the world.")}</p>
      </div>
    </section>
  );
};

export default DonateBanner;
