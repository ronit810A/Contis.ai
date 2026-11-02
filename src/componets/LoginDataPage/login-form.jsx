




import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <section className="login-card" aria-label="Sign in to your Contis.ai account">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 mx-auto login-box">
                        <form className="login-form">
                            <div className="login-field">
                                <label htmlFor="login-username">Email or Username (required)</label>
                                <input
                                    id="login-username"
                                    name="username"
                                    type="text"
                                    placeholder="Enter Email or Username"
                                    autoComplete="username"
                                    required
                                />
                            </div>

                            <div className="login-field">
                                <label htmlFor="login-password">Password (required)</label>
                                <input
                                    id="login-password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            <div className="login-options">
                                <label className="login-remember" htmlFor="login-remember">
                                    <input id="login-remember" name="remember" type="checkbox" />
                                    <span>Remember Me</span>
                                </label>
                                <button className="login-forgot" type="button">Forgot Password?</button>
                            </div>

                            <button className="login-submit" type="submit">
                                Sign in with Contis.ai <FaArrowRight aria-hidden="true" />
                            </button>
                        </form>

                        <div className="login-divider" aria-hidden="true">OR</div>

                        <button className="login-google" type="button">
                            Sign in with Google <FaGoogle aria-hidden="true" />
                        </button>

                        <p className="login-signup">
                            <span>Don't have an account? </span>
                            <Link to="/signup">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;
