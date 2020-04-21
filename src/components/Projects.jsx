import React from "react";
import Link from 'redux-first-router-link';

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <Link to={{ type: 'TIMELINE' }}>Projects Timeline</Link>
        </div>
    );
}

export default Projects;
