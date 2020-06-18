import React from "react"
import Header from "../components/header"
// import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div>
        <p>Home</p>

        <div class="tech-stack">
          <div>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              style={{ width: "10%" }}
            />
          </div>
          <div>
            <img src="https://img.icons8.com/color/144/000000/javascript.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/144/000000/html-5.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/144/000000/css3.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/144/000000/bootstrap.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/144/000000/material-ui.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/fluent/144/000000/visual-studio-code-2019.png" />
          </div>
          <div>
          <img src="https://img.icons8.com/color/144/000000/nodejs.png"/>
          </div>
          <div>
          <img src="https://img.icons8.com/color/144/000000/npm.png"/>
          </div>
          <div>
          <img src="https://img.icons8.com/ios-filled/144/000000/jquery.png"/>
          </div>
          <div>
          <img src="https://img.icons8.com/wired/144/000000/webpack.png"/>
          </div>
          <div>
          <img src="https://img.icons8.com/wired/144/000000/babel.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}
