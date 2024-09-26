import './CSS/Gallery.css';
import baner from '../photos/gallery/baner.jpg';
//import catamaran from '../catamaran.svg';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GalleryPopUp } from '../components/GalleryPopUp';

//Karaiby
import KaraibyTile from '../photos/gallery/Caribbean/tile.jpg';

//SaintLuica
import SaintLuicaTile from '../photos/gallery/SaintLuica/tile.jpg';

//Montserrat
import MontserratTile from '../photos/gallery/Montserrat/tile.jpg';

//Dominikana
import DominicanaTile from '../photos/gallery/Dominicana/tile.png';

//Gwadelupa
import GuadelupeTile from '../photos/gallery/Guadalupe/tile.jpg';


function Gallery() {

    return (    
        <div className='Gallery'>
            <Navbar site={'gl'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Galeria</span>
                <span className='baner-text'>Sprawdź jakie widoki będą Ci towarzyszyć na naszych rejsach!</span>
            </div>
            <div className='container-gallery'>
                <div className='gallery-box'>
                    <GalleryPopUp title='Karaiby' photo={KaraibyTile} side='right' />
                    <GalleryPopUp title='Saint Luica' photo={SaintLuicaTile} side='left' />
                    <GalleryPopUp title='Montserrat' photo={MontserratTile} side='right' />
                    <GalleryPopUp title='Dominikana' photo={DominicanaTile} side='left' />
                    <GalleryPopUp title='Gwadelupa' photo={GuadelupeTile} side='right' />
                    <GalleryPopUp title='Katamarany' photo={KaraibyTile} side='left' />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Gallery;