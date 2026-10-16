
import { content01, content02, content03 } from "../image";
import { FaArrowRightLong } from "react-icons/fa6";



function content() {
    return (
        <section className="content-section">
            <div className="container">
                <div className="content-container">


                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="content-heading">
                                <h6><span>Met.ai</span> HELP YOU TO CREATE CONTENT FAST</h6>
                                <h2>Power of an AI content</h2>
                            </div>
                        </div>
                    </div>

                    <div className="content-top">
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <div className="content-top-img">
                                    <img src={content01} alt="" />
                                </div>
                            </div>
                            <div className="col-md-5 mx-auto">
                                <div className="content-top-text">
                                    <h4>The following ideas are inspired by your brand.</h4>
                                    <p>Got writer's block? Get ideas for stories, blog posts, website copy, research topics and more.</p>
                                    <ul>
                                        <li>Save time rapid AI-driven generation</li>
                                        <li>No outdates continuous code document</li>
                                    </ul>
                                    <button>Sign up for free <FaArrowRightLong /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-bottom">
                        <div className="row">

                            <div className="col-md-6">
                                <div className="content-bottom-box">
                                    <div className="content-bottom-img">
                                        <img src={content02} alt="" />
                                    </div>
                                    <div className="content-bottom-text">
                                        <h4>Write higher converting assistance post for all latest user</h4>
                                        <p>Got writer's block? Get ideas for stories, blog posts, website copy, research topics and more.</p>
                                        <button>Sign up for free <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="content-bottom-box">
                                    <div className="content-bottom-img">
                                        <img src={content03} alt="" />
                                    </div>
                                    <div className="content-bottom-text">
                                        <h4>Write higher converting assistance post for all latest user</h4>
                                        <p>Got writer's block? Get ideas for stories, blog posts, website copy, research topics and more.</p>
                                        <button>Sign up for free <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default content;