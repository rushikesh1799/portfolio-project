import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";

const Projects = () => {
    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Projects</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    <li className="filter-item">
                        <button className="active" data-filter-btn>
                            All
                        </button>
                    </li>

                    {/* <li className="filter-item">
                        <button data-filter-btn>Web Applications</button>
                    </li> */}
                </ul>

                <div className="filter-select-box">
                    <button className="filter-select" data-select>
                        <div className="select-value" data-selecct-value>
                            Select category
                        </div>

                        <div className="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>
                    </button>

                    <ul className="select-list">
                        <li className="select-item">
                            <button data-select-item>All</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Web design</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Applications</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item>Web development</button>
                        </li>
                    </ul>
                </div>

                <ul className="project-list">
                    <li
                        className="project-item  active"
                        data-filter-item
                        data-category="web development"
                    >
                        <a
                            href="https://developers-library.netlify.app/"
                            target="_blank"
                        >
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <VisibilityIcon />
                                </div>

                                <img
                                    src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1699338028/developers-library_ufd2uo.png"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>

                            <h3 className="project-title">
                                Developer's Library
                            </h3>

                            <p className="project-category">
                                <strong>Developer's Library</strong> is a web
                                application to explore and watch the best video
                                tutorials about the web development and
                                programming. It is built using ReactJs,
                                Redux-toolkit, ExpressJs, and MongoDB.
                            </p>

                            {/* <p className="project-category">Web development</p> */}
                        </a>
                    </li>
                    <li
                        className="project-item  active"
                        data-filter-item
                        data-category="web development"
                    >
                        <a
                            href="https://fashionfusions.vercel.app/"
                            target="_blank"
                        >
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <VisibilityIcon />
                                </div>

                                <img
                                    src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1699336433/fashionFusion_czpv3w.png"
                                    alt="e-commerce"
                                    loading="lazy"
                                />
                            </figure>

                            <h3 className="project-title">Fashion Fusion</h3>

                            <p className="project-category">
                                <strong>Fashion Fusion</strong> is an e-commerce
                                web application that stores various fashionable
                                and trendy clothes that can be showcased and
                                sold online. It is built using ReactJs, Context
                                API, useReducer Hook, razorpay-API.
                            </p>

                            {/* <p className="project-category">Web development</p> */}
                        </a>
                    </li>
                    <li
                        className="project-item  active"
                        data-filter-item
                        data-category="web development"
                    >
                        <a href="https://snapverse.vercel.app/" target="_blank">
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <VisibilityIcon />
                                </div>

                                <img
                                    src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1699336435/snapVerse_svlnxq.png"
                                    alt="social-media-app"
                                    loading="lazy"
                                />
                            </figure>

                            <h3 className="project-title">SnapVerse</h3>

                            <p className="project-category">
                                <strong>Snap Verse</strong> is a Social Media
                                Application where you can share posts and
                                learnings. It is built using ReactJs, Context
                                API, useReducer Hook, Material UI library.
                            </p>

                            {/* <p className="project-category">Web development</p> */}
                        </a>
                    </li>
                    <li
                        className="project-item  active"
                        data-filter-item
                        data-category="web development"
                    >
                        <a
                            href="https://budgetbuddy1.netlify.app/"
                            target="_blank"
                        >
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <VisibilityIcon />
                                </div>

                                <img
                                    src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1699427364/budget-buddy_txofp1.png"
                                    alt="social-media-app"
                                    loading="lazy"
                                />
                            </figure>

                            <h3 className="project-title">SnapVerse</h3>

                            <p className="project-category">
                                <strong>Budget Buddy</strong> is a financial
                                Management App, designed to help users manage
                                their income, expenses, and savings effectively.
                                It is built using ReactJs, Redux-toolkit,
                                ExpressJs, and MongoDB, and Material UI library.
                            </p>

                            {/* <p className="project-category">Web development</p> */}
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default Projects;
