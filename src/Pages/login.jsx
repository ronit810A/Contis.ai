



import { useEffect } from "react";


import LoginSection from "../componets/LoginDataPage/login-section";
import LoginForm from "../componets/LoginDataPage/login-form";

import "../css/login.css"


function Login() {
    useEffect(() => {
            document.title = "Login | Contis.ai";
        }, []);

    return (
        <>
            <LoginSection />
            <LoginForm/>
        </>
    );
}


export default Login;




