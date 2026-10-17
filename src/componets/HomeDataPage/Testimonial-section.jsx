import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonial01 } from "../image";

const SlickSlider = Slider.default ?? Slider;

const testimonials = [
    {
        quote: "Create quality content quickly and easily...",
        review:
            "This AI writer helps us create quality content quickly and easily. It saves our team valuable time.",
        name: "John Smith",
        location: "United States",
        image:
            testimonial01,
    },
    {
        quote: "Creating engaging content feels simple...",
        review:
            "A simple and useful platform for creating engaging content and generating new ideas.",
        name: "Sarah Johnson",
        location: "United Kingdom",
        image:
            testimonial01,
    }
];

function NextArrow({ onClick }) {
    return (
        <button
            type="button"
            className="testimonial-arrow testimonial-next"
            onClick={onClick}
            aria-label="Next testimonial"
        >
            <span aria-hidden="true">→</span>
        </button>
    );
}

function PrevArrow({ onClick }) {
    return (
        <button
            type="button"
            className="testimonial-arrow testimonial-prev"
            onClick={onClick}
            aria-label="Previous testimonial"
        >
            <span aria-hidden="true">←</span>
        </button>
    );
}

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        adaptiveHeight: true,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="testimonial-section" aria-label="Client testimonials">
            <div className="container">
                <div className="testimonial-heading text-center">
                    <h6>TESTIMONIAL</h6>
                    <h2>What our clients say</h2>
                </div>
                <div className="testimonial-panel">
                    <span className="testimonial-sparkle" aria-hidden="true">
                        ✧
                    </span>
                    <div className="testimonial-content">
                        <SlickSlider {...settings}>
                            {testimonials.map((testimonial) => (
                                <article
                                    className="testimonial-slide"
                                    key={testimonial.name}
                                >
                                    <img
                                        className="testimonial-photo"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                    <div className="testimonial-copy">
                                        <h2>{testimonial.quote}</h2>
                                        <p>{testimonial.review}</p>
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </article>
                            ))}
                        </SlickSlider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
