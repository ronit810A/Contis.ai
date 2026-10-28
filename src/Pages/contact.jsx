

import "../css/contact.css"


import ContactSection from "../componets/ContactDataPage/contact-section"
import ContactUsSection from "../componets/ContactDataPage/contact-us-section";
import ContactFormSection from "../componets/ContactDataPage/contact-form-section"

import { useEffect } from "react";




function Contact() {
    useEffect(() => {
        document.title = "Contact | Contis.ai";
    }, []);
    return (
        <>
            <ContactSection />
            <ContactUsSection />
            <ContactFormSection />
        </>
    );
}

export default Contact;
