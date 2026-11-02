import Signupsection from "../componets/SignupDataPage/signup-section";
import SignupForm from "../componets/SignupDataPage/signup-form";


import { useEffect } from "react";

import "../css/signup.css"



function Signup() {
    useEffect(() => {
        document.title = "signup | Contis.ai";
    }, []);
    return (
        <>
            <Signupsection />
            <SignupForm />
        </>
    );

}

export default Signup;