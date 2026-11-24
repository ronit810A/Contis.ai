import { useState } from "react";

function BlogDetailReply() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="blog-detail-reply" id="leave-reply">
            <h2>Leave a reply</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Your name <span>(required)</span>
                    <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                    Your company name <span>(required)</span>
                    <input type="text" name="company" placeholder="Your company name" required />
                </label>
                <label>
                    Phone number <span>(required)</span>
                    <input type="tel" name="phone" placeholder="Phone number" required />
                </label>
                <label>
                    Email <span>(required)</span>
                    <input type="email" name="email" placeholder="Email address" required />
                </label>
                <label className="blog-detail-message-field">
                    Message <span>(required)</span>
                    <textarea name="message" placeholder="Type your message here" rows="5" required />
                </label>
                <label className="blog-detail-consent">
                    <input type="checkbox" required />
                    <span>I’m okay with getting emails and having that activity tracked to improve my experience.</span>
                </label>
                <button className="blog-detail-submit" type="submit">Submit reply <span aria-hidden="true">→</span></button>
                {submitted && (
                    <p className="blog-detail-form-status" role="status">
                        Thanks for your message. Reply submission is not connected yet.
                    </p>
                )}
            </form>
        </section>
    );
}

export default BlogDetailReply;
