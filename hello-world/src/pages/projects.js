import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Projects() {
  return (
    <div className="page">
      <Header />
      <div className="projects-section">
        <div className="project-card">
          <img
            src="https://i.imgur.com/WUBNWAG.png"
            className="project-card-img"
            alt="web project triiiva"
          />
          <div className="project-description-box">
            <h3>triiivia</h3>
            <p>A React project using the OpenDB trivia API and Material-UI.</p>
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
            <div>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/react-native.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/96/000000/material-ui.png"
                />
              </span>
              <span>
                <img alt="" src="https://img.icons8.com/nolan/64/api.png" />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/96/000000/javascript.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/html-5.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/css3.png"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img
            src="https://i.imgur.com/yuqlaDH.png"
            className="project-card-img"
            alt="web project bootstrap 4"
          />
          <div className="project-description-box">
            <h3>Bootstrap 4</h3>
            <p>
              A project I did following a course online to learn the ins and
              outs of Bootstrap.
            </p>
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
            <div>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/96/000000/bootstrap.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/html-5.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/css3.png"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img
            src="https://i.imgur.com/Hsq49nY.png"
            className="project-card-img"
            alt="web project connect four"
          />
          <div className="project-description-box">
            <h3>Connect Four</h3>
            <p>A React mini app</p>
            <a
              href="https://github.com/AustinAbbott/Connect-Four/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/fluent/96/000000/github.png"
                alt="github"
              />
            </a>
            <div>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/react-native.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/96/000000/javascript.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/html-5.png"
                />
              </span>
              <span>
                <img
                  alt=""
                  src="https://img.icons8.com/color/144/000000/css3.png"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
