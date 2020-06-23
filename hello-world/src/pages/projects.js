import React from "react"
import Header from "../components/header"
// import Footer from "../components/footer"

export default function Projects() {
  return (
    <div className="page">
      <Header />
      <p>Below are some of my recent projects.</p>

      <div className="projects-section">
        <div className="project-card">
          <img src="https://img.icons8.com/dotty/148/000000/project.png" />
          <h3>triiivia</h3>
          <p>A React project using the OpenDB trivia API and Material-UI.</p>
        </div>
        <div className="project-card">
          <img src="https://img.icons8.com/dotty/148/000000/project.png" />
          <h3>Bootstrap 4</h3>
          <p>
            A project I did following a course online to learn the ins and outs
            of Bootstrap.
          </p>
        </div>
        <div className="project-card">
          <img src="https://img.icons8.com/dotty/148/000000/project.png" />
          <h3>Classy Coffee Company</h3>
          <p>A front-end project with HTML and CSS.</p>
        </div>
      </div>
    </div>
  )
}
