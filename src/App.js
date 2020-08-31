import React from 'react'
import './App.css'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'


function App() {
  return (
    <div className="App">
    {/*} <h1 class="display-4" >Welcome! I am Kevin Neyer</h1> */}
      <About />
      <Projects />
      <br/>
      <Contact /><br/>
      <div className="footer">
        <h5> © {new Date().toISOString().substring(0, 4)}  Kevin Neyer </h5>
      </div>
    </div>
  )
}

export default App
