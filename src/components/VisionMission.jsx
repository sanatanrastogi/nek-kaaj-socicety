import { useTranslation } from "react-i18next";
import "../styles/VisionMission.css";

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <section className="vision-mission">
      <div className="vm-grid">
        <div className="vm-card">
          <h3>{t("vision_title", "Our Vision")}</h3>
          <ul>
            <li>{t(
              "vision_desc1",
              "Distribution of sweets and other items during Hindu festivals"
            )}</li>
            <li>{t(
              "vision_desc2",
              "Providing stationery kits especially to underprivileged children"
            )}</li>
            <li>{t(
              "vision_desc3",
              "Distribution of blankets in winter and towels (gamchas) in summer"
            )}</li>
            <li>{t(
              "vision_desc4",
              "Taking care of the education of a hearing-impaired child"
            )}</li>
            <li>{t(
              "vision_desc5",
              "Distribution of fans and school bags in schools"
            )}</li>
            <li>{t(
              "vision_desc3",
              "Distribution of blankets in winter and towels (gamchas) in summer"
            )}</li>
            <li>{t(
              "vision_desc4",
              "Taking care of the education of a hearing-impaired child"
            )}</li>
            <li>{t(
              "vision_desc5",
              "Distribution of fans and school bags in schools"
            )}</li>
          </ul>
        </div>

        <div className="vm-card">
          <h3>{t("mission_title", "Our Mission")}</h3>
          <ul>
            <li>{t(
              "mission_desc1",
              "Establishing vocational training centers"
            )}</li>
            <li>{t(
              "mission_desc2",
              "Supporting the needs, requirements, and dignified life of senior citizens"
            )}</li>
            <li>{t(
              "mission_desc3",
              "Providing scholarships to meritorious children"
            )}</li>
            <li>{t(
              "mission_desc4",
              "Organizing annual exams, competitive exams, and subject-related events for children in industrial areas"
            )}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
