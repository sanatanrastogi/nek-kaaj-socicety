import { useTranslation } from "react-i18next";
import "../styles/AboutWho.css";

const AboutWho = () => {
  const { t } = useTranslation();

  return (
    <section className="about-who">
      <div className="about-who-container">
        <h2>{t("about_who_title", "Who We Are")}</h2>
        <p>
          {t(
            "about_who_desc",
            "'Nek Kaaj Charitable Society' was started in 2015 with the support of the employees of Kanpur Plastipack Ltd., which is perhaps a unique initiative started by the employees of an industry in India. This organization was established as a registered charitable trust in 2021. The organization is actively working to bring happiness to the lives of the underprivileged, needy, and neglected sections of society. The organization currently provides services such as distributing sweets and other treats during Hindu festivals every year, providing Braille books to visually impaired children in the field of education, distributing blankets in winter and towels in summer, providing a wheelchair to a deaf and mute child, and providing fans and school bags to schools."
          )}
        </p>
      </div>
    </section>
  );
};

export default AboutWho;
