import React from 'react'
import neyer from './images/neyer.jpeg'
const About = () =>{
  return(
    <div>

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Kevin Neyer</h1>
            <hr class="my-4" />
            <img src={neyer} alt="Kevin Neyer" class="img-thumbnail" style={{width: 200}}/>
            <p class="lead">
              I am a full stack web developer experienced in Ruby and JavaScript based programming. With a background in music and operations, I bring creativity, attention to detail, and collaboration to every project.
              I enjoy problem solving, thinking creatively, and working with others. I look forward to working with you!
            </p>
          </div>
        </div>

    </div>
  )
}

export default About
