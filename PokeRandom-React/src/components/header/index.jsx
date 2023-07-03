import React from 'react'
import PokeLogo from '../../images/PokeRandom.png'
import { Container, Figure, Img } from './styles'

const Header = () => {
  return (
    <Container>
      <Figure>
        <Img src={PokeLogo} alt='logo'/>
      </Figure>
    </Container>
  )
}

export default Header