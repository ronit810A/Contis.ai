import { FaRegCirclePlay  } from "react-icons/fa6";
import { LuCalendarSearch } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";







function benefits() {
    return (
        <section className="benefits-section">
            <div className="benefits-main">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 m-auto">
                            <div className="benefits-heading">
                                <h6>BENEFITS</h6>
                                <h2>Met.ai content writing benefits</h2>
                                <p>
                                    Give customers a structutal experience they'll and come back enjoy better experience. Join #1 app to track your data.
                                </p>
                                <button>Sign up for free < FaRegCirclePlay/> </button>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">

                                <div className="col-sm-6">
                                    <div className="benefits-box">
                                        <span>
                                             <LuCalendarSearch className="benefits-box-icon"/>
                                             </span>
                                        <a href="#">Website copy &amp; SEO</a>
                                        <p>Write unique &amp; plagiarism- free content for blogs</p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="benefits-box">
                                        <span>
                                             <FaShoppingBag className="benefits-box-icon"/>
                                             </span>
                                        <a href="#">Website copy &amp; SEO</a>
                                        <p>Write unique &amp; plagiarism- free content for blogs</p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="benefits-box">
                                        <span>
                                             <AiFillEdit  className="benefits-box-icon"/>
                                             </span>
                                        <a href="#">Website copy &amp; SEO</a>
                                        <p>Write unique &amp; plagiarism- free content for blogs</p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="benefits-box">
                                        <span>
                                             <TiDocumentText  className="benefits-box-icon"/>
                                             </span>
                                        <a href="#">Website copy &amp; SEO</a>
                                        <p>Write unique &amp; plagiarism- free content for blogs</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );

}

export default benefits;