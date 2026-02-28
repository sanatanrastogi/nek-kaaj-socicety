// src/components/ContactInfo.js
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/ContactInfo.css";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
    const { t } = useTranslation();
    return (
        <section className="contact-info-section">
            <div className="contact-info-grid">

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaMapMarkerAlt />
                    </div>
                    <h4>Address</h4>
                    <p>
                        <a href="https://www.google.com/maps/place/77%2FB,+Gooba+Gardens,+Siddharth+Nagar,+Kalyanpur,+Kanpur,+Uttar+Pradesh+208016/@26.5056553,80.2435622,895m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399c37a6f811ad99:0xccb78d3647909290!8m2!3d26.5056553!4d80.2461371!16s%2Fg%2F11xcn02h1z?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D">
                            {t("contact_address", "77-B, Siddharth Nagar, Kalyanpur, Kanpur (U.P.), 208016")}
                        </a>
                    </p>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaPhoneAlt />
                    </div>
                    <h4>Phone</h4>
                    <p>
                        <a href="tel:+916388898018">+91 63888 98018</a><br />
                        <a href="tel:+919839101671">+91 98391 01671</a>
                    </p>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <FaEnvelope />
                    </div>
                    <h4>Email</h4>
                    <p>
                        <a href="mailto:Nekkaaj2015@gmail.com">Nekkaaj2015@gmail.com</a><br />
                        {/* support@sfpi.org */}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ContactInfo;
