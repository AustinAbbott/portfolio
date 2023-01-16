import React from "react"
import './footer.css'

export default function Footer() {
  return (
    <div id="footer">
      <footer>
        <div>
          <a
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
          </a>
        </div>
        <div>
          <p>
            Built By Autin Abbott using GatsbyJS
          </p>
        </div>
      </footer>
    </div>
  )
}
