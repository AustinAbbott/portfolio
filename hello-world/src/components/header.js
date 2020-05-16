import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div class="header">
      <Link to="/">My Logo</Link>
      <div class="header-right">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}
