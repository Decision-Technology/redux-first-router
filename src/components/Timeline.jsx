import React from "react"
import Link from "redux-first-router-link"

function Timeline() {
  return (
    <div>
      <h2>Projects Timeline</h2>
      <p>First nested route!</p>
      <Link to={{ type: "PROJECT1" }}>Go to project 1</Link>
      <br></br>
      <Link to={{ type: "PROJECTS" }}>Back to projects</Link>
    </div>
  )
}

export default Timeline
