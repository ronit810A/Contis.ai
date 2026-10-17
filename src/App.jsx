
import { Routes, Route } from "react-router-dom";

import Header from "./componets/header";
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
        </>
    );
}

export default App;
