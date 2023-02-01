import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, useState } from 'react'
import logo from '../../logomandala.png';

import styled from "styled-components";
import { Alert } from '../Alert';

const MandalaContainer = styled.div`
  animation: slideInFromLeft 2s ease-in-out;
  .tilt{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center
  }
`;



const MandalaButton = () => {
  const [mandalaClicked, setMandalaClicked] = useState(false)
  const [poemClicked, setPoemClicked] = useState(false);
  const [acceptedLink, setAcceptedLink] = useState(false)

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
  const randomLink = () => {
    const links = [
                    "https://www.tdx.cat/bitstream/handle/10803/462856/tae.pdf", 
                    "http://www.instituto-integra.com/wp-content/uploads/2017/05/el_libro_rojo_jung_carl_gustav.pdf", 
                    "https://www.youtube.com/watch?v=Z9sliXzD5Jc&ab_channel=DavidDeanBurkhart", 
                    "https://www.youtube.com/watch?v=WPRkIavs1Gk&ab_channel=GallerySessions", 
                    "https://jungutah.org/blog/mandalas-symbols-of-the-self-2/", 
                    "https://www.youtube.com/watch?v=PLRXzJFAIoM&t=477s&ab_channel=SOLirisTV",
                    "https://www.youtube.com/watch?v=bs3HK3pxVAY&list=PLuyJdbBL2WAkLIwpzmGK8gvKumPhoutjE&index=1&ab_channel=TheIntrovertedThinker"
                  ];
      const randomIndex = Math.floor(Math.random() * links.length);
      const item = links[randomIndex];
      setPoemClicked(false);
      setMandalaClicked(false);
      window.open(item, '_blank');
  }

  const mandalaClick = () => {
    setMandalaClicked(true);
  };

  useEffect(() => {
    if (acceptedLink) {
      randomLink();
    }
  }, [acceptedLink])
  

  return (
    <MandalaContainer>
      <Tilt className="tilt" options={options}>
        
        {mandalaClicked ?
          <>
            <Alert setMandalaClicked={setMandalaClicked} setAcceptedLink={setAcceptedLink} />
          </>
        :
          <>
            <img onClick={mandalaClick} src={logo} className="App-logo" alt="logo" />
          </>
        }
        {/* <>
            {!poemClicked ?
              <>
                <MandalaPoemButton onClick={()=>{setPoemClicked(true); setMandalaClicked(false)}}>Primer Mandala</MandalaPoemButton>
              </>
            :
              <>
                <Poem randomLink={randomLink}/>
              </>
            }
        </> */}
      </Tilt>
    </MandalaContainer>
  )
}

export default MandalaButton