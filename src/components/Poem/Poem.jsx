import styled from "styled-components";
import mand from '../../images/mand1.jpg';

const PoemContainer = styled.div`
  animation: slideInFromLeft 2s ease-in-out;
  p{
    font-family:'Questrial';
    font-size: 16px;
  }
  h1{
    font-size: 12px
  }
  a{
    text-decoration: none;
    color: white
  }
  a:hover{
    text-decoration: none;
    color: gray
  }
  @media only screen and (max-width: 900px) {
    p{
      font-family:'Questrial';
      font-size: 10px;
    }
    h1{
      font-size: 8px
    }
    h2{
      font-size: 18px
    }
  }
`
const Poem = (randomLink) => {
  return (
    <PoemContainer>
      <img onClick={randomLink} src={mand} className="App-logo" alt="logo" />
      <h2>Nausea Ansiosa</h2>
      <p>Estuvo aquí dentro de mí en todo momento.</p>
      <p>Un nudo en la garganta, que no puedo evitar,</p>
      <p>que me deja sin aire, sin salir mi lamento;</p>
      <p>y se siente como una nausea ansiosa</p>
      <p>que siempre me acompaña al despertar.</p>  
      <br></br>
      <p>La intento soltar, pero vuelve dentro de mí.</p>
      <br></br>
      <a href="https://instagram.com/alessandrovaru" target="_blank" rel="noreferrer"><h1>ALESSANDROVARU</h1></a>
    </PoemContainer>
  )
}

export default Poem