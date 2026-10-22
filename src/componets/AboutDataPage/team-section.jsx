
import { team01 } from "..//image"

import { FaArrowRightLong } from "react-icons/fa6";



function team() {
    return (
        <section className="team-section">
            <div className="container">
                <div className="team-container">

                    <div className="row">

                        <div className="col-lg-4 mx-auto">
                            <div className="team-img">
                                <img src={team01} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 mx-auto">
                            <div className="team-heading">
                                <h6>team member</h6>
                                <h2>A great story always starts with a great team Work</h2>
                                <p>
                                    We are a small, but growing team. Our expertise includes growth marketing, design, software development, and product management.
                                </p>
                                <button>All members <FaArrowRightLong /> </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default team;