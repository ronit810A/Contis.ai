
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./componets/header";
import Footer from "./componets/footer";

import Home from "./Pages/home";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import Pricing from "./Pages/pricing";

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

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
