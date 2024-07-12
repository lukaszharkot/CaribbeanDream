import './CSS/Gallery.css';
import baner from '../photos/gallery/baner.jpg';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

function Gallery() {

    return (    
        <div className='Gallery'>
            <Navbar site={'zs'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Galeria</span>
                <span className='baner-text'>Sprawdź jakie widoki będą Ci towarzyszyć na naszych rejsach!</span>
            </div>
            <div className='container-gallery'>
            </div>
            {/* <div className='container'></div>
            <div className='redirect'>
                <div className='redirect-box'>
                    <div className='big-logo-containerapply2' style={{marginTop:'10px'}}>
                        <p className='big-logoapply1'>Caribbean</p>
                        <img src={catamaran} alt="Logo" className='big-logoimgapply'/>
                        <p className='big-logoapply2'>Dream</p>
                    </div>
                    <div style={{width:'100%', display:'grid', justifyItems:'center'}}>
                        <div style={{backgroundColor: '#323038', width: '300px', height: '2px', borderRadius: '1px', marginTop: '-5px', marginRight:'2px'}}></div>
                        <div style={{backgroundColor: '#323038', width: '270px', height: '2px', borderRadius: '1px', marginTop: '5px', marginRight:'3px'}}></div>
                    </div>
                    <p className='redirect-title'>Podstrona w trakcie budowy</p>
                    <p className='redirect-text'>Przekierowanie za {time}...</p>
                </div>
            </div> */}
            <Footer/>
        </div>
    )
}

export default Gallery;