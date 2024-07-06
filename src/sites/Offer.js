import './CSS/Offer.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import baner from '../photos/offer/baner.png';
import SaintLuica from '../photos/offer/SaintLuica.png';

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
                                <span className='price'>9900 zł</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='offer2'>
                <div className='offer-container2'>
                    <div className='offer-img2'>
                        <img className='SaintLuica' src={SaintLuica} alt='SaintLuica'></img>
                    </div>
                    <div className='offer-text-container2'>
                        <div className='offer-text' style={{color: '#FAFAFA'}}>
                            <div className='offer-title2'>Saint Luica</div>
                            <span>Saint Lucia to klejnot Karaibów, wyspa o niezwykłej urodzie i zróżnicowanej przyrodzie. Jej charakterystycznym elementem są dwie góry stołowe zwane Gros Piton i Petit Piton, które tworzą malowniczy krajobraz.</span>
                            <div className='offer-price'>
                                <button className='offer-button2' style={{borderColor: '#FAFAFA', color: '#FAFAFA'}}>Dowiedz się więcej</button>
                                <span className='price'>6400 zł</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='offer1'>
                <div className='offer-container1'>
                    <div className='offer-text-container1'>
                        <div className='offer-text'>
                            <span>Montserrat, znana również jako Szmaragdowa Wyspa Karaibów, to mała, malownicza wyspa leżąca na Morzu Karaibskim. Charakteryzuje się bujną, zieloną roślinnością i pięknymi krajobrazami.</span>
                            <div className='offer-price'>
                                <span className='price'>6700 zł</span>
                                <button className='offer-button'>Dowiedz się więcej</button>
                            </div>
                        </div>    
                    </div>
                    <div className='offer-title1'>Montserrat</div>    
                </div>
            </div>
            <div className='offer2'>
                <div className='offer-container2'>
                    <div className='offer-img2' style={{right: '0'}}>
                        <img className='SaintLuica' src={SaintLuica} alt='SaintLuica'></img>
                    </div>
                    <div className='offer-text-container2' style={{left: '0'}}>
                        <div className='offer-text' style={{color: '#FAFAFA'}}>
                            <div className='offer-title2'>Dominikana</div>
                            <span>Dominikana to karaibska perła o fascynującej mieszance przyrody, kultury i historii. Położona na wschodnim krańcu karaibskiego basenu, słynie z pięknych plaż, bujnej dżungli, górskich krajobrazów i ciepłego, przyjaznego klimatu.</span>
                            <div className='offer-price'>
                                <button className='offer-button2' style={{borderColor: '#FAFAFA', color: '#FAFAFA'}}>Dowiedz się więcej</button>
                                <span className='price'>7300 zł</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='offer1'  style={{marginBottom: '100px'}}>
                <div className='offer-container1'>
                    <div className='offer-title1'>Gwadelupa</div>
                    <div className='offer-text-container1'>
                        <div className='offer-text'>
                            <span>Gwadelupa, wyspiarskie terytorium zamorskie Francji, to karaibska oaza bogata w kulturę, przyrodę i historię. Wyspy otoczone są koralowymi rafami, a ich wybrzeża zdobią zarówno białe, piaszczyste plaże, jak i czarne plaże wulkaniczne.</span>
                            <div className='offer-price'>
                                <button className='offer-button'>Dowiedz się więcej</button>
                                <span className='price'>5800 zł</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Offer;