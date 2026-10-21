import { Link } from "react-router-dom";

import { about01, service01, service02, service03, service04, service05 } from "../image";

import { FaArrowRightLong } from "react-icons/fa6";



function about() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-container">

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="about-heading">
                                <h6><Link to="/">Home</Link> / About</h6>
                                <h2>Our mission is to make people happy and productive</h2>
                                <p>
                                    Give customers a structutal experience they'll and come back enjoy better experience. Join #1 app to track your data.
                                </p>
                                <button>Sign up for free <FaArrowRightLong /> </button>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={about01} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="about-content">
                        <h6>Trusted <span> 120 companies </span> across the world</h6>
                        <div className="about-content-box row">
                            <div className="col-sm-2">
                                <div className="about-contant-box-img">
                                    <img src={service01} alt="" width="100%" />
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="about-contant-box-img">
                                    <img src={service02} alt="" width="100%" />
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="about-contant-box-img">
                                    <img src={service03} alt="" width="100%" />
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="about-contant-box-img">
                                    <img src={service04} alt="" width="100%" />
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="about-contant-box-img">
                                    <img src={service05} alt="" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section >



    );

}

export default about;