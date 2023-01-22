import React from "react"
import Header from "../components/header/header"

export default function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact">
        <div className="contact-icons-grid">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
