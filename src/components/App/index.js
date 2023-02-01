import { useState } from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import MandalaButton from '../MandalaButton/MandalaButton';
import mand from '../../images/mand1.jpg';
 
function App() {
  const [start, setStart] = useState(false)
  const [welcome, setWelcome] = useState('Bienvenido')

  const welcomeText = [
  'welkom',
  'welkomma',
  'مرحبا',
  'أهلا وسهلا',
  'ongi etorri',
  'Шчыра запрашаем',
  'добре дошъл',
  'velkommen',
  'welkom',
  'welcome',
  'vælkomin',
  'tervetuloa',
  'welkom',
  'bienvenue',
  'wolkom',
  'binvignut',
  'benvido',
  'willkommen',
  'bienvéni',
  'velkomin',
  'murakaza neza',
  '환영합니다',
  'welkum',
  'wëllkom',
  'добредојде ',
  'Тавтай морилогтун',
  'Табуафси',
  'خوش آمدید یا  / خوش اومدی ',
  'witaj',
  'bem-vindo',
  'bine ai venit',
  'добро пожаловать',
  'dobrodošli',
  'välkommen',
  'ยินดีต้อนรับ',
  'Ласкаво просимо '
  ]

  const randomWelcome = () => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * welcomeText.length);
      const text = welcomeText[randomIndex];
      setWelcome(text);
      if (start) {
        randomWelcome();
      }
    }, 2000);
  };


if (!start) {
  randomWelcome();
}
  

  return (
    <div className="App">
      <img alt='mandala' className='app-background-image' src={mand}/>
        <header className="App-header">
          {start ?
            <>
              <MandalaButton/>
            </>
          :
            <>
              <h2 className='startButton' onClick={()=>setStart(true)}>{welcome}</h2>
            </>
          }
        </header>
        <Footer />
    </div>
  );
}

export default App;
