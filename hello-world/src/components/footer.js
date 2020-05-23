import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
// import Link from "@material-ui/core/Link"

export default function Footer(props) {
  return (
    <div id="footer">
      <footer>
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/austin-abbott/"
          target="blank_"
        >
          <LinkedInIcon style={{ padding: "0.30em" }} />
        </a>
        <a
          style={{ color: "white" }}
          href="https://github.com/AustinAbbott/"
          target="blank_"
        >
          <GitHubIcon style={{ padding: "0.30em" }}/>
        </a>
      </footer>
    </div>
  )
}
