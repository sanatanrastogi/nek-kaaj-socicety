import "../styles/CTASection.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <h2>{t("cta_title")}</h2>
      <p>{t("cta_desc")}</p>
      <p>{t("cta_desc1")}</p>
      <p>{t("cta_desc2")}</p>
      <p>{t("cta_desc3")}</p>
      <button onClick={()=> navigate("/donate")}>{t("cta_btn")}</button>
    </section>
  );
};

export default CTASection;
