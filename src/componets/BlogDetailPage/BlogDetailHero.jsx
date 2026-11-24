import { Link } from "react-router-dom";

function BlogDetailHero() {
    return (
        <section className="blog-detail-hero">
            <div className="container">
                <p className="blog-detail-breadcrumb">
                    <Link to="/">Home</Link>
                    <span aria-hidden="true">/</span>
                    <span>Blog details</span>
                </p>
                <h1>Ensuring your data security: Met.ai is now SOC 2 type II compliant</h1>
            </div>
        </section>
    );
}

export default BlogDetailHero;
