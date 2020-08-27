import React from 'react'
import './App.css'
import About from './About.js'
import Projects from './Projects.js'
import Github from './images/Github.png'
import LinkedIn from './images/LinkedIn.png'
import Medium from './images/Medium.png'

function App() {
  return (
    <div className="App">
      <h1 class="display-4" >Welcome! I am Kevin Neyer</h1>
      <About />
      <Projects />
        <div className='links'>
          <a className='link' href='https://github.com/kevinneyer' target="_blank"><img width='37px' src={Github} alt='Github logo' /></a>
          <a className='link' href='https://www.linkedin.com/in/kevin-neyer-02331665/' target="_blank"><img width='40.5px' src={LinkedIn} alt='LinkedIn logo' /></a>
          <a className='link' href='https://medium.com/@kevinneyer' target="_blank"><img width='34.5px' src={Medium} alt='Medium logo' /></a>
        </div>
    </div>
  )
}

export default App
