import ContactBanner from "../components/ContactBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import SanskritQuote from "../components/SanskritQuote";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    const quote = `सेवा परोपकाराय, जीवनं धर्मसाधनं। \n परहिते यः स्थिरः नित्यं, स एव पुरुषोत्तमः॥`
    return (
        <>
            <Helmet>
                <title> Contact Us | NKCS </title>
                <meta name="description" content="Get in touch with us at NKCS. We'd love to hear from you!" />
            </Helmet>
            <Header />
            <ContactBanner />
            <ContactInfo />
            <ContactForm />
            <ContactMap />
            <SanskritQuote quote={quote} meaningKey="sloka1_meaning" />
            <Footer />
        </>
    );
};

export default Contact;