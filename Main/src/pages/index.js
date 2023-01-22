import React from "react"
import Header from "../components/header/header"
import { About } from "../components/about/about"
import { Skills } from "../components/skills/skills"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
      <About />
      <Skills />
      </div>
    </div>
  )
}
