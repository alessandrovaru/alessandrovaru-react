import logo from './logomandala.png';
import './App.css';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react'
import Footer from './components/Footer/Footer';
 

function App() {
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
  const options = {
    speed: 1000,
    max: 30
  };
  

  const randomSong = () => {
    const songs = ["https://www.youtube.com/watch?v=7NSTN2DfJMM&ab_channel=Poncelam", "https://www.youtube.com/watch?v=WPRkIavs1Gk&ab_channel=GallerySessions"]
    const randomIndex = Math.floor(Math.random() * songs.length);
    const item = songs[randomIndex]
    console.log(item);
  }
  
 
  return (
    <div className="App">
        <header className="App-header">
          <Tilt 
            className="tilt" options={options}
          >
            <img onClick={randomSong} src={logo} className="App-logo" alt="logo" />
          </Tilt>
        </header>
        <Footer />
    </div>
  );
}

export default App;
