

import { service01, service02, service03, service04, service05, serviceSide01 } from "../image.jsx"

import { MdEdit } from "react-icons/md";

import { FaArrowRightLong } from "react-icons/fa6";





function service() {
    return (
        <section className="service-section">
            <div className="container">
                <div className="service-content text-center">
                    <h6>Trusted <span> 120 companies </span> across the world</h6>
                    <div className="service-content-box row">
                        <div className="col-sm-2">
                            <div className="service-contant-box-img">
                                <img src={service01} alt="" width="100%" />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="service-contant-box-img">
                                <img src={service02} alt="" width="100%" />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="service-contant-box-img">
                                <img src={service03} alt="" width="100%" />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="service-contant-box-img">
                                <img src={service04} alt="" width="100%" />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="service-contant-box-img">
                                <img src={service05} alt="" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-main-content text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h6><span>Contis.ai</span> HELP YOU TO CREATE CONTENT FAST</h6>
                            <h2>Experience the full power of an AI content generator</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="service-box">
                                            <span><MdEdit /></span>
                                            <a href="#">Article generation</a>
                                            <p>Write unique &amp; plagiarism- free content for blogs</p>
                                            <ul>
                                                <li>Blog Article Writer</li>
                                                <li>Blog Ideas, Intros</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="service-box">
                                            <span><MdEdit /></span>
                                            <a href="#">Article generation</a>
                                            <p>Write unique &amp; plagiarism- free content for blogs</p>
                                            <ul>
                                                <li>Blog Article Writer</li>
                                                <li>Blog Ideas, Intros</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="service-box">
                                            <span><MdEdit /></span>
                                            <a href="#">Article generation</a>
                                            <p>Write unique &amp; plagiarism- free content for blogs</p>
                                            <ul>
                                                <li>Blog Article Writer</li>
                                                <li>Blog Ideas, Intros</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="service-box">
                                            <span><MdEdit /></span>
                                            <a href="#">Article generation</a>
                                            <p>Write unique &amp; plagiarism- free content for blogs</p>
                                            <ul>
                                                <li>Blog Article Writer</li>
                                                <li>Blog Ideas, Intros</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="service-box">
                                            <span><MdEdit /></span>
                                            <a href="#">Article generation</a>
                                            <p>Write unique &amp; plagiarism- free content for blogs</p>
                                            <ul>
                                                <li>Blog Article Writer</li>
                                                <li>Blog Ideas, Intros</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="service-box">
                                            <span><MdEdit /></span>
                                            <a href="#">Article generation</a>
                                            <p>Write unique &amp; plagiarism- free content for blogs</p>
                                            <ul>
                                                <li>Blog Article Writer</li>
                                                <li>Blog Ideas, Intros</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service-right-box">
                                    <div className="service-right-img">
                                        <img src={serviceSide01} alt="" />
                                    </div>
                                    <a href="#">Pick a plan on Met.Ai &amp; fall in love!</a>
                                    <p>Write unique &amp; plagiarism- free content for blogs</p>
                                    <button>Sign up for free  <FaArrowRightLong /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default service;