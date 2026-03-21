// src/components/Header.js
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // ✅ Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sfpi-header" ref={headerRef}>
      <div className="sfpi-container">

        {/* Logo */}
        {/* <div className="sfpi-logo">
          <img src="./logo.png" alt="NGO Logo" />
        </div> */}

        <div className="logo-container">
          <img src="/logo.png" alt="Logo" height={70} />
          <div className="brand-text">
            <h1>{t("brand_Name")}</h1>
            <span>Reg.No.: KAP/03918/2021-2022</span>
            <span>CSR: CSR00080164</span>
          </div>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`sfpi-nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>{t("home")}</Link>
          <Link to="/about" onClick={() => setOpen(false)}>{t("about_page_title", "About Us")}</Link>
          <Link to="/programs" onClick={() => setOpen(false)}>{t("programs")}</Link>
          <Link to="/work" onClick={() => setOpen(false)}>{t("work")}</Link>
          <Link to="/philosophy" onClick={() => setOpen(false)}>{t("founder_philosophy")}</Link>
          <Link to="/media" onClick={() => setOpen(false)}>{t("media")}</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>{t("contact", "Contact Us")}</Link>

          {/* Mobile lang */}
          <div className="lang-switch mobile-lang">
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("hi")}>हिंदी</button>
          </div>
        </nav>

        {/* Desktop lang */}
        <div className="lang-switch desktop-lang">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("hi")}>हिंदी</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
