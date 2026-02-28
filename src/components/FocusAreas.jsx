import "../styles/FocusAreas.css";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaHeartbeat, FaTools, FaUsers } from "react-icons/fa";

const FocusAreas = () => {
  const { t } = useTranslation();
  const focusAreas = [
    { icon: <FaGraduationCap />, title: t("focus_edu"), desc: t("focus_edu_desc") },
    { icon: <FaHeartbeat />, title: t("focus_health"), desc: t("focus_health_desc") },
    { icon: <FaTools />, title: t("focus_livelihood"), desc: t("focus_livelihood_desc") },
    { icon: <FaUsers />, title: t("focus_community"), desc: t("focus_community_desc") },
  ];

  return (
    <section className="focus-section">
      <h2>{t("focus_title")}</h2>

      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <div className="focus-card" key={index}>
            <div className="focus-icon">
              {area.icon}
            </div>
            <h3>{area.title}</h3>
            <p>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;  
