import "../styles/ActiveMembers.css";
import { useTranslation } from "react-i18next";
import members from "../data/members.json";

const ActiveMembers = () => {

    const { t } = useTranslation();

    return (
        <section className="active-members-section">
            <h2>{t("active_members_title")}</h2>

            <div className="members-slider">
                <div className="members-track">
                    {[...members, ...members].map((member, index) => (
                        <div className="member-card" key={index}>
                            <img src={member.image} alt={`${t(member.name)}, ${t(member.designation)}`} />
                            <h4>{t(member.name)}</h4>
                            <p>{t(member.designation)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActiveMembers;