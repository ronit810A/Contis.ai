
import { Routes, Route } from "react-router-dom";

import Header from "./componets/header";
import Footer from "./componets/footer"

import Home from "./Pages/home";
import About from "./Pages/about";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
