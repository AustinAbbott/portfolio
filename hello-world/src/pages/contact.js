import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Contact() {
  return (
    <div className="page">
      <Header />
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/austin-abbott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icons"
            src="https://img.icons8.com/nolan/64/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/austinabbott"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icons"
            src="https://img.icons8.com/nolan/64/github.png"
            alt="github"
          />
        </a>
        <a
          href="mailto:austin.abbott.works@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icons"
            src="https://img.icons8.com/nolan/64/email.png"
            alt="email"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            className="icons"
            src="https://img.icons8.com/nolan/64/resume.png"
            alt="resume"
          />
        </a>
      </div>
      <Footer />
    </div>
  )
}
