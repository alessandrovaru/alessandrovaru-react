import { useEffect, useState } from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import MandalaButton from '../MandalaButton/MandalaButton';
 
function App() {
  const [start, setStart] = useState(false)
  const [welcome, setWelcome] = useState('')

  const welcomeText = [
  'welkom',
  'welkomma',
  'na gasana',
  'bel bonjou',
  'مرحبا',
  'أهلا وسهلا',
  'ongi etorri',
  'Шчыра запрашаем',
  'swagata',
  'ani kié',
  'dobro došli',
  'degemer mad',
  'добре дошъл',
  'kyo tzo pa eit',
  'tirow',
  'benvinguts',
  'hafa adai',
  'bonavinuta',
  'dobrodošli',
  'vítejte',
  'velkommen',
  'pô la bwam / bepôyédi ba bwam',
  'welkom',
  'welcome',
  'bonvenon',
  'tere tulemast',
  'woezon',
  'vælkomin',
  'tervetuloa',
  'welkom',
  'bienvenue',
  'wolkom',
  'binvignut',
  'awaa waa atuu',
  'benvido',
  'herzlich willkommen',
  'Καλώς ήλθατε (kalos ilthate)',
  'eguahé porá',
  'mikouabô',
  'bienvéni',
  'e komo mai',
  'üdvözlet',
  'velkomin',
  'nnoo / i biala',
  'selamat datang',
  'fáilte',
  'yôkoso',
  'murakaza neza',
  '환영합니다',
  'nodé',
  'bi xer hati',
  'gnindi ton hap',
  'nkuîzulu yambote',
  '(per) gratus mihi venis',
  'laipni lūdzam',
  'benvegnûo / benvegnûi',
  'boyeyi bolamu',
  'sveiki atvykę',
  'welkum',
  'wëllkom',
  'добредојде ',
  'tonga soa',
  'selamat datang',
  'swagatham',
  'merħba',
  'haere mai',
  'kakwa o',
  'miawezon',
  'Тавтай морилогтун',
  'ne y waoongo',
  'namaste',
  'byivenun / la vilkoume',
  'bianvnu',
  'velkommen',
  'benvenguts',
  'velkom',
  'Табуафси (tabuafši)',
  'bon bini',
  'خوش آمدید یا  / خوش اومدی ',
  'witaj',
  'bem-vindo',
  'mishto-avilian tú',
  'bine ai venit',
  'добро пожаловать',
  'afio mai, susu mai ma maliu mai',
  'benènnidu / beni benìu ',
  'fàilte',
  'dobrodošli',
  'karibu',
  'wauya ',
  'bhali karay aaya',
  'aayuboovan',
  'soo dhawaw',
  'bienvenido / bienvenida',
  'wilujeng sumping',
  'karibu / karibuni',
  'välkommen',
  'härzliche wöikomme',
  'maligayang pagdating',
  'maeva / manava',
  'nal-varravu',
  'rahim itegez',
  'swagatham',
  'ยินดีต้อนรับ',
  'tashi delek',
  'malo e lelei',
  'difika dilenga',
  'hoş geldiniz',
  'gazhasa oetiśkom',
  'Ласкаво просимо ',
  'khush amdeed',
  'hush kelibsiz',
  'bénvnou / wilicome',
  'croeso',
  'dalal ak diam',
  'ékouabô / ékabô'
  ]

  useEffect(() => {
    const randomWelcome = () => {
      const randomIndex = Math.floor(Math.random() * welcomeText.length);
      const text = welcomeText[randomIndex]
      setWelcome(text)
    };
    
    setTimeout(() => {
      randomWelcome();
    }, 2000);
  })
  

  return (
    <div className="App">
        <header className="App-header">
          {start ?
            <>
              <MandalaButton/>
            </>
          :
            <>
              <p className='startButton' onClick={()=>setStart(true)}>{welcome}</p>
            </>
          }
        </header>
        <Footer />
    </div>
  );
}

export default App;
