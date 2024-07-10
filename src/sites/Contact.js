import './CSS/Contact.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import baner from '../photos/contact/baner.png';
import { useState } from 'react';

function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        else if (name === 'name') setName(value);
        else if (name === 'message') setMessage(value);
    };

    const handleButtonClick = () => {
        setEmail('');
        setName('');
        setMessage('');
    };

    const handleFocusText = (event) => {
        event.target.placeholder = ''
    }
    const handleBlurText = (event) => {
        event.target.placeholder = 'Dodatkowe informacje'
    }

    return (
        <div className='Contact'>
            <Navbar site={'kn'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Kontakt</span>
                <span className='baner-text'>Z chęcią odpowiemy na twoje pytania!</span>
            </div>
            <div className='contact-container'>
                <div className='contact-box'>
                    <div className='information'>
                        <div className='contact-text'>
                            <div className='appear animated contact-title'>  
                                Caribbean Dream sp. z o.o.
                            </div>
                            <div className='appear animated t1' style={{animationDelay: '1s'}}>
                                ul. Mickiewicza 43, <br/>
                                00-000 Warszawa<br/>
                                <b>NIP:</b> 1234567890 <br/><br/>

                                <b>Wiktor Marzec:</b><br/>
                                biuro@caribbeandream.pl<br/>
                                <b>tel:</b> (+48) 123 456 789
                            </div>
                            <div className='contact-title appear animated' style={{marginTop: '40px', animationDelay:'0.3s'}}>
                                <b>Obserwuj nas!</b>
                            </div>
                            <div className='link-box'>
                                <div className='contact-link appear animated' style={{animationDelay: '0.6s'}}><a href='https://www.facebook.com/'>Facebook</a></div>
                                <div className='contact-link appear animated' style={{animationDelay: '0.9s'}}><a href='https://www.instagram.com/'>Instagram</a></div>
                                <div className='contact-link appear animated' style={{animationDelay: '1.2s'}}><a href='https://www.youtube.com/'>Youtube</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='input-box'>
                        <div className='input-container'>
                            <p className='t2 appear animated' style={{animationDelay: '0.2s'}}>Skontaktuj się z nami!</p>
                            <div><input className='input1 appear animated' style={{animationDelay: '0.4s'}} placeholder='E-mail' name='email' value={email} onChange={handleInputChange}></input></div>
                            <div><input className='input1 appear animated' style={{animationDelay: '0.6s'}} placeholder='Imię i Nazwisko' name='name' value={name} onChange={handleInputChange}></input></div>
                            <div><textarea className='input2 appear animated' style={{animationDelay: '0.8s'}} placeholder='Treść wiadomości' name='message' value={message} onChange={handleInputChange} onFocus={handleFocusText} onBlur={handleBlurText}></textarea></div>
                            <div className='input-button-div appear animated' style={{animationDelay: '1.2s'}}><button onClick={handleButtonClick} className='contact-button'>Wyślij</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;