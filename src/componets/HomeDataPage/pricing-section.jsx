
import { FaArrowRightLong } from "react-icons/fa6";





function pricing() {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-container">


                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="pricing-heading">
                                <h6>pricing</h6>
                                <h2>Fast copywriting by Ai</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="pricing-box">
                                <h5>Free Plan</h5>
                                <p>Perfect for testing</p>
                                <button>Sign up for free  <FaArrowRightLong /></button>
                                <p><span>Free</span>-7 days trial</p>
                                <p>No Credit Card Required</p>
                                <ul>
                                    <li>10 credits per month</li>
                                    <li>100 bonus credits for the first month</li>
                                    <li>20+ languages</li>
                                    <li>80+ copywriting tools</li>
                                </ul>
                            </div>
                        </div>

                         <div className="col-md-4">
                            <div className="pricing-box">
                                <h5>Pro</h5>
                                <p>Perfect for testing</p>
                                <button>Sign up for free  <FaArrowRightLong /></button>
                                <p><span>$17</span>-7 days trial</p>
                                <p>No Credit Card Required</p>
                                <ul>
                                    <li>10 credits per month</li>
                                    <li>100 bonus credits for the first month</li>
                                    <li>20+ languages</li>
                                    <li>80+ copywriting tools</li>
                                </ul>
                            </div>
                        </div>

                         <div className="col-md-4">
                            <div className="pricing-box">
                                <h5>Team</h5>
                                <p>Perfect for testing</p>
                                <button>Sign up for free  <FaArrowRightLong /></button>
                                <p><span>$29</span>-7 days trial</p>
                                <p>No Credit Card Required</p>
                                <ul>
                                    <li>10 credits per month</li>
                                    <li>100 bonus credits for the first month</li>
                                    <li>20+ languages</li>
                                    <li>80+ copywriting tools</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default pricing;