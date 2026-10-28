import PricingSection from "../componets/HomeDataPage/pricing-section"
import FaqSection from "../componets/HomeDataPage/faq-section"
import TestimonialSection from "../componets/HomeDataPage/Testimonial-section";

import { useEffect } from "react";



function Pricing() {
    useEffect(() => {
        document.title = "Pricing | Contis.ai";
    }, []);
    return (
        <>
            <PricingSection />
            <FaqSection />
            <TestimonialSection />
        </>
    );

}

export default Pricing;