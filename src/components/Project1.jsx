import React from "react"
import Link from "redux-first-router-link"

function Project1() {
  return (
    <div>
      <h2>Project1</h2>
      <Link to={{ type: "HOME" }}>Go back to home</Link>
    </div>
  )
}

export default Project1
