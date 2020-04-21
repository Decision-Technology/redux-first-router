import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "redux-first-router-link";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Profile from "./components/Profile.jsx";
import Timeline from "./components/Timeline.jsx";
import Project1 from "./components/Project1.jsx";



const mapStateToProps = state => {
    return {
        location: state.location
    };
};

const App = props => {

    const components = {
        HOME: <Home />,
        ABOUT: <About />,
        PROFILE: <Profile />,
        PROJECTS: <Projects />,
        TIMELINE: <Timeline />,
        PROJECT1: <Project1 />
    };

    return (<div>
        <h1>Redux First Router </h1>
        <div>
            <Link to={{ type: "HOME" }}>
                Home page
          </Link>
            <br />
            <Link to={{ type: "ABOUT" }}>
                About
          </Link>
            <br />
            <Link to={{ type: "PROJECTS" }}>
                Projects
          </Link>
            <br />
            <Link to={{ type: "PROFILE" }}>
                Profile
          </Link>
            <br />
        </div >
        {/* Take the location from Redux store and render the corresponding component */}
        {components[props.location.type]}

    </div >
    );

}


export const ConnectedApp = connect(mapStateToProps)(App);