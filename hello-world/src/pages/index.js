import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby!" />
      <Footer />
    </div>
  )
}