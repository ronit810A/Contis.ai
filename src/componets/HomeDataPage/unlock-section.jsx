
import { unlock01 } from "../image"

import { FaArrowRightLong } from "react-icons/fa6";


function unlock() {
    return (
        <section className="unlock-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="unlock-container">

                            <div className="row">

                                <div className="col-md-2 m-auto">
                                    <div className="unlock-img">
                                        <img src={unlock01} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-5 mx-auto">
                                    <div className="unlock-text">
                                        <h6>UNLOCK THE POWER</h6>
                                        <h2>Stop wasting time &amp; money on content</h2>
                                        <ul class="d-flex">
                                            <li>No credit card required</li>
                                            <li>2,000 free words per month</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 m-auto d-flex justify-content-end">
                                    <button className="unlock-btn">
                                        Sign up for free   <FaArrowRightLong />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );

}

export default unlock;