
import AboutSection from "../componets/AboutDataPage/about-section"
import BenefitSection from "../componets/AboutDataPage/benefits-section"

import TestimonialSection from "../componets/HomeDataPage/Testimonial-section";
import FaqSection from "../componets/HomeDataPage/faq-section"
import UnlockSection from "../componets/HomeDataPage/unlock-section"

import "../css/About.css"

function About() {
    return (
        <>
            <AboutSection />
            <BenefitSection/>
            <TestimonialSection />
            <FaqSection/>
            <UnlockSection/>
        </>
    );
}

export default About;