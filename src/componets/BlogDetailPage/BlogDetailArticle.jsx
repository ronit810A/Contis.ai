import { blog01, blog02, blog03 } from "../image";
import authorImage from "../../assets/images/team-01.jpg";

function BlogDetailArticle() {
    return (
        <article className="blog-detail-article">
            <img
                className="blog-detail-cover"
                src={blog01}
                alt="A workspace representing secure technology"
            />

            <div className="blog-detail-author">
                <img src={authorImage} alt="Xolabiro" />
                <div>
                    <span>Author</span>
                    <strong>Xolabiro</strong>
                </div>
                <div>
                    <span>Published</span>
                    <strong>August 5, 2023</strong>
                </div>
                <a href="#leave-reply">
                    <span>2 comments</span>
                    <strong>Join the conversation</strong>
                </a>
            </div>

            <div className="blog-detail-copy">
                <p>
                    Trust is essential when organizations handle sensitive information.
                    Independent security standards give customers a clearer view of how
                    data is protected and how risk is managed.
                </p>
                <p>
                    Our latest security milestone reflects a continued investment in
                    thoughtful processes, reliable systems, and transparency for the
                    teams that depend on us.
                </p>

                <h2>What is a business technology roadmap?</h2>
                <p>
                    A technology roadmap is a high-level view of where a product is
                    going and why. It helps teams connect long-term goals to the work
                    they plan next, without getting lost in a list of individual tasks.
                    A useful roadmap can help teams:
                </p>
                <ul>
                    <li>Align product decisions with business priorities.</li>
                    <li>Make upcoming milestones easier to understand.</li>
                    <li>Share progress and trade-offs with stakeholders.</li>
                </ul>

                <div className="blog-detail-inline-images">
                    <img src={blog02} alt="Collaborative product planning" />
                    <img src={blog03} alt="Technology team working together" />
                </div>

                <p>
                    With a shared direction, teams can revisit priorities as needs
                    change and keep the path from an idea to a finished product visible
                    to everyone involved.
                </p>
            </div>
        </article>
    );
}

export default BlogDetailArticle;
