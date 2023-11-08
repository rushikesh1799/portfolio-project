import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";

const Blogs = () => {
    return (
        <article className="blog active" data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            <section className="blog-posts">
                <ul className="blog-posts-list">
                    <li className="blog-post-item">
                        <a
                            href="https://rushikeshbunge.hashnode.dev/understanding-scope-in-javascript"
                            target="_blank"
                        >
                            <figure className="blog-banner-box">
                                {/* <div className="project-item-icon-box">
                                    <VisibilityIcon
                                        sx={{ fontSize: "1.25rem" }}
                                    />
                                </div> */}
                                <img
                                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*tleLG0nr-AdhPP2M.jpg"
                                    alt="Design conferences in 2022"
                                    loading="lazy"
                                />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">JavaScript</p>

                                    <span className="dot"></span>

                                    <time dateTime="2022-02-23">
                                        Fab 23, 2022
                                    </time>
                                </div>

                                <h3 className="h3 blog-item-title">
                                    Understanding Scope in Javascript
                                </h3>

                                <p className="blog-text">
                                    In JavaScript, scope refers to the context
                                    in which variables are defined and accessed.
                                    Understanding scope is crucial for writing
                                    clean and error-free code. Learn more in
                                    this blog.
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default Blogs;
