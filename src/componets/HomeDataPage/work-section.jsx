
import { work01, work02 } from "../image.jsx";

import { FaRegCirclePlay } from "react-icons/fa6";

import { useState } from "react";

const steps = [
    {
        title: "Choose the sort of content copy you wish to create.",
        description:
            "Get your thoughts to paper faster with our step-by-step AI copywriter.",
        link: "Get Started"
    },
    {
        title: "Enter the specifics of your product or business.",
        description:
            "Add your product details, target audience and important information to create relevant content.",
        link: "Enter Details"
    },
    {
        title: "See how AI is used to generate creative content clones.",
        description:
            "Generate creative content tailored to your needs and review the results.",
        link: "Generate Content"
    }
];

function Work() {
    const [openStep, setOpenStep] = useState(0);

    const toggleStep = (index) => {
        setOpenStep(openStep === index ? -1 : index);
    };

    return (
        <section className="work-section">
            <div className="container">
                <div className="work-container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="work-heading text-center">
                                <h6>WORKING PROCESS</h6>
                                <h2>How AI Writer Works</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="work-img">
                                <img
                                    src={work01}
                                    alt="AI writer working process"
                                    width="100%"
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 mx-auto">
                            <div className="work-steps">
                                {steps.map((step, index) => (
                                    <div
                                        className={`work-step ${
                                            openStep === index ? "active" : ""
                                        }`}
                                        key={step.title}
                                    >
                                        <button
                                            type="button"
                                            className="work-step-number"
                                            onClick={() => toggleStep(index)}
                                            aria-expanded={openStep === index}
                                        >
                                            {index + 1}
                                        </button>

                                        <div className="work-step-content">
                                            <button
                                                type="button"
                                                className="work-step-title"
                                                onClick={() => toggleStep(index)}
                                                aria-expanded={openStep === index}
                                            >
                                                {step.title}
                                            </button>

                                            {openStep === index && (
                                                <div className="work-step-details">
                                                    <p>{step.description}</p>
                                                    <a href="#contact">
                                                        {step.link}
                                                        <span> →</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="work-step-btn">
                                How It Works<FaRegCirclePlay />
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="work-counter">
                                <div className="work-counter-text">
                                    <h2><span>8,000,000</span>+</h2>
                                    <h4>Professional &amp; Teams Choose Met.Ai</h4>
                                </div>
                                <div className="work-counter-img">
                                    <img src={work02} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Work;
