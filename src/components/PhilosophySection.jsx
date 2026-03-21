import "../styles/PhilosophySection.css";
import philosophyImg from "../assets/founder-philosophy.png";
import { useTranslation } from "react-i18next";

const PhilosophySection = () => {
    const { t } = useTranslation();
    return (
        <section className="philosophy-section">
            <div className="philosophy-container">

                {/* Image */}
                <div className="philosophy-image">
                    <img src={philosophyImg} alt="Connection and Humanity" />
                </div>

                {/* Content */}
                <div className="philosophy-content">
                    <h1>{t("founder_philosophy")}</h1>

                    <p>
                        {t("philosophy_para1")}
                    </p>

                    <p>
                        {t("philosophy_para2_part1","The aim here is not merely to foster religious affiliation, but rather to")} <b>{t("philosophy_morality","cultivate morality")}</b>, {" "}
                        <b>{t("philosophy_duty")}</b>,{" "}
                        <b>{t("philosophy_positivity")}</b>,{" "}
                        <b>{t("philosophy_spirituality")}</b>{" "}
                        {t("philosophy_para2_part2")}
                    </p>

                    <p className="highlight">
                        {t("philosophy_para3")}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;