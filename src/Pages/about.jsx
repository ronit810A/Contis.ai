
import AboutSection from "../componets/AboutDataPage/about-section"
import BenefitSection from "../componets/AboutDataPage/benefits-section"
import TeamSection from "../componets/AboutDataPage/team-section"

import TestimonialSection from "../componets/HomeDataPage/Testimonial-section";
import FaqSection from "../componets/HomeDataPage/faq-section"
import UnlockSection from "../componets/HomeDataPage/unlock-section"

import "../css/About.css"

import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "About | Contis.ai";
    }, []);
    return (
        <>
            <AboutSection />
            <BenefitSection />
            <TeamSection />
            <TestimonialSection />
            <FaqSection />
            <UnlockSection />
        </>
    );
}

export default About;