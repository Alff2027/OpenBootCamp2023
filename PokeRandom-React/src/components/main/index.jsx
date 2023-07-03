import React, { useState, useEffect } from 'react'
import { Main, Container, Figure, Name, Img, Data, PokeButton, CardContainer, DataContainer, ButtonContainer } from './styles';

const PokeData = () => {
  const [Pokemon, setPokemon] = useState({})
  const [Loading, setLoading] = useState(true)

  const pokeRandom = async () => {
    try{
      setLoading(true)

      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807) + 1}`)
      const Pokemon = await data.json()

      setPokemon(Pokemon)
      setLoading(false)

    } catch (error) {
      console.error(error)
    }
  }

  
  useEffect(() =>{
    pokeRandom()
  },[])
  
  const onChange = () => {
    pokeRandom()
  }

  return (
    <Container>
      <Main>
        {
          Loading
            ?
            <CardContainer>
                <Name>Loading...</Name>
            </CardContainer>
            : 
            <CardContainer>
              <Name>{Pokemon.name}</Name>
              <Figure>
              <Img src={Pokemon.sprites.front_default} alt={Pokemon.name}/>
              </Figure>
                <DataContainer>
                  <Data>Pokemon Numero: {Pokemon.id}</Data>
                  <Data>Tipo principal: {Pokemon.types[0].type.name}</Data>
                  {
                    Pokemon.types[1]  
                    ? <Data>Tipo secundario: {Pokemon.types[1].type.name}</Data>
                    : null
                  }
                  <Data>Peso: {Pokemon.weight / 10}kg</Data>
                  <Data>Altura: {Pokemon.height / 10}m</Data>
                </DataContainer>
              </CardContainer>
        }
          <ButtonContainer>
            <PokeButton onClick={() => onChange()}>¡PokeRandom!</PokeButton>
          </ButtonContainer>
      </Main>
    </Container>
  )
}

export default PokeData