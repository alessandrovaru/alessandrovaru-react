import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, useState } from 'react'
import logo from '../../logomandala.png';
import styled from "styled-components";

const MandalaContainer = styled.div`
  animation: slideInFromLeft 2s ease-in-out
`;

const MandalaPoemButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-family: 'Questrial';
  transition: all .3s ease-in-out;
  &:hover {
    background-color: white;
    color: black
  }
`

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

const MandalaButton = () => {
  const [mandalaClicked, setMandalaClicked] = useState(false)
  const [poemClicked, setPoemClicked] = useState(false)
  // Tilt function
  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
    useEffect(() => {
      if (!navigator.userAgent.match(/iPhone/i)) {
        VanillaTilt.init(tilt.current, options);
      }
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  // Tilt Options
  const options = {
    speed: 1000,
    max: 30
  };
  //Random Link
  const randomSong = () => {
    const songs = ["https://www.tdx.cat/bitstream/handle/10803/462856/tae.pdf", "http://www.instituto-integra.com/wp-content/uploads/2017/05/el_libro_rojo_jung_carl_gustav.pdf", "https://www.youtube.com/watch?v=Z9sliXzD5Jc&ab_channel=DavidDeanBurkhart", "https://www.youtube.com/watch?v=7NSTN2DfJMM&ab_channel=Poncelam", "https://www.youtube.com/watch?v=WPRkIavs1Gk&ab_channel=GallerySessions", "https://jungutah.org/blog/mandalas-symbols-of-the-self-2/", "https://www.youtube.com/watch?v=PLRXzJFAIoM&t=477s&ab_channel=SOLirisTV"]
    const randomIndex = Math.floor(Math.random() * songs.length);
    const item = songs[randomIndex]
    setMandalaClicked(true);
    setPoemClicked(false);
    window.open(item, '_blank');
  }

  return (
    <MandalaContainer>
      <Tilt 
        className="tilt" options={options}
      >
        <img onClick={randomSong} src={logo} className="App-logo" alt="logo" />
        {!mandalaClicked &&
          <>
            {!poemClicked &&
              <>
                <h6>Haz click y vuelve cuando quieras</h6>
              </>
            }
          </>
        }
        {mandalaClicked && 
          <>
            <h6>Haz click y descubre algo diferente</h6>
            <MandalaPoemButton onClick={()=>{setPoemClicked(true); setMandalaClicked(false)}}> o lee un poema</MandalaPoemButton>
          </>
        }
        {poemClicked && 
          <PoemContainer>
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
        }
      </Tilt>
    </MandalaContainer>
  )
}

export default MandalaButton