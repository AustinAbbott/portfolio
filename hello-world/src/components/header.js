import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <header>
      <Link to="/"><h3>Austin Abbott</h3></Link>
      <nav>
        <Link to="/about" class="nav-button">About</Link>
        <Link to="/contact" class="nav-button">Contact</Link>
      </nav>
    </header>
  )
}
