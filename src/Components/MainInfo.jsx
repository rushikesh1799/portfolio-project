import React, { useContext } from "react";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Blogs from "./Blogs";

import "./styles.css";
import { DataContext } from "../Context/DataContext";
import Navbar from "./Navbar";

const MainInfo = () => {
    const { selectedTab } = useContext(DataContext);

    return (
        <div className="main-content">
            <Navbar />

            {selectedTab === "about" ? (
                <About />
            ) : selectedTab === "resume" ? (
                <Resume />
            ) : selectedTab === "projects" ? (
                <Projects />
            ) : (
                <Blogs />
            )}
        </div>
    );
};

export default MainInfo;
