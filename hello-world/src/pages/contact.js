import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Contact() {
  return (
    <div className="page">
      <Header />
      <div className="panel-container">
        <div className="left-panel">
          {/* <a
            href="https://www.linkedin.com/in/austin-abbott/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/austinabbott"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="github"
            />
          </a> */}
          <img src="https://images.unsplash.com/photo-1502318217862-aa4e294ba657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80"></img>
        </div>
        <div className="right-panel">
          <img src="https://i.imgur.com/pUdHO01.jpg"></img>
          <p>I smile, because if I don't, I'll cry.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
