import { FaArrowRightLong } from "react-icons/fa6";

import hero_img from "../../assets/images/banner_img-01.jpg";

function hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="hero-content">
                                <h6>Contis.ai MAKES CONTENT FAST & EASY</h6>
                                <h1>Write content 10x faster</h1>
                                <p>
                                    Give customers a structutal experience they'll and come back.
                                    <br />
                                    Join #1 app to track your data.
                                </p>
                                <button>Sign up for free  <FaArrowRightLong /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 m-auto">

                            <div className="hero-img">
                                <img src={hero_img} alt="Hero Banner" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default hero;