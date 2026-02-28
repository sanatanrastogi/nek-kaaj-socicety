// src/components/Footer.js
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="ngo-footer">
      <div className="footer-container">

        {/* Column 1: About */}
        <div className="footer-col">
          <h3>{t("brand_Name")}</h3>
          <p>
            {t("footer_about")}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>{t("quick_links", "Quick Links")}</h4>
          <ul>
            <li><Link to="/">{t("home", "Home")}</Link></li>
            <li><Link to="/about">{t("about_page_title", "About Us")}</Link></li>
            <li><Link to="/programs">{t("programs", "Our Programs")}</Link></li>
            <li><Link to="/work">{t("work", "Areas of Work")}</Link></li>
            <li><Link to="/contact">{t("contact", "Contact Us")}</Link></li>
          </ul>
        </div>

        {/* Column 3: Get Involved */}
        <div className="footer-col">
          <h4>{t("get_involved", "Get Involved")}</h4>
          <ul>
            <li><Link to="/donate">{t("donate", "Donate")}</Link></li>
            <li><Link to="/volunteer">{t("volunteer", "Volunteer")}</Link></li>
            <li><Link to="/partner">{t("partner_with_us", "Partner With Us")}</Link></li>
            <li><Link to="/careers">{t("careers", "Careers")}</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4>{t("contact", "Contact")}</h4>
          <p>
            <a style={{ textDecoration: "none", color: "#cbd5e1" }} href="https://www.google.com/maps/place/77%2FB,+Gooba+Gardens,+Siddharth+Nagar,+Kalyanpur,+Kanpur,+Uttar+Pradesh+208016/@26.5056553,80.2435622,895m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399c37a6f811ad99:0xccb78d3647909290!8m2!3d26.5056553!4d80.2461371!16s%2Fg%2F11xcn02h1z?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D">
              📍 {t("contact_address", "77-B, Siddharth Nagar, Kalyanpur, Kanpur (U.P.), 208016")}
            </a>
          </p>
          <p><a style={{ textDecoration: "none", color: "#cbd5e1" }} href="tel:+916388898018">📞 +91 63888 98018</a></p>
          <p>
            <a style={{ textDecoration: "none", color: "#cbd5e1" }} href="mailto:Nekkaaj2015@gmail.com">✉️ Nekkaaj2015@gmail.com</a>
          </p>
        </div>

        {/* Column 5: Social media Links */}
        <div className="footer-col">
          <h4>{t("social_media", "Social Media")}</h4>
          <ul>
            <li>
              <a style={{ textDecoration: "none", color: "#cbd5e1" }} href="https://www.facebook.com/people/Nekkaaj-Charitable-Society/100083716111322/">
                <FaFacebook />
                <span> Nekkaaj-Charitable-Society</span>
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none", color: "#cbd5e1" }} href="https://www.instagram.com/nekkaajcharitablesociety/">
                <FaInstagram />
                <span> nekkaajcharitablesociety</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NGO Foundation. {t("footer_rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
