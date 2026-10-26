
import { FaArrowRight, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function ContactForm() {
    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="contact-form-layout">
                    <div className="contact-form-intro">
                        <h2>Send us a message</h2>
                        <p>Fill out the form and our team will get back to you as quickly as we can.</p>
                        <div className="contact-form-socials" aria-label="Social media">
                            <a href="https://www.facebook.com/" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com/" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <form className="contact-message-form">
                        <div className="contact-form-fields">
                            <div className="contact-form-field">
                                <label htmlFor="contact-name">Name (required)</label>
                                <input id="contact-name" name="name" type="text" placeholder="Your name" required />
                            </div>
                            <div className="contact-form-field">
                                <label htmlFor="contact-company">Company name (required)</label>
                                <input id="contact-company" name="company" type="text" placeholder="Your company name" required />
                            </div>
                            <div className="contact-form-field">
                                <label htmlFor="contact-phone">Phone number (required)</label>
                                <input id="contact-phone" name="phone" type="tel" placeholder="Phone number" required />
                            </div>
                            <div className="contact-form-field">
                                <label htmlFor="contact-email">Email (required)</label>
                                <input id="contact-email" name="email" type="email" placeholder="Email address" required />
                            </div>
                            <div className="contact-form-field contact-form-message">
                                <label htmlFor="contact-message">Message (required)</label>
                                <textarea id="contact-message" name="message" placeholder="Type your message here" required />
                            </div>
                        </div>
                        <label className="contact-form-consent" htmlFor="contact-consent">
                            <input id="contact-consent" name="consent" type="checkbox" />
                            <span>I’m okay with getting emails and having that activity tracked to improve my experience.</span>
                        </label>
                        <button className="contact-form-submit" type="submit">
                            Sign up for free <FaArrowRight aria-hidden="true" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;