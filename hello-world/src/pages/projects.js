import React from "react"
import Header from "../components/header"
// import Footer from "../components/footer"

export default function Projects() {
  return (
    <div className="page" style={{backgroundColor: "#f2f2f2"}}>
      <Header />
      <p>Below are some of my recent projects.</p>

      <div className="projects-section">
        <div className="project-card">
          <img
            src="https://i.imgur.com/WUBNWAG.png"
            className="project-card-img"
          />
          <h3>triiivia</h3>
          <a
            href="https://github.com/AustinAbbott/triiivia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://triiivia.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/link.png"
              alt="chain-link"
            />
          </a>
          <p>A React project using the OpenDB trivia API and Material-UI.</p>
        </div>

        <div className="project-card">
          <img
            src="https://i.imgur.com/yuqlaDH.png"
            className="project-card-img"
          />
          <h3>Bootstrap 4</h3>
          <a
            href="https://github.com/AustinAbbott/Bootstrap-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/posts/austin-abbott_html5-css3-bootstrap4-activity-6674065844164792320-8SGg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/link.png"
              alt="chain-link"
            />
          </a>
          <p>
            A project I did following a course online to learn the ins and outs
            of Bootstrap.
          </p>
        </div>
        <div className="project-card">
          <img
            src="https://img.icons8.com/dotty/148/000000/project.png"
            className="project-card-img"
          />
          <h3>Classy Coffee Company</h3>
          <p>A front-end project with HTML and CSS.</p>
        </div>
      </div>
    </div>
  )
}
