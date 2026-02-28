// src/components/SanskritQuote.js
import "../styles/SanskritQuote.css";
import { useTranslation } from "react-i18next";

const SanskritQuote = ({ quote, meaningKey }) => {

    const { t } = useTranslation();
    return (
        <section className="sanskrit-quote-section">
            <div className="sanskrit-container">

                {/* <div className="ornament">॥ ॐ ॥</div> */}

                <h2 className="sanskrit-text">
                    {quote}
                </h2>

                <div className="divider"></div>

                <p className="meaning-title">{t("meaning")}</p>

                <p className="meaning-text">
                    {t(meaningKey)}
                </p>

            </div>
        </section>
    );
};

export default SanskritQuote;
