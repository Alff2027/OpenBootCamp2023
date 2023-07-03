import React from 'react'

import { Description, Foot, Social, Link, Img } from './styles'

import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'
 

const Footer = () => {
  return (
    <Foot>
      <Description>
        <Link href='' target="_blank" rel="noopener noreferrer">
        ALFREDO ENCINA  <br/>
        Fullstack Developer
        </Link>
      </Description>
      <Social>
        <Link href='https://www.linkedin.com/in/alfredo-rafael-encina' target="_blank" rel="noopener noreferrer">
          <Img src={linkedin} alt="Linkedin" />
        </Link>
        <Link href='https://github.com/Alff2027' target="_blank" rel="noopener noreferrer">
          <Img src={github} alt='Github'/>
        </Link>
        
      </Social>
  </Foot>
  )
}

export default Footer