

import UseSection from "../componets/UseDataPage/use-section";
import UseFeatureSection from "../componets/UseDataPage/use-feature-section";  

import PricingSection from "../componets/HomeDataPage/pricing-section";
import UnlockSection from "../componets/HomeDataPage/unlock-section";


import "../css/use.css"




function Use() {
    return (
        <>
            <UseSection />
            <UseFeatureSection/>
            <PricingSection />
            <UnlockSection />
        </>
    );
}


export default Use;