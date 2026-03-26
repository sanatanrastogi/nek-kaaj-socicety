import "../styles/DonateDetails.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const DonateDetails = () => {
  const [copiedField, setCopiedField] = useState("");
  const { t } = useTranslation();

  const copyText = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <section className="donate-details">

      {/* Header */}
      <div className="donate-header">
        <h2>{t("donate_details_title")}</h2>
        <p>{t("donate_banner_desc")}</p>
      </div>

      <div className="donation-grid">

        {/* Bank Card */}
        <div className="donation-card bank-card">
          <h3>{t("bank_account_details")}</h3>

          {[
            { label: t("account_name"), value: "Nek Kaaj Charitable Society", key: "name" },
            { label: t("account_number"), value: "921020055596747", key: "account" },
            { label: t("bank_name"), value: "Axis Bank", key: "bank" },
            { label: t("ifsc_code"), value: "UTIB0000133", key: "ifsc" },
            { label: t("branch"), value: "Kanpur", key: "branch" },
          ].map((item, i) => (
            <div className="detail-row" key={i}>
              <div>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </div>

              <button onClick={() => copyText(item.value, item.key)}>
                {copiedField === item.key ? "✔" : "📋"}
              </button>
            </div>
          ))}

          <div className="trust-badge">
            ✅ {t("80g-benefit", "80G Tax Benefit Available")}
          </div>
        </div>

        {/* UPI Card */}
        <div className="donation-card upi-card">
          <h3>{t("upi_qr_title")}</h3>

          <div className="upi-box">
            <p className="upi-id">
              {t("upi_id")}: <b>6388898018@okbizaxis</b>
            </p>

            <div className="upi-actions">
              <a
                href="upi://pay?pa=6388898018@okbizaxis&pn=Nek%20Kaaj%20Charitable%20Society"
                className="pay-btn"
              >
                {t("cta_btn")}
              </a>

              <button onClick={() => copyText("6388898018@okbizaxis", "upi")}>
                {copiedField === "upi" ? "✔ Copied" : "📋 Copy"}
              </button>
            </div>
          </div>

          <img
            src="/assets/qr/upi-qr.jpg"
            alt="UPI QR"
            className="qr-image"
          />

          <p className="qr-note">
            {t("qr-note", "Scan & pay instantly using any UPI app")}
          </p>
        </div>
      </div>

    </section>
  );
};

export default DonateDetails;