import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <Link to="/"><h3>Austin Abbott</h3></Link>
      <nav>
        <Link to="/about" class="nav-button"><button>About</button></Link>
        <Link to="/contact" class="nav-button"><button>Contact</button></Link>
      </nav>
    </header>
  )
}
