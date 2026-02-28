// src/components/ContactMap.js
import "../styles/ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map-section">
      <div className="contact-map-container">

        <h2>Our Location</h2>
        <p>Visit us or reach out — we’re always happy to connect.</p>

        <div className="map-wrapper">
          <iframe
            title="NGO Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.881397424993!2d80.2461371!3d26.505655299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37a6f811ad99%3A0xccb78d3647909290!2s77%2FB%2C%20Gooba%20Gardens%2C%20Siddharth%20Nagar%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016!5e1!3m2!1sen!2sin!4v1770236421886!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;
