
import { FaMessage } from "react-icons/fa6";
import { GrHeroku } from "react-icons/gr";
import { FaBrain } from "react-icons/fa";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";






function MainFeatures() {
    return (
        <section className="main-features-section">
            <div className="container">
                <div className="main-features-container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="main-features-box">
                                <span><FaMessage/></span>
                                <a href="#">Write content faster</a>
                                <p>
                                    You do not need to spend hours to write good content — let our advance AI Writer to get it done.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="main-features-box">
                                <span><GrHeroku /></span>
                                <a href="#">Write content faster</a>
                                <p>
                                    You do not need to spend hours to write good content — let our advance AI Writer to get it done.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="main-features-box">
                                <span><FaBrain /></span>
                                <a href="#">Write content faster</a>
                                <p>
                                    You do not need to spend hours to write good content — let our advance AI Writer to get it done.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="main-features-box">
                                <span><MdOutlineContentPasteGo /></span>
                                <a href="#">Write content faster</a>
                                <p>
                                    You do not need to spend hours to write good content — let our advance AI Writer to get it done.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="main-features-box">
                                <span><FaEdit /></span>
                                <a href="#">Write content faster</a>
                                <p>
                                    You do not need to spend hours to write good content — let our advance AI Writer to get it done.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="main-features-box">
                                <span><FaLanguage /></span>
                                <a href="#">Write content faster</a>
                                <p>
                                    You do not need to spend hours to write good content — let our advance AI Writer to get it done.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainFeatures;