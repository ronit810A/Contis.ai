

import { logo } from "./image";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="footer-left">
                            <div className="footer-logo">
                               <Link to="/"><img src={logo} alt="Home" /></Link>
                            </div>
                            <div className="footer-icon">
                                <ul className="d-flex flex-wrap">
                                    <li><a href="#"><FaFacebook /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaInstagram /></a></li>
                                    <li><a href="#"><FaGithub /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-box">
                            <h5>USE CASE</h5>
                            <ul>
                                <li><a href="#">Emails</a></li>
                                <li><a href="#">Social media Ads</a></li>
                                <li><a href="#">Text editing</a></li>
                                <li><a href="#">Copy writing</a></li>
                                <li><a href="#">Creative writing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-box">
                            <h5>solutions</h5>
                            <ul>
                                <li><a href="#">Ecommerce</a></li>
                                <li><a href="#">Blogger/Vlogger</a></li>
                                <li><a href="#">Small business</a></li>
                                <li><a href="#">All solutions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-box">
                            <h5>RESOURCES</h5>
                            <ul>
                                <li><a href="#">Knowledge base</a></li>
                                <li><a href="#">What’s new</a></li>
                                <li><a href="#">Roadmap</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Affiliate program</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-right">
                            <h5>JOIN COMMUNITY</h5>
                            <form className="footer-form">
                                <input placeholder="you@domain.com" type="text" />
                                <button>sing up</button>
                            </form>
                            <div className="footer-check">
                                <input id="flexCheckDefault" type="checkbox"></input>
                                <label for="flexCheckDefault">
                                    I’m okay with getting emails and having that activity tracked to improve my experience.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mx-auto text-center">
                        <div className="footer-copyright">
                            <p>© 2023 Contis. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;