import './CSS/Offer.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import baner from '../photos/offer/baner.png';
import SaintLuica from '../photos/offer/SaintLuica.png';
import Dominikana from '../photos/offer/Dominikana.png';
import { PopUp } from '../components/PopUp';

function Offer() {
    return (
        <div className='Offer'>
            <Navbar site={'of'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Oferta podróży</span>
                <span className='baner-text'>Zobacz jakie miejsca możesz z nami odwiedzić!</span>
            </div>
            <div className='offer1'>
                <div className='offer-container1' style={{paddingTop: '50px'}}>
                    <div className='offer-title1'>Karaiby</div>
                    <div className='offer-text-container1'>
                        <div className='offer-text'>
                            <span>Karaiby to rajska kraina oczarowujących wysp, gdzie spotyka się błękitne niebo z jeszcze bardziej turkusowymi wodami. Te tropikalne archipelagi są domem dla białych piaszczystych plaż, gęstych palm i egzotycznej fauny morskiej.</span>
                            <div className='offer-price'>
                                <PopUp 
                                text = 'Wycieczka katamaranem na Karaiby to wyjątkowa podróż, podczas której uczestnicy mają okazję odkrywać piękno tej egzotycznej krainy. Po rozpoczęciu przygody w urokliwym porcie, wyruszamy na luksusowym katamaranie, ciesząc się zarówno komfortem pokładu, jak i fascynującymi widokami otaczającej nas scenerii. Podczas żeglowania przez karaibskie wody, zatrzymujemy się w różnych miejscach, by podziwiać podwodne bogactwa podczas sesji snorkelingu. Koralowe rafy, barwne ryby i krystalicznie czysta woda sprawiają, że te chwile są niezapomniane. Wieczory spędzamy na pokładzie, podziwiając zachody słońca nad oceanem. Codziennie mamy okazję zwiedzić inną malowniczą wyspę, zanurzając się w lokalną kulturę, tradycje i smaki. Wizyty na targach, degustacje karaibskich potraw, a także wędrówki po urokliwych uliczkach portów dodają wyjątkowego charakteru każdemu dniu. <br/> W cenie zawiera się podróż katamaranem oraz wyżywienie.' 
                                price = '9900 zł'
                                side = 'left'
                                button = 'black'
                                />
                                <span className='price'>9900 zł</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='offer2'>
                <div className='offer-container2'>
                    <div className='offer-img2'>
                        <img className='img2' src={SaintLuica} alt='SaintLuica'></img>
                    </div>
                    <div className='offer-text-container2'>
                        <div className='offer-text' style={{color: '#FAFAFA'}}>
                            <div className='offer-title2'>Saint Luica</div>
                            <span>Saint Lucia to klejnot Karaibów, wyspa o niezwykłej urodzie i zróżnicowanej przyrodzie. Jej charakterystycznym elementem są dwie góry stołowe zwane Gros Piton i Petit Piton, które tworzą malowniczy krajobraz.</span>
                            <div className='offer-price'>
                                <PopUp 
                                text = 'Podróż katamaranem do Saint Lucii to niezwykła wyprawa, zapewniająca luksusowy sposób na odkrycie uroku tej karaibskiej perły. Nasza ekscytująca przygoda rozpoczyna się w malowniczym porcie, gdzie wsiadamy na pokład komfortowego katamaranu, gotowego dostarczyć niezapomnianych wrażeń. Białe plaże i zielone wzgórza Saint Lucii malują piękne tło naszej podróży. Podczas żeglowania przez karaibskie wody zatrzymujemy się w różnych miejscach, aby zanurzyć się w podwodnym pięknie podczas sesji snorkelingu. Koralowe rafy, kolorowe ryby i krystalicznie czysta woda tworzą niepowtarzalne podwodne pejzaże. Wieczory spędzamy na pokładzie, delektując się zachodami słońca nad Morzem Karaibskim. Każdego dnia odkrywamy nowe zakątki Saint Lucii, absorbuje lokalną atmosferę, tradycje i smaki. Wizyty na targach, degustacje karaibskich specjałów oraz spacerowanie po urokliwych portach dodają każdemu dniu wyjątkowego charakteru. W cenie zawiera się podróż katamaranem oraz wyżywienie.' 
                                price = '6400 zł'
                                side = 'left'
                                button = 'white'
                                />
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
                                <PopUp 
                                text = 'Wycieczka katamaranem na Karaiby to wyjątkowa podróż, podczas której uczestnicy mają okazję odkrywać piękno tej egzotycznej krainy. Po rozpoczęciu przygody w urokliwym porcie, wyruszamy na luksusowym katamaranie, ciesząc się zarówno komfortem pokładu, jak i fascynującymi widokami otaczającej nas scenerii. Podczas żeglowania przez karaibskie wody, zatrzymujemy się w różnych miejscach, by podziwiać podwodne bogactwa podczas sesji snorkelingu. Koralowe rafy, barwne ryby i krystalicznie czysta woda sprawiają, że te chwile są niezapomniane. Wieczory spędzamy na pokładzie, podziwiając zachody słońca nad oceanem. Codziennie mamy okazję zwiedzić inną malowniczą wyspę, zanurzając się w lokalną kulturę, tradycje i smaki. Wizyty na targach, degustacje karaibskich potraw, a także wędrówki po urokliwych uliczkach portów dodają wyjątkowego charakteru każdemu dniu. <br/> W cenie zawiera się podróż katamaranem oraz wyżywienie.' 
                                price = '9900 zł'
                                side = 'right'
                                button = 'black'
                                />
                            </div>
                        </div>    
                    </div>
                    <div className='offer-title1'>Montserrat</div>    
                </div>
            </div>
            <div className='offer2'>
                <div className='offer-container2'>
                    <div className='offer-img2' style={{right: '0'}}>
                        <img className='img2' src={Dominikana} alt='Dominikana'></img>
                    </div>
                    <div className='offer-text-container2' style={{left: '0'}}>
                        <div className='offer-text' style={{color: '#FAFAFA'}}>
                            <div className='offer-title2'>Dominikana</div>
                            <span>Dominikana to karaibska perła o fascynującej mieszance przyrody, kultury i historii. Położona na wschodnim krańcu karaibskiego basenu, słynie z pięknych plaż, bujnej dżungli, górskich krajobrazów i ciepłego, przyjaznego klimatu.</span>
                            <div className='offer-price'>
                                <span className='price'>7300 zł</span>
                                <PopUp 
                                text = 'Podróż katamaranem do Montserratu to wyjątkowe przeżycie, łączące magię tej urokliwej wyspy z komfortem luksusowego rejsu. Nasza wyprawa zaczyna się w malowniczym porcie, gdzie wsiadamy na pokład katamaranu, gotowego dostarczyć nam niezapomnianych przeżyć. Panorama pełna fascynujących widoków towarzyszy nam przez całą podróż. Podczas żeglugi przez karaibskie wody zatrzymujemy się w różnych miejscach, by odkrywać podwodne cuda Montserratu podczas sesji snorkelingu. Koralowe rafy, bogactwo morskich gatunków i krystalicznie czysta woda tworzą atmosferę, która zostaje w pamięci na długo. Wieczory spędzamy na pokładzie, rozkoszując się zachodami słońca nad oceanem, co dodaje romantycznego i relaksującego charakteru naszej podróży. Każdego dnia mamy szansę zwiedzać inną malowniczą część Montserratu, poznając lokalną kulturę, tradycje i smaki. W cenie zawiera się podróż katamaranem oraz wyżywienie.' 
                                price = '7300 zł'
                                side = 'right'
                                button = 'white'
                                />
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
                                <PopUp 
                                text = 'Wycieczka katamaranem na Gwadelupę to niezapomniane doświadczenie, które łączy relaks na wodzie z odkrywaniem uroków tej urokliwej wyspy Karaibów. Podróż rozpoczyna się od przyjęcia na pokład katamaranu w jednym z urokliwych portów na Gwadelupie, na przykład w Pointe-à-Pitre. Załoga serwuje powitalny drink, a pasażerowie mogą cieszyć się widokiem błękitnego morza i kojącego szumu fal. Katamaran sunie przez krystalicznie czyste wody Karaibów, oferując pasażerom doskonałą okazję do opalania się na pokładzie lub relaksu w cieniu żagli. Żeglarze mogą podziwiać przepiękne widoki na wybrzeże Gwadelupy, mijając malownicze zatoki i wyspy. Wycieczka katamaranem na Gwadelupę to idealny sposób na połączenie przyjemności żeglowania z odkrywaniem niezwykłych krajobrazów i smaków Karaibów, tworząc niezapomniane wspomnienia z podróży. W cenie zawiera się podróż katamaranem oraz wyżywienie.' 
                                price = '5800 zł'
                                side = 'left'
                                button = 'black'
                                />
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