import "../styles/ContactBanner.css";
import { useTranslation } from "react-i18next";

const ContactBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-banner">
      <div className="contact-banner-overlay">
        <h1>{t("contact_title", "Contact Us")}</h1>
        <p>
          {t(
            "contact_subtitle",
            "We would love to hear from you. Whether you have questions, want to get involved, or need assistance, feel free to reach out to us."
          )}
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;
