import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <div>
        <div className="about-box">
          <h3>Hi, I'm Austin Abbott.</h3>
          <p>
            I'm a Software Engineer working in Fintech with experience in
            JavaScript, React, Material-UI, HTML, CSS, Node, Express, and
            PostgreSQL.
          </p>
        </div>
        <h3 style={{ fontSize: "1.75em" }}>Software Skills</h3>
        <div className="tech-stack">
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/javascript.png"
            />
            <p>JavaScript</p>
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/html-5.png"
            />
            <p>HTML5</p>
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/css3.png"
            />
            <p>CSS3</p>
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/react-native.png"
            />
            <p>React</p>
          </div>

          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/bootstrap.png"
            />
            <p>Bootstrap</p>
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/material-ui.png"
            />
            <p>Material UI</p>
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/ios-filled/144/000000/jquery.png"
            />
            <p>jQuery</p>
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/nodejs.png"
            />
            <p>Nodejs</p>
          </div>
          <div className="stack-images">
            <img alt="" src="https://img.icons8.com/color/144/000000/npm.png" />
            <p>npm</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
