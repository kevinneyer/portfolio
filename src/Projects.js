import React from 'react'
import bierShot from './images/bierShot.png'

const Projects = () =>{
  return(
    <>
      <h1>Projects</h1>
      <div className='projectCards'>
        <div class="card" style={{width: '20em'}}>
          <img src={bierShot} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Biergarten</h5>
            <p class="card-text">Social Media Beer Passport.</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="https://www.youtube.com/watch?v=gOuxuEROFxU" class="btn btn-primary">Check out the demo!</a>
              <a href="https://github.com/kevinneyer/biergarten-front-end/tree/master/biergarten-client" class="btn btn-secondary">See the code!</a>
            </div>
            </div>
          </div>

        <div  class="card" style={{width: '20em'}}>
          <img src={null} class="card-img-top" alt="The Divebar"/>
          <div class="card-body">
            <h5 class="card-title">The Divebar</h5>
            <p class="card-text">Create or Review a 3 Ingredient Cocktail</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="" class="btn btn-primary">Check out the demo!</a>
              <a href="" class="btn btn-secondary">See the code!</a>
            </div>
          </div>
        </div>

        <div  class="card" style={{width: '20em'}}>
          <img src={null} class="card-img-top" alt="Purrever Home"/>
          <div class="card-body">
            <h5 class="card-title">Purrever Home</h5>
            <p class="card-text">Check out what cats are up for adoption!</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <a href="" class="btn btn-primary">Check out the demo!</a>
              <a href="" class="btn btn-secondary">See the code!</a>
            </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default Projects
