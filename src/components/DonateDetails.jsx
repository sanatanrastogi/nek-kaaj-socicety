import "../styles/DonateDetails.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const DonateDetails = () => {
  const [copiedField, setCopiedField] = useState("");

  const copyText = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    setTimeout(() => {
      setCopiedField("");
    }, 2000);
  };
  const { t } = useTranslation();
  return (
    <section className="donate-details">
      <h2>{t("donate_details_title")}</h2>

      <div className="donation-grid">
        {/* Bank Details */}
        <div className="donation-card">
          <h3>{t("bank_account_details")}</h3>
          <div className="detail-row">
            <strong>{t("account_name")}:</strong>
            Nek Kaaj Charitable Society
            <button onClick={() => copyText("921020055596747", "account")}>
              📋
            </button>
          </div>
          <div className="detail-row">
            <strong>{t("account_number")}:</strong>
            921020055596747
            <button onClick={() => copyText("921020055596747", "account")}>
              📋
            </button>
          </div>
          <div className="detail-row">
            <strong>{t("bank_name")}:</strong>
            Axis Bank
            <button onClick={() => copyText("Axis Bank", "bank")}>
              📋
            </button>
          </div>
          <div className="detail-row">
            <strong>{t("ifsc_code")}:</strong>
            UTIB0000133
            <button onClick={() => copyText("UTIB0000133", "ifsc")}>
              📋
            </button>
          </div>
          <div className="detail-row">
            <strong>{t("branch")}:</strong>
            Kanpur<button onClick={() => copyText("Kanpur", "branch")}>
              📋
            </button>
          </div>

          <div className="tax-note">
            ✅ 80G Tax Exemption Available
          </div>
        </div>

        {/* UPI / QR */}
        <div className="donation-card">
          <h3>{t("upi_qr_title")}</h3>
          <div className="detail-row">
            <span>
              <strong>{t("upi_id")}:</strong>
              {" "}
              <a
                href="upi://pay?pa=6388898018@okbizaxis&pn=Nek%20Kaaj%20Charitable%20Society"
                className="upi-link"
              >
                6388898018@okbizaxis
              </a>
            </span>
            <button onClick={() => copyText("6388898018@okbizaxis", "upi")}>
              📋
            </button>
          </div>
          <img
            src="/assets/qr/upi-qr.jpg"
            alt="UPI QR Code"
            className="qr-image"
          />
          <p className="qr-note">
            Scan this QR code to donate directly via UPI
          </p>
        </div>
      </div>
      {copiedField && (
        <div className="copy-toast">
          ✔ Copied to clipboard
        </div>
      )}
    </section>
  );
};

export default DonateDetails;
