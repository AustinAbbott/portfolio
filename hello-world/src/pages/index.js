import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <div>
        <div className="about-box">
          <h3>Hi, I'm Austin Abbott.</h3>
          <p>
            I'm a software engineer with a passion for the open web (Mozilla,
            Open Whisper Systems, DuckDuckGo). Formerly a Purchasing Agent,
            Sales Consultant, Automotive Machinist, and Guitar Instructor, I
            discovered software when I started building WordPress websites for
            small businesses and non-profits as a side-hustle. <br />
            <br />
            I then decided to attend Hack Reactor in Boulder, CO, to gain
            hands-on experience pair programming, learning the fundamentals of
            computer science, and building full-stack web applications. Since
            completing Hack Reactor, I have been building web apps left and
            right, honing my software skills.
            <br />
            <br />
            When I'm not coding, I derive great pleasure from reading, playing
            one of my 9 guitars, and expressing myself through music.
            <br />
            <br />
            If you're looking for a software engineer with a sense of humor,
            love for music, and a can-do attitude{" "}
            <Link to="/contact">please reach out</Link>!
          </p>
        </div>
        <h3 style={{ fontSize: "1.75em" }}>Software Skills</h3>
        <div className="tech-stack">
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
              src="https://img.icons8.com/wired/144/000000/webpack.png"
            />
            <p>Webpack</p>
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
              src="https://img.icons8.com/fluent/144/000000/visual-studio-code-2019.png"
            />
            <p>Visual Studio Code</p>
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

          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/wired/144/000000/babel.png"
            />
            <p>Babel</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
