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
          <p>
            Hi, I'm Austin Abbott. A former Purchasing Agent, Sales Consultant,
            Automotive Machinist, and Guitar Instructor turned software
            engineer! I have a passion for people, software development, and
            the open web. Below is some of the tech I have used in recent
            projects. If you're looking for a software engineer with experience
            in sales, <Link to="/contact">please reach out</Link>!
          </p>
        </div>
        <div className="tech-stack">
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/react-native.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/javascript.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/html-5.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/css3.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/wired/144/000000/webpack.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/bootstrap.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/material-ui.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/ios-filled/144/000000/jquery.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/fluent/144/000000/visual-studio-code-2019.png"
            />
          </div>
          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/color/144/000000/nodejs.png"
            />
          </div>
          <div className="stack-images">
            <img alt="" src="https://img.icons8.com/color/144/000000/npm.png" />
          </div>

          <div className="stack-images">
            <img
              alt=""
              src="https://img.icons8.com/wired/144/000000/babel.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
