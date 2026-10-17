
import HeroSection from "../componets/HomeDataPage/hero-section";
import ServiceSection from "../componets/HomeDataPage/service-section";
import WorkSection from "../componets/HomeDataPage/work-section";
import ContactSection from "../componets/HomeDataPage/content-section";
import TestimonialSection from "../componets/HomeDataPage/Testimonial-section";

import "../css/Home.css";

function Home() {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <WorkSection />
            <ContactSection />
            <TestimonialSection />
        </>
    );
}

export default Home;

