import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, useState } from 'react'
import logo from '../../logomandala.png';
import styled from "styled-components";

const MandalaContainer = styled.div`
  animation: slideInFromLeft 2s ease-in-out
`;

const MandalaButton = () => {
  const [mandalaClicked, setMandalaClicked] = useState(false)
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
    const songs = ["https://www.youtube.com/watch?v=Z9sliXzD5Jc&ab_channel=DavidDeanBurkhart", "https://www.youtube.com/watch?v=7NSTN2DfJMM&ab_channel=Poncelam", "https://www.youtube.com/watch?v=WPRkIavs1Gk&ab_channel=GallerySessions", "https://jungutah.org/blog/mandalas-symbols-of-the-self-2/", "https://www.youtube.com/watch?v=PLRXzJFAIoM&t=477s&ab_channel=SOLirisTV"]
    const randomIndex = Math.floor(Math.random() * songs.length);
    const item = songs[randomIndex]
    setMandalaClicked(true);
    window.open(item, '_blank');
  }

  return (
    <MandalaContainer>
      <Tilt 
        className="tilt" options={options}
      >
        <img onClick={randomSong} src={logo} className="App-logo" alt="logo" />
        {mandalaClicked && <p>Haz click y descubre algo diferente</p>}
      </Tilt>
    </MandalaContainer>
  )
}

export default MandalaButton