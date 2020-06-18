import React from "react"
import Header from "../components/header"
// import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div style={{textAlign: "center"}}>
        <p>Home</p>
        <p>Profile photo here</p>
        <div class="tech-stack">

          <div class="stack-images">
            <img src="https://img.icons8.com/color/144/000000/javascript.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/color/144/000000/html-5.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/color/144/000000/css3.png" />
          </div>
          <div class="stack-images">
          <img src="https://img.icons8.com/color/144/000000/react-native.png"/>
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/color/144/000000/bootstrap.png" />
          </div>
          <div class="stack-images"> 
            <img src="https://img.icons8.com/color/144/000000/material-ui.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/ios-filled/144/000000/jquery.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/fluent/144/000000/visual-studio-code-2019.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/color/144/000000/nodejs.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/color/144/000000/npm.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/wired/144/000000/webpack.png" />
          </div>
          <div class="stack-images">
            <img src="https://img.icons8.com/wired/144/000000/babel.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
