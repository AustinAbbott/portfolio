import React from "react"
import Header from "../components/header"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

export default function Contact() {
  return (
    <div>
      <Header pageTitle="Contact" />
      <div>
        <LinkedInIcon />
      </div>
      <div>
        <GitHubIcon />
      </div>
    </div>
  )
}
