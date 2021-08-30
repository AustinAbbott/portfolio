import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact">
        <div className="contact-icons-grid">
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
              <p>Email</p>
            </a>
          </div>
          <div>
            <a
              href="tel:970-778-9246"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/nolan/64/phone.png"
                alt="phone"
              />
              <p>Phone</p>
            </a>
          </div>
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
              <p>LinkedIn</p>
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
              <p>Github</p>
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vS45gbS6de8z4fJN05C3-smR3uwDhax--q4o26YGDtCtsHEs2XBoR8FNY8mGBdQ0eEsbr5b89phTYmQ/pub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/nolan/64/resume.png"
                alt="resume"
              />
              <p>Resume</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
