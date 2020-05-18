import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

export default function Header(props) {
  return (
    <AppBar
      position="static"
      style={{ background: "#00a9a6 ", padding: "2em" }}
    >
      <Toolbar>
        <img
          src="https://i.imgur.com/AnqGLXM.jpg"
          style={{ width: "15%", height: "auto", borderRadius: "50%" }}
          alt="Austin Abbott profile"
        ></img>

        <Button>
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
        </Button>
        <Button>
          <Link style={{ color: "white" }} to="/about">
            About
          </Link>
        </Button>
        <Button>
          <Link style={{ color: "white" }} to="/contact">
            Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
