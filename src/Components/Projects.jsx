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

                    <li className="filter-item">
                        <button data-filter-btn>Web Applications</button>
                    </li>
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
                        <a href="https://snapverse.vercel.app/" target="_blank">
                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <VisibilityIcon />
                                </div>

                                <img
                                    src="../src/assets/snapVerse.png"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>

                            <h3 className="project-title">SnapVerse</h3>

                            <p className="project-category">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aut harum assumenda itaque
                                magnam maxime qui iusto eligendi sunt rerum
                                officiis!
                            </p>

                            <p className="project-category">Web development</p>
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
                                    src="../src/assets/fashionFusion.png"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>

                            <h3 className="project-title">Fashion Fusion</h3>

                            <p className="project-category">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aut harum assumenda itaque
                                magnam maxime qui iusto eligendi sunt rerum
                                officiis!
                            </p>

                            <p className="project-category">Web development</p>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default Projects;
