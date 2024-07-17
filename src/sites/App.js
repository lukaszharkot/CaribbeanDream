import './CSS/App.css';
import { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

//Video and catamarans
import catamaran from '../catamaran.svg';
import video from '../video.mp4';
import bahia from '../photos/homepage/kata1.jpg';
import lagoon from '../photos/homepage/kata2.jpg';

//Scroll-frame photos
import scroll1 from '../photos/homepage/scroll1.jpg';
import scroll2 from '../photos/homepage/scroll2.jpg';
import scroll3 from '../photos/homepage/scroll3.jpg';
import scroll4 from '../photos/homepage/scroll4.jpg';
import scroll5  from '../photos/homepage/scroll5.jpg';
import scroll6  from '../photos/homepage/scroll6.jpg';
import scroll7  from '../photos/homepage/scroll7.jpg';

//Squad photos
import squad1 from '../photos/homepage/squad1.jpg';
import squad2 from '../photos/homepage/squad2.jpg';
import squad3 from '../photos/homepage/squad3.jpg';
import squad4 from '../photos/homepage/squad4.jpg';
import squad5 from '../photos/homepage/squad5.jpg';

function App() {

  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const scrollFrameRef = useRef(null);

  let leftArrowClass = 'left-arrow';
  let rightArrowClass = 'right-arrow';


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (imagesLoaded === 7) { // Update the number based on the total images to load
      if (scrollFrameRef.current) {
        const scrollFrame = scrollFrameRef.current;
        setMaxScrollLeft(scrollFrame.scrollWidth - scrollFrame.clientWidth);
      }
    }
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const handleScrollRight = () => {
    if (scrollFrameRef.current) {
      const scrollFrame = scrollFrameRef.current;
      const maxScrollLeft = scrollFrame.scrollWidth - scrollFrame.clientWidth;
      const newScrollPosition = Math.min(scrollPosition + 450, maxScrollLeft);
      setScrollPosition(newScrollPosition);
      scrollFrame.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollFrameRef.current) {
      const newScrollPosition = Math.max(scrollPosition - 450, 0);
      setScrollPosition(newScrollPosition);
      scrollFrameRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  if (scrollPosition === 0) {
    leftArrowClass = 'left-a';
  }

  if (scrollPosition >= maxScrollLeft) {
    rightArrowClass = 'right-a';
  }


  return (
    <div className='App'>
      <Navbar site={'sg'}/>
      <div className='video-background'>
        <video autoPlay loop muted>
          <source src={video} type='video/mp4'/>
          Your browser does not support the video tag.
        </video>
        <div className={`bookmark ${scrolled ? 'scrolled' : ''}`}>
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
        <a href='/oferta'><button className='video-button'>
          Zobacz ofertę
        </button></a>
        <p className='copyright' style={{ right: '1%' }}>© Boss Talk Productions</p>
      </div>
      <div className='photo-frame'>
        <div className={rightArrowClass} onClick={handleScrollRight}>
          <div className='arrow-div'>
            <div className='arrow-x1'></div>
            <div className='arrow-x2'></div>
          </div>
        </div>
        <div className={leftArrowClass} onClick={handleScrollLeft}>
          <div className='arrow-div'>
            <div className='arrow-x1' style={{bottom: '62%'}}/>
            <div className='arrow-x2' style={{bottom: '0px'}}/>
          </div>
        </div>
        <div className='scroll-frame' ref={scrollFrameRef}>
          <img className='scroll-photo' onLoad={handleImageLoad} src={scroll1} alt='Bahia 46' style={{marginLeft: '50px'}}></img>
          <img className='scroll-photo' onLoad={handleImageLoad} src={scroll2} alt='Bahia 46'></img>
          <img className='scroll-photo' onLoad={handleImageLoad} src={scroll3} alt='Bahia 46'></img>
          <img className='scroll-photo' onLoad={handleImageLoad} src={scroll4} alt='Bahia 46'></img>
          <img className='scroll-photo' onLoad={handleImageLoad} src={scroll5} alt='Unsplash / Christian Lendl'></img>
          <img className='scroll-photo' onLoad={handleImageLoad} src={scroll6} alt='Bahia'></img>
          <img className='scroll-photo' onLoad={handleImageLoad} src={scroll7} alt='Unsplash / Fadi Al Shami' style={{marginRight: '50px'}}></img>
        </div>
        <div className='button-div'>
          <a href='/galeria'><button className='gallery-button'>
            Galeria zdjęć
          </button></a>
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
            <img className='kataphoto1' src={bahia} alt='Bahia 46' title='Photo by Miquel Gelabert on Unsplash'></img>
          </div>
          <div className='katatextbox'>
            <span className='katatitle'>Bahia 46, S/Y "BAJKA"</span>
            <div className='katatextcontainer'>
              <span className='katatext'>Katamaran Bahia 46 to wygodny i przestronny katamaran, który został zaprojektowany tak, aby zapewnić załodze najwyższy komfort. Jest zbudowany z najwyższej jakości materiałów, co czyni go jednym z najbardziej niezawodnych jachtów w swojej klasie. Wygląd zewnętrzny katamaranu charakteryzuje się eleganckimi i nowoczesnymi, jak na swoje czasy liniami, a wnętrze zapewnia mnóstwo miejsca na relaks i rozrywkę.
              </span>
            </div> 
          </div>
        </div>
        <div className='filler'></div>
      </div>
      
      <div className='kata-container'>
        <div className='filler' style={{marginTop: '100px', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}></div>
        <div className= "kata2">
          <div className='katatextbox'>
            <span className='katatitle'>Lagoon 42, S/Y "ARIA"</span>
            <div className='katatextcontainer'>
              <span className='katatext'>Lagoon 42 może poszczycić się piękną sylwetką i nienaganną linią kadłuba, zachowuje idealne proporcje pomiędzy komfortem, a właściwościami nautycznymi. Wnętrze jachtu jest idealnie doświetlone za sprawą dużych, panoramicznych okien, które gwarantują także doskonałą widoczność podczas żeglugi. Kokpit Lagoon 42 oferuje załodze tyle miejsca, co na znacznie większych jednostkach.
              </span>
            </div>
          </div>
          <div className='katacontainer'>
            <img className='kataphoto2' src={lagoon} alt='Lagoon 42' title='Photo by Miquel Gelabert on Unsplash'></img>
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
            <img className='squad-img' src={squad1} alt='Jan Kowalski / Kapitan' title='Photo by Sander Lenaerts on Unsplash'></img>
            <span className='squad-name'>Jan Kowalski</span>
            <span className='squad-title'>Kapitan</span>
          </div>
          <div className='squad-card'>
            <img className='squad-img' src={squad3} alt='Andrzej Kos / Kapitan' title='Photo by Ivan Lapyrin on Unsplash'></img>
            <span className='squad-name'>Andrzej Kos</span>
            <span className='squad-title'>Kapitan</span>
          </div>
          <div className='squad-card'>
            <img className='squad-img' src={squad2} alt='Sandra Mróz / Pilot' title='Photo by Marie Bouchart on Unsplash'></img>
            <span className='squad-name'>Sandra Mróz</span>
            <span className='squad-title'>Pilot</span>
          </div>
          <div className='squad-card'>
            <img className='squad-img' src={squad4} alt='Paweł Dręda / Przewodnik' title='Photo by Alicia Steels on Unsplash'></img>
            <span className='squad-name'>Paweł Dręda</span>
            <span className='squad-title'>Przewodnik</span>
          </div>
          <div className='squad-card'style={{marginRight: '30px'}}>
            <img className='squad-img' src={squad5} alt='Wiktor Marzec / Kierownik biura' title='Photo by Dragos Gontariu on Unsplash'></img>
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
