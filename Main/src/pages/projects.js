import React from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"


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
            <p>
              A React project using the OpenDB trivia API and Material-UI. Users
              pick a category, the number of questions to answer, and the level
              of difficulty. Upon submission, the app makes an API request based
              on the users selections and randomizes the question and answer
              data once retrieved. During the game, the app tracks how many
              answers are correct during the round, and provides the results and
              a celebration gif at the end of the game.
            </p>
            <a
              href="https://github.com/AustinAbbott/triiivia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/fluent/96/000000/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://triiivia.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/carbon-copy/100/000000/domain.png"
                alt="website"
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
              A front-end project I did following a course online to learn the
              ins and outs of Bootstrap. Not only did I learn Bootstrap, I
              learned some new front-end best practices!
            </p>
            <a
              href="https://github.com/AustinAbbott/Bootstrap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/fluent/96/000000/github.png"
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/posts/austin-abbott_html5-css3-bootstrap4-activity-6674065844164792320-8SGg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/nolan/96/video.png"
                alt="video link"
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
            <p>
              A React mini app I built to really work my JavaScript knowledge
              (and my brain). On each move, I use JavaScript to check the
              board for wins -- diagonally, vertically, and horizontally. Using
              React's state, I conditionally render the board based on whose
              turn it is and if the round is won or not.
            </p>
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
