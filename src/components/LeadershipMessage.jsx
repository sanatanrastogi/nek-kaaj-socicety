// src/components/LeadershipMessage.js
import { useTranslation } from "react-i18next";
import "../styles/LeadershipMessage.css";

const LeadershipMessage = () => {
  const { t } = useTranslation();

  return (
    <section className="leader-section">
      <div className="leader-container">

        <div className="leader-grid">
          {/* Founder Image */}
          <div className="leader-image">
            <img
              src="/assets/founder/founder.png"
              alt="Founder"
            />
          </div>

          {/* Message */}
          <div className="leader-message">
            <h2>{t("founder_message_title", "Message from the President")}</h2>

            <p>
              {t("founder_message_text")}
            </p>

            <div className="leader-signature">
              <strong>{t("founder_name", "Mr. Sunil Mehta")}</strong>
              <span>{t("founder_designation", "Founder & Trustee")}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipMessage;
