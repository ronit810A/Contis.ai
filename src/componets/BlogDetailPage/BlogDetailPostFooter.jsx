import { useState } from "react";
import { FaFacebookF, FaHeart, FaLink, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function BlogDetailPostFooter() {
    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
        } catch (error) {
            console.error("Could not copy the article link.", error);
        }
    };

    return (
        <div className="blog-detail-post-footer">
            <div className="blog-detail-tags">
                <h2>Post tags:</h2>
                <a href="#tags">ChatGPT</a>
                <a href="#tags">Perspectives</a>
                <a href="#tags">Crypto</a>
            </div>
            <div className="blog-detail-share">
                <div className="blog-detail-social">
                    <h2>Share:</h2>
                    <a href="https://www.facebook.com/" aria-label="Share on Facebook"><FaFacebookF /></a>
                    <a href="https://twitter.com/" aria-label="Share on X"><FaXTwitter /></a>
                    <a href="https://www.linkedin.com/" aria-label="Share on LinkedIn"><FaLinkedinIn /></a>
                </div>
                <div className="blog-detail-social">
                    <button type="button" onClick={copyLink} aria-label="Copy article link">
                        <FaLink />
                    </button>
                    <button type="button" aria-label="Like article"><FaHeart /></button>
                </div>
            </div>
            {copied && <p className="blog-detail-copy-status" role="status">Article link copied.</p>}
        </div>
    );
}

export default BlogDetailPostFooter;
