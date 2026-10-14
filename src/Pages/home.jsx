import HeroSection from "../componets/HomeDataPage/hero-section"
import ServiceSection from "../componets/HomeDataPage/service-section"
import WorkSection from "../componets/HomeDataPage/work-section"


import "../css/Home.css"


function home() {
    return (
        <>
            <HeroSection />
            <ServiceSection/>
            <WorkSection/>
        </>
    );

}

export default home;