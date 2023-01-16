import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { About } from "../components/about"
import { Skills } from "../components/skills"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <div className="page-content">
      <About />
      <Skills />
      </div>
      <Footer />
    </div>
  )
}
