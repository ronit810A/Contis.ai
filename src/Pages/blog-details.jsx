import { useEffect } from "react";
import BlogDetailArticle from "../componets/BlogDetailPage/BlogDetailArticle";
import BlogDetailHero from "../componets/BlogDetailPage/BlogDetailHero";
import BlogDetailPostFooter from "../componets/BlogDetailPage/BlogDetailPostFooter";
import BlogDetailReply from "../componets/BlogDetailPage/BlogDetailReply";
import BlogDetailSidebar from "../componets/BlogDetailPage/BlogDetailSidebar";
import "../css/BlogDetails.css";

function BlogDetails() {
    useEffect(() => {
        document.title = "Blog Details | Contis.ai";
    }, []);

    return (
        <main className="blog-detail-page">
            <BlogDetailHero />
            <section className="blog-detail-layout">
                <div className="container">
                    <div className="blog-detail-grid">
                        <div className="blog-detail-main-column">
                            <BlogDetailArticle />
                            <BlogDetailPostFooter />
                            <BlogDetailReply />
                        </div>
                        <BlogDetailSidebar />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default BlogDetails;
