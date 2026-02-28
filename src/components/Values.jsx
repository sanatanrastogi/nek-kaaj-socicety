import { useTranslation } from "react-i18next";
import "../styles/Values.css";

const Values = () => {
  const { t } = useTranslation();

  return (
    <section className="values-section">
      <h2>{t("values_title", "Our Core Values")}</h2>

      <div className="values-grid">
        <div className="value-card">Integrity</div>
        <div className="value-card">Compassion</div>
        <div className="value-card">Transparency</div>
        <div className="value-card">Inclusivity</div>
        <div className="value-card">Sustainability</div>
      </div>
    </section>
  );
};

export default Values;
