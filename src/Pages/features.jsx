

import FeaturesSection from "../componets/FeaturesDataPage/features-section";
import MainFeaturesSection from "../componets/FeaturesDataPage/main-features-section"


import WorkSection from "../componets/HomeDataPage/work-section";
import UnlockSection from "../componets/HomeDataPage/unlock-section"


import "../css/Features.css"

function Features() {
    return (
        <>
            <FeaturesSection />
            <MainFeaturesSection/>
            <WorkSection/>
            <UnlockSection/>
        </>
    );
}

export default Features;