


import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";






function ContactUs (){
    return(
        <section className="contact-us-section">
            <div className="container">
                <div className="contact-us-container">
                    <div className="row d-flex flex-wrap justify-content-center">

                        <div className="col-md-5">
                            <div className="contact-us-box">
                                <span><IoIosMail /></span>
                                <div className="contact-us-text">
                                    <p>Email us</p>
                                    <a href="mailto:ronit810a@gmail.com">ronit810a@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="contact-us-box">
                                <span><IoIosCall /></span>
                                <div className="contact-us-text">
                                    <p>Call us</p>
                                    <a href="callto:8219606863">+91 82196 06863</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default ContactUs;