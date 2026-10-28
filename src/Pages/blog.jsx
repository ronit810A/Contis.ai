
import BlogSection from "../componets/BlogDataPage/blog-section";
import BlogTeamSection from "../componets/BlogDataPage/blog-team-section";
import UnlockSection from "../componets/HomeDataPage/unlock-section"

import { useEffect } from "react";


import "../css/Blog.css"

function Blog() {
    useEffect(() => {
        document.title = "Blog | Contis.ai";
    }, []);
    return (
        <>
            <BlogSection />
            <BlogTeamSection />
            <UnlockSection />
        </>
    );

}

export default Blog;