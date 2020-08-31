import React from 'react'
import Github from './images/Github.png'
import LinkedIn from './images/LinkedIn.png'
import Medium from './images/Medium.png'

const Contact = () => {
  return(

    <div className='links'>
      <a className='link' href='https://github.com/kevinneyer' target="_blank"><img width='37px' src={Github} alt='Github logo' /></a>
      <a className='link' href='https://www.linkedin.com/in/kevin-neyer-02331665/' target="_blank"><img width='40.5px' src={LinkedIn} alt='LinkedIn logo' /></a>
      <a className='link' href='https://medium.com/@kevinneyer' target="_blank"><img width='34.5px' src={Medium} alt='Medium logo' /></a>
    </div>

  )
}

export default Contact
