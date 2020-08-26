import React from 'react'
import './App.css'
import About from './About.js'
import Projects from './Projects.js'
import Github from './images/Github.png'

function App() {
  return (
    <div className="App">
      <h1>Welcome! I am Kevin Neyer</h1>
      <About />
      <Projects />
      <a href='https://github.com/kevinneyer' target="_blank"><img src={Github} alt='Github logo' /></a>
    </div>
  )
}

export default App
