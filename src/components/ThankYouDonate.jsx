import "../styles/ThankYouDonate.css";
import { useTranslation } from "react-i18next";

const ThankYouDonate = () => {
  const { t } = useTranslation();
  return (
    <section className="thankyou-section">
      <h2>{t("thankyou_title")}</h2>
      <p>
        {t("thankyou_desc")}
      </p>
      <p className="thankyou-note">
        {t("thankyou_note")}
      </p>
    </section>
  );
};

export default ThankYouDonate;
