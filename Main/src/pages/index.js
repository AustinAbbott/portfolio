import React from "react"
import Header from "../components/header/header"
import { About } from "../components/about/about"
import { Skills } from "../components/skills/skills"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
        <div>
          <u>
            I'm migrating my website. V2 (built with{" "}
            <a href="https://astro.build/">Astro</a>) coming soon!
          </u>
        </div>
        <About />
        <Skills />
      </div>
    </div>
  )
}
