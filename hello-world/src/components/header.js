import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <header>
        <Link to="/">
          <div>
            <img
              src="https://i.imgur.com/AnqGLXM.jpg?1"
              alt="Austin Abbott profile"
            />
          </div>
        </Link>
        <nav>
          <Link
            to="/"
            className="nav-button"
            activeClassName="nav-button-active"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="nav-button"
            activeClassName="nav-button-active"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="nav-button"
            activeClassName="nav-button-active"
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  )
}
