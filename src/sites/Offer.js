import './CSS/Offer.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import baner from '../photos/offer/baner.png';

function Offer() {
    return (
        <div className='Offer'>
            <Navbar site={'of'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Oferta podróży</span>
                <span className='baner-text'>Skontaktuj się z nami w celu umówienia Twojej podróży!</span>
            </div>
            <div className='offer1'>
                <div className='offer-container1'>
                    <div className='offer-title1'>Karaiby</div>
                    <div className='offer-text-container1'>
                        <div className='offer-text'>
                            <span>Karaiby to rajska kraina oczarowujących wysp, gdzie spotyka się błękitne niebo z jeszcze bardziej turkusowymi wodami. Te tropikalne archipelagi są domem dla białych piaszczystych plaż, gęstych palm i egzotycznej fauny morskiej.</span>
                            <div className='offer-price'>
                                <button className='offer-button'>Dowiedz się więcej</button>
                                <span className='price'>2000$</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='offer1'>
                <div className='offer-container1'>
                    <div className='offer-text-container1'>
                        <div className='offer-text'>
                            <span>Karaiby to rajska kraina oczarowujących wysp, gdzie spotyka się błękitne niebo z jeszcze bardziej turkusowymi wodami. Te tropikalne archipelagi są domem dla białych piaszczystych plaż, gęstych palm i egzotycznej fauny morskiej.</span>
                            <div className='offer-price'>
                                <span className='price'>2000$</span>
                                <button className='offer-button'>Dowiedz się więcej</button>
                            </div>
                        </div>    
                    </div>
                    <div className='offer-title1'>Karaiby</div>    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Offer;