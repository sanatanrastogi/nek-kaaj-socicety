// src/components/ContactForm.js
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">

        <h2>Get in Touch</h2>
        <p>
          Have questions, ideas, or want to work with us?  
          Fill out the form and we’ll get back to you.
        </p>

        <form className="contact-form" noValidate>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />
            <span className="error-text">Name is required</span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <span className="error-text">Valid email is required</span>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
            />
            <span className="error-text">Invalid phone number</span>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            />
            <span className="error-text">Message cannot be empty</span>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
