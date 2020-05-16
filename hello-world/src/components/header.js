import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div class="header">
      <a href="#default" class="logo">
        My Logo
      </a>
      <div class="header-right">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}
