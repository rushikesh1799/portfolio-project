import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Navbar = () => {
    const { selectedTab, setSelectedTab } = useContext(DataContext);

    return (
        <nav className="navbar">
            <ul
                className="navbar-list"
                onClick={(e) => setSelectedTab(e.target.value)}
            >
                <li className="navbar-item">
                    <button
                        className={`navbar-link ${
                            selectedTab === "about" ? "active" : ""
                        }`}
                        value="about"
                        data-nav-link
                    >
                        About
                    </button>
                </li>

                <li className="navbar-item">
                    <button
                        className={`navbar-link ${
                            selectedTab === "resume" ? "active" : ""
                        }`}
                        value="resume"
                        data-nav-link
                    >
                        Resume
                    </button>
                </li>

                <li className="navbar-item">
                    <button
                        className={`navbar-link ${
                            selectedTab === "projects" ? "active" : ""
                        }`}
                        value="projects"
                        data-nav-link
                    >
                        Projects
                    </button>
                </li>

                <li className="navbar-item">
                    <button
                        className={`navbar-link ${
                            selectedTab === "blogs" ? "active" : ""
                        }`}
                        value="blogs"
                        data-nav-link
                    >
                        Blogs
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
