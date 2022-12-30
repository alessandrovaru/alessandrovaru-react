import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import MandalaButton from './components/MandalaButton/MandalaButton';
 
function App() {
  const [start, setStart] = useState(false)

  return (
    <div className="App">
        <header className="App-header">
          {start ?
            <>
              <MandalaButton/>
            </>
          :
            <>
              <p className='startButton' onClick={()=>setStart(true)}>descubre algo aquí</p>
            </>
          }
        </header>
        <Footer />
    </div>
  );
}

export default App;
