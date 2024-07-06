import './CSS/App.css';
import { useState,useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

//Photos
import catamaran from '../catamaran.svg';
import video from '../video.mp4';
import bahia from '../photos/homepage/kata1.jpeg';
import lagoon from '../photos/homepage/kata2.jpg';
import scroll1 from '../photos/homepage/scroll1.jpg';
import scroll2 from '../photos/homepage/scroll2.jpg';
import scroll3 from '../photos/homepage/scroll3.jpg';
import scroll4 from '../photos/homepage/scroll4.jpg';
import scroll5  from '../photos/homepage/scroll5.jpg';
import squad1 from '../photos/homepage/squad1.jpg';
import squad2 from '../photos/homepage/squad2.jpg';
import squad3 from '../photos/homepage/squad3.jpg';
import squad4 from '../photos/homepage/squad4.jpg';
import squad5 from '../photos/homepage/squad5.jpg';

function App() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

  }, );

  return (
    <div className='App'>
      <Navbar site={'sg'}/>
      <div className='video-background'>
        <video autoPlay loop muted>
          <source src={video} type='video/mp4'/>
          Your browser does not support the video tag.
        </video>
        <div className={`slideOutLeft ${scrolled ? 'animated' : 'slideInLeft animated'} bookmark`}>
          <div className='bookmark-start'></div>
          <div className='parallelogram'></div>
          <div className='bookmark-end'>
            <div className={`big-logo-container ${scrolled ? 'scrolled' : ''}`}>
              <div className={`big-logo-container2 ${scrolled ? 'scrolled' : ''}`}>
                <p className={`big-logo1 ${scrolled ? 'scrolled' : ''}`}>Caribbean</p>
                <img src={catamaran} alt="Logo" className={`big-logoimg ${scrolled ? 'scrolled' : ''}`}/>
                <p className={`big-logo2 ${scrolled ? 'scrolled' : ''}`}>Dream</p>
              </div>
            </div>
          </div>
        </div>
        <h1>Wycieczki Katamaranem</h1>
        <h2>Żegluj z nami w rytmie Karaibów – Katamaranowe <br/> Przygody pełne słońca i morskich emocji!</h2>
        <button className='video-button'>
          Zobacz ofertę
        </button>
        <p className='copyright' style={{ right: '2px' }}>© Boss Talk Productions</p>
      </div>
      <div className='photo-frame'>
        <div className='scroll-frame'>
          <img className='scroll-photo' src={scroll1} alt='Bahia 46'></img>
          <img className='scroll-photo' src={scroll2} alt='Bahia 46'></img>
          <img className='scroll-photo' src={scroll3} alt='Bahia 46'></img>
          <img className='scroll-photo' src={scroll4} alt='Bahia 46'></img>
          <img className='scroll-photo' src={scroll5} alt='Bahia 46' style={{marginRight: '50px'}}></img>
        </div>
        <div className='button-div'>
          <button className='gallery-button'>
            Galeria zdjęć
          </button>
        </div>
      </div>
      <p className='title'>Nasze Katamarany</p>
      <div className='underline-box'>
        <div className='underline1'></div>
        <div className='underline2'></div>
      </div>
      <div className='kata-container' style={{justifyContent: 'right'}}>
        <div className= "kata1">
          <div className='katacontainer'>
            <img className='kataphoto1' src={bahia} alt='Bahia 46'></img>
            <p className='copyright' style={{ left: '2%' }}>© Znajdz zdjecie</p>
          </div>
          <div className='katatextbox'>
            <span className='katatitle'>Bahia 46, S/Y "BAJKA"</span>
            <div className='katatextcontainer'>
              <span className='katatext'>Katamaran Bahia 46 to wygodny i przestronny katamaran, który został zaprojektowany tak, aby zapewnić załodze najwyższy komfort. Jest zbudowany z najwyższej jakości materiałów, co czyni go jednym z najbardziej niezawodnych jachtów w swojej klasie. Wygląd zewnętrzny katamaranu charakteryzuje się eleganckimi i nowoczesnymi, jak na swoje czasy liniami, a wnętrze zapewnia mnóstwo miejsca na relaks i rozrywkę.
              </span>
            </div> 
          </div>
        </div>
      </div>
      
      <div className='kata-container'>
        <div className= "kata2">
          <div className='katatextbox'>
            <span className='katatitle'>Lagoon 42, S/Y "LITTLE CLOUD"</span>
            <div className='katatextcontainer'>
              <span className='katatext'>Lagoon 42 może poszczycić się piękną sylwetką i nienaganną linią kadłuba, zachowuje idealne proporcje pomiędzy komfortem, a właściwościami nautycznymi. Wnętrze jachtu jest idealnie doświetlone za sprawą dużych, panoramicznych okien, które gwarantują także doskonałą widoczność podczas żeglugi. Kokpit Lagoon 42 oferuje załodze tyle miejsca, co na znacznie większych jednostkach.
              </span>
            </div>
          </div>
          <div className='katacontainer'>
            <img className='kataphoto2' src={lagoon} alt='Lagoon 42'></img>
            <p className='copyright' style={{ right: '1%' }}>© Znajdz zdjecie</p>
          </div>
        </div>
      </div>
      <p className='title'>Poznaj naszą ekipę!</p>
      <div className='underline-box'>
        <div className='underline1' style={{width: '550px'}}></div>
        <div className='underline2' style={{width: '460px'}}></div>
      </div>
      <div className='squad'>
        <div className='squad-container'>
          <div className='squad-card' style={{marginLeft: '30px'}}>
            <img className='squad-img' src={squad1} alt='Jan Kowalski / Kapitan'></img>
            <p className='copyright' style={{ right: '0', top: '58%', fontSize: '10px' }}>Unsplash / Sander Lenaerts</p>
            <span className='squad-name'>Jan Kowalski</span>
            <span className='squad-title'>Kapitan</span>
          </div>
          <div className='squad-card'>
            <img className='squad-img' src={squad3} alt='Andrzej Kos / Kapitan'></img>
            <p className='copyright' style={{ right: '0', top: '58%', fontSize: '10px' }}>Unsplash / Ivan Lapyrin</p>
            <span className='squad-name'>Andrzej Kos</span>
            <span className='squad-title'>Kapitan</span>
          </div>
          <div className='squad-card'>
            <img className='squad-img' src={squad2} alt='Sandra Mróz / Pilot'></img>
            <p className='copyright' style={{ right: '0', top: '58%', fontSize: '10px' }}>Unsplash / Marie Bouchart</p>
            <span className='squad-name'>Sandra Mróz</span>
            <span className='squad-title'>Pilot</span>
          </div>
          <div className='squad-card'>
            <img className='squad-img' src={squad4} alt='Paweł Dręda / Przewodnik'></img>
            <p className='copyright' style={{ right: '0', top: '58%', fontSize: '10px' }}>Unsplash / Alicia Steels</p>
            <span className='squad-name'>Paweł Dręda</span>
            <span className='squad-title'>Przewodnik</span>
          </div>
          <div className='squad-card'style={{marginRight: '30px'}}>
            <img className='squad-img' src={squad5} alt='Wiktor Marzec / Kierownik biura'></img>
            <p className='copyright' style={{ right: '0', top: '58%', fontSize: '10px' }}>Unsplash / Dragos Gontariu</p>
            <span className='squad-name'>Wiktor Marzec</span>
            <span className='squad-title'>Kierownik biura</span>
          </div>  
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
