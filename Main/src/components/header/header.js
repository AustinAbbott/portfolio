import React from "react"
import { Link } from "gatsby"
import './header.css'

export default function Header() {
  return (
    <div>
      <header>
        <div className="profile-picture">
          <Link to="/">
            <img
              src="https://i.imgur.com/AnqGLXM.jpg?1"
              alt="Austin Abbott profile"
            />
          </Link>
        </div>
        <nav>
          <span>
            <Link
              to="/"
              className="nav-button"
              activeClassName="nav-button-active"
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              to="/projects"
              className="nav-button"
              activeClassName="nav-button-active"
            >
              Projects
            </Link>
          </span>
          <span>
            <Link
              to="/contact"
              className="nav-button"
              activeClassName="nav-button-active"
            >
              Contact
            </Link>
          </span>
        </nav>
      </header>
    </div>
  )
}
