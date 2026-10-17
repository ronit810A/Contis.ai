
import HeroSection from "../componets/HomeDataPage/hero-section";
import ServiceSection from "../componets/HomeDataPage/service-section";
import WorkSection from "../componets/HomeDataPage/work-section";
import ContactSection from "../componets/HomeDataPage/content-section";
import TestimonialSection from "../componets/HomeDataPage/Testimonial-section";
import PricingSection from "../componets/HomeDataPage/pricing-section"
import FaqSection from "../componets/HomeDataPage/faq-section"
import UnlockSection from "../componets/HomeDataPage/unlock-section"

import "../css/Home.css";

function Home() {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <WorkSection />
            <ContactSection />
            <TestimonialSection />
            <PricingSection/>
            <FaqSection/>
            <UnlockSection/>
        </>
    );
}

export default Home;

