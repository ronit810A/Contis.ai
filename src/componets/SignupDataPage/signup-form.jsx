import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/signup.css";

function SignupForm() {
    return (
        <section className="signup-card" aria-label="Create your Contis.ai account">
            <div className="container">
                <div className="row justify-content-center                      ">
                    <div className="col-lg-5 mx-auto  signup-box">
                        <form className="signup-form">
                            <div className="signup-field">
                                <label htmlFor="signup-name">Name (required)</label>
                                <input
                                    id="signup-name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Name"
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="signup-field">
                                <label htmlFor="signup-username">Email or Username (required)</label>
                                <input
                                    id="signup-username"
                                    name="username"
                                    type="text"
                                    placeholder="Enter Email or Username"
                                    autoComplete="username"
                                    required
                                />
                            </div>

                            <div className="signup-field">
                                <label htmlFor="signup-password">Password (required)</label>
                                <input
                                    id="signup-password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    autoComplete="new-password"
                                    required
                                />
                            </div>

                            <label className="signup-terms" htmlFor="signup-terms">
                                <input id="signup-terms" name="terms" type="checkbox" required />
                                <span>I accept <a href="/terms">terms and condition</a></span>
                            </label>

                            <button className="signup-submit" type="submit">
                                Sign up with Contis.ai <FaArrowRight aria-hidden="true" />
                            </button>
                        </form>

                        <div className="signup-divider" aria-hidden="true">OR</div>

                        <button className="signup-google" type="button">
                            Sign up with Google <FaGoogle aria-hidden="true" />
                        </button>

                        <p className="signup-login">
                            <span>Already have an account ? </span>
                            <Link to="/login">Login</Link>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SignupForm;
