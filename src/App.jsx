
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import Header from "./componets/header";
import Footer from "./componets/footer";

import Home from "./Pages/home";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import Pricing from "./Pages/pricing";
import Contact from "./Pages/contact";
import Features from "./Pages/features"
import Use from "./Pages/use"

import "./App.css";

function App() {
    const location = useLocation();

    useEffect(() => {
        const pageName =
            location.pathname === "/"
                ? "home"
                : location.pathname.replace("/", "");

        document.body.className = pageName;
    }, [location.pathname]);


 useEffect(() => {
AOS.init({
duration: 1000,
once: false,
mirror: true,
offset: 100
});
}, []);

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/use" element={<Use/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
