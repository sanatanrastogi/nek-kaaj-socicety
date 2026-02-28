import "../styles/ImpactSection.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Counter = ({ end, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <h3>{count.toLocaleString()}{suffix}</h3>;
};

const ImpactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="impact-section">
      <div className="impact-grid">
        <div className="impact-card">
          <Counter end={50000} />
          <p>{t("lives_impacted")}</p>
        </div>

        <div className="impact-card">
          <Counter end={200} />
          <p>{t("communities_served")}</p>
        </div>

        <div className="impact-card">
          <Counter end={15} suffix="+" />
          <p>{t("years_of_service")}</p>
        </div>

        <div className="impact-card">
          <Counter end={100} />
          <p>{t("programs_running")}</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
