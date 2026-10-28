
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const location = useLocation();

    // Route change hone par menus close honge
    useEffect(() => {
        setMenuOpen(false);
        setDropdownOpen(false);
    }, [location.pathname]);

    // Dropdown links
    const dropdownLinks = [
        { name: "Pricing", path: "/pricing" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Blog Details", path: "/blog-details" },
        { name: "Use Case", path: "/use-case" },
        { name: "Case Details", path: "/case-details" },
        { name: "Login", path: "/login" },
        { name: "Signup", path: "/signup" },
    ];

    return (
        <header className="main-header">
            <div className="navbar-container">



                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    className="mobile-menu-btn"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span>{menuOpen ? "\u2715" : "\u2630"}</span>
                </button>

                {/* Navigation */}
                <nav
                    id="main-navigation"
                    className={`navbar-menu ${menuOpen ? "menu-active" : ""}`}
                >
                    <ul className="navbar-links">

                        {/* Home */}
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        {/* Features */}
                        <li>
                            <Link to="/features">Features</Link>
                        </li>

                        {/* Pricing */}
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>

                        {/* Use Case */}
                        <li>
                            <Link to="/use-case">Use Case</Link>
                        </li>

                        {/* Dropdown */}
                        <li className={`dropdown ${dropdownOpen ? "dropdown-active" : ""}`}>
                            <button
                                type="button"
                                className="dropdown-toggle"
                                aria-expanded={dropdownOpen}
                                onClick={() => setDropdownOpen((open) => !open)}
                            >
                                Pages
                                <span>{dropdownOpen ? "−" : "+"}</span>
                            </button>

                            <ul className="dropdown-menu">
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                                <li><Link to="/use-case">Use Case</Link></li>
                                <li><Link to="/case-details">Case Details</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Signup</Link></li>
                            </ul>
                        </li>


                        {/* Contact */}
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                        {/* Mobile Buttons */}
                        <li className="mobile-auth-buttons">
                            <Link to="/login" className="login-btn">
                                Log in
                            </Link>

                            <Link to="/signup" className="signup-btn">
                                Sign up
                            </Link>
                        </li>

                    </ul>
                </nav>



            </div>
        </header>
    );
}

export default Header;