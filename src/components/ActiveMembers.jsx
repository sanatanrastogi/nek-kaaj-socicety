import "../styles/ActiveMembers.css";
import { useTranslation } from "react-i18next";

const ActiveMembers = () => {

    const { t } = useTranslation();

    const members = [
        {
            name: t("member1_name"),
            designation: t("member1_designation"),
            image: "/assets/members/member1.png"
        },
        {
            name: t("member2_name"),
            designation: t("member2_designation"),
            image: "/assets/members/member2.png"
        },
        {
            name: t("member3_name"),
            designation: t("member3_designation"),
            image: "/assets/members/member3.png"
        },
        {
            name: t("member4_name"),
            designation: t("member4_designation"),
            image: "/assets/members/member4.png"
        },
        {
            name: t("member5_name"),
            designation: t("member5_designation"),
            image: "/assets/members/member5.png"
        },
        {
            name: t("member6_name"),
            designation: t("member6_designation"),
            image: "/assets/members/member6.png"
        },
        {
            name: t("member7_name"),
            designation: t("member7_designation"),
            image: "/assets/members/member7.png"
        },
        {
            name: t("member8_name"),
            designation: t("member8_designation"),
            image: "/assets/members/member8.png"
        }
    ];

    return (
        <section className="active-members-section">
            <h2>{t("active_members_title")}</h2>

            <div className="members-slider">
                <div className="members-track">
                    {[...members, ...members].map((member, index) => (
                        <div className="member-card" key={index}>
                            <img src={member.image} alt={`${member.name}, ${member.designation}`} />
                            <h4>{member.name}</h4>
                            <p>{member.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActiveMembers;