import React, { useContext } from "react";

import Email from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { DataContext } from "../Context/DataContext";

const Aside = () => {
    const { showContacts, setShowContacts } = useContext(DataContext);

    return (
        <aside
            className={`sidebar ${showContacts ? "active" : ""} `}
            data-sidebar
        >
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img
                        src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1699336435/Me2_m7gopp.jpg"
                        alt="Rushikesh Bunge"
                        width="80"
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">
                        Rushikesh Bunge
                    </h1>
                    <div className="profile_tabs">
                        <p className="title">Frontend Engineer</p>
                        <a href="/" target="_blank">
                            <p className="title">See Resume</p>
                        </a>
                    </div>
                </div>

                <ul className="social-list social-list-hide">
                    <li className="social-item">
                        <a
                            href="https://github.com/rushikesh1799"
                            className="social-link"
                            target="_blank"
                        >
                            <GitHubIcon sx={{ fontSize: "xs" }} />
                        </a>
                    </li>

                    <li className="social-item">
                        <a
                            href="https://twitter.com/rushi1799"
                            className="social-link"
                            target="_blank"
                        >
                            <TwitterIcon sx={{ fontSize: "s" }} />
                        </a>
                    </li>

                    <li className="social-item">
                        <a
                            href="https://www.linkedin.com/in/rushikesh-bunge-9b14b2155/"
                            className="social-link"
                            target="_blank"
                        >
                            <LinkedInIcon sx={{ fontSize: "xs" }} />
                        </a>
                    </li>
                </ul>

                <button
                    className="info_more-btn"
                    data-sidebar-btn
                    onClick={() => setShowContacts((prev) => !prev)}
                >
                    <span>Show Contacts</span>

                    <KeyboardArrowDownIcon
                        sx={{
                            "@media (min-width: 580px)": {
                                display: "none",
                            },
                        }}
                    />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <Email />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a
                                href="mailto:rushikeshbunge321@gmail.com"
                                className="contact-link"
                            >
                                rushikeshbunge1@gmail.com
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <PhoneIcon />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            <a href="tel:7058693670" className="contact-link">
                                +91 7058693670
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <LocationOnIcon />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>Pune, Maharashtra</address>
                        </div>
                    </li>

                    {showContacts ? (
                        <ul className="social-list">
                            <li className="social-item">
                                <a
                                    href="https://github.com/rushikesh1799"
                                    className="social-link"
                                    target="_blank"
                                >
                                    <GitHubIcon sx={{ fontSize: "xs" }} />
                                </a>
                            </li>

                            <li className="social-item">
                                <a
                                    href="https://twitter.com/rushi1799"
                                    className="social-link"
                                    target="_blank"
                                >
                                    <TwitterIcon sx={{ fontSize: "s" }} />
                                </a>
                            </li>

                            <li className="social-item">
                                <a
                                    href="https://www.linkedin.com/in/rushikesh-bunge-9b14b2155/"
                                    className="social-link"
                                    target="_blank"
                                >
                                    <LinkedInIcon sx={{ fontSize: "xs" }} />
                                </a>
                            </li>
                        </ul>
                    ) : (
                        <></>
                    )}
                </ul>

                <div className="separator"></div>
            </div>
        </aside>
    );
};

export default Aside;
