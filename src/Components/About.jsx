import React from "react";

import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const About = () => {
    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I'm{" "}
                    <span className="text-highlight">frontend Developer</span>{" "}
                    from Maharashtra, India, I build apps with a focus on{" "}
                    <span className="text-highlight">
                        JavaScript, React, Redux-tookit, Nodejs, Expressjs,
                        MongoDB.
                    </span>{" "}
                    I enjoy turning complex problems into simple, beautiful and
                    intuitive designs. A Software Engineer, who loves to solve
                    problems.
                </p>

                <p>
                    I am having an experience of building high-performing,
                    responsive, beautiful web applications to deliver a unique,
                    intuitive user experience that works, also keen interest in
                    UI/UX with some nice designing skills. I am a well-trained
                    teammate who loves to share ideas and prioritizes
                    communication in order to achieve goals within the set
                    deadlines. I enjoy being challenged and working on projects
                    that require me to step outside of my comfort zone.
                </p>
            </section>

            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>

                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1698583222/icon-dev_dv8ox1.svg"
                                alt="Web development icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">
                                Web development
                            </h4>

                            <p className="service-item-text">
                                High-quality development of sites at the
                                professional level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default About;
