import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { blog02, blog03, blog04 } from "../image";

const categories = [
    ["AI Content", "03"],
    ["AI Technology", "03"],
    ["Announcements", "03"],
    ["Blog", "03"],
    ["Business", "03"],
    ["Developer", "03"],
];

const popularPosts = [
    { image: blog02, date: "Sep 26, 2021" },
    { image: blog03, date: "Sep 18, 2021" },
    { image: blog04, date: "Aug 30, 2021" },
];

const tags = ["ChatGPT", "Perspectives", "Crypto", "Design", "Developer", "AI Content", "Video", "Technology"];

function BlogDetailSidebar() {
    const [search, setSearch] = useState("");

    return (
        <aside className="blog-detail-sidebar">
            <section className="blog-detail-widget">
                <h2>Search</h2>
                <form className="blog-detail-search" onSubmit={(event) => event.preventDefault()}>
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search..."
                        aria-label="Search articles"
                    />
                    <button type="submit" aria-label="Search"><FaSearch /></button>
                </form>
            </section>

            <section className="blog-detail-widget">
                <h2>Categories</h2>
                <ul className="blog-detail-category-list">
                    {categories.map(([name, count]) => (
                        <li key={name}>
                            <a href="#categories">{name}<span>({count})</span></a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="blog-detail-widget">
                <h2>Popular post</h2>
                <div className="blog-detail-popular-list">
                    {popularPosts.map((post) => (
                        <a className="blog-detail-popular-post" href="#popular-posts" key={post.date}>
                            <img src={post.image} alt="" />
                            <span>
                                <small>{post.date} · 9 min · Admin</small>
                                <strong>Ensuring your data security: Met.ai is now SOC 2 type II compliant</strong>
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            <section className="blog-detail-widget">
                <h2>Tag cloud</h2>
                <div className="blog-detail-tag-cloud">
                    {tags.map((tag) => <a href="#tag-cloud" key={tag}>{tag}</a>)}
                </div>
            </section>
        </aside>
    );
}

export default BlogDetailSidebar;
