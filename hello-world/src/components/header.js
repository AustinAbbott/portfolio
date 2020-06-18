import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <header>
      <h3>Header</h3>
      <nav>
        <Link to="/about" class="nav-button">About</Link>
        <Link to="/contact" class="nav-button">Contact</Link>
      </nav>
    </header>
  )
}
