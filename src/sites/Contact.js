import './CSS/Contact.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import baner from '../photos/contact/baner.png';

function Contact() {
    return (
        <div className='Contact'>
            <Navbar site={'kn'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Kontakt</span>
                <span className='baner-text'>Z chęcią odpowiemy na twoje pytania!</span>
            </div>
            <div className='contact-container'>
                <div className='ez'>
                    <div className='contact-text'>
                        <span className='t1'>  
                            <b>Światy Łopaty sp. z o.o.</b> <br/><br/>

                            ul. Osiecka 37, <br/>
                            47-100 Strzelce Opolskie<br/>
                            <b>NIP:</b> 6792906362 <br/><br/>

                            <b>Robert Drohomirecki:</b><br/>
                            robert@karaibylopaty.pl<br/>
                            <b>tel:</b> (+48) 510 429 886
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;