import styled from 'styled-components';

export const Main = styled.main`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  height: 76vh;
  width: 100%;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (max-width: 480px) {
    height: 450px;
  }
`

export const CardContainer = styled.div`
  min-height: 250px;
  width: 90%;
  max-width: 450px;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 10px 13px -7px #000000;
`

export const Name = styled.h3`
  text-transform: capitalize;
  text-align: center;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 15px;
  margin-bottom: 5px;
`

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #CCCCCC;
`

export const Img = styled.img`
  max-height: 96px;
  width: 96px;
`

export const DataContainer = styled.div`
margin-top: 10px;
`

export const Data = styled.p`
  text-transform: capitalize;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.8rem;
  margin-bottom: 5px;
  font-weight: 500;
`
export const ButtonContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const PokeButton = styled.button`
  height: 40px;
  width: 50%;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 0px 10px 13px -7px #000000;
  font-weight: bold;
  cursor: pointer;
  &:active {
    background-color: rgba(54, 94, 170, .2);
  }
`