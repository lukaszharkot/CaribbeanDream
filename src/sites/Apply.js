import './CSS/Apply.css';
//import catamaran from '../catamaran.svg';
import baner from '../photos/apply/baner.png';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { Toaster } from '../components/Toaster';

function Apply() {

    // const [time, setTime] = useState(5);

    // useEffect(() => {
    //     // Set an interval to update the countdown timer every second
    //     const interval = setInterval(() => {
    //         setTime(prevTime => prevTime - 1);
    //     }, 1000);

    //     // Redirect to the homepage after 3 seconds
    //     const timer = setTimeout(() => {
    //         window.location.href = '/';
    //     }, 5000);

    //     // Clear the interval and timeout if the component unmounts
    //     return () => {
    //         clearInterval(interval);
    //         clearTimeout(timer);
    //     };
    // }, []);
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [tel, setTel] = useState('');
    const [date, setDate] = useState('');
    const [route, setRoute] = useState('Karaiby');
    const [toasterMessage, setToasterMessage] = useState('error')

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        else if (name === 'name') setName(value);
        else if (name === 'message') setMessage(value);
        else if (name === 'tel') {
            // Allow only numeric input
            const regex = /^[0-9\b]+$/;
            if (value === '' || regex.test(value)) {
                setTel(value);
            }
        }
        else if (name === 'date') setDate(value);
        else if (name === 'route') setRoute(value);
    };

    const handleButtonClick = () => {
        if (email === '' || name === '' || route === '' || tel === '' || date === '') {
            setToasterMessage('error');
        } else {
            setToasterMessage('success-apply');
            setEmail('');
            setName('');
            setMessage('');
            setTel('');
            setDate('');
            setRoute('Karaiby');
        }
    };

    const handleFocus = (event) => {
        event.target.type = 'date';
        event.target.classList.remove('input3');
        event.target.classList.add('input4');
    }
    const handleBlur = (event) => {
        event.target.type = 'text';
        event.target.classList.remove('input4');
        event.target.classList.add('input3');
    }
    const handleFocusText = (event) => {
        event.target.placeholder = ''
    }
    const handleBlurText = (event) => {
        event.target.placeholder = 'Dodatkowe informacje'
    }

    const textSelector = () => {
        switch (route) {
            case 'Karaiby':
                return 'Karaiby to rajska kraina oczarowujących wysp, gdzie spotyka się błękitne niebo z jeszcze bardziej turkusowymi wodami. Te tropikalne archipelagi są domem dla białych piaszczystych plaż, gęstych palm i egzotycznej fauny morskiej.';
            case 'SaintLuica':
                return 'Saint Lucia to klejnot Karaibów, wyspa o niezwykłej urodzie i zróżnicowanej przyrodzie. Jej charakterystycznym elementem są dwie góry stołowe zwane Gros Piton i Petit Piton, które tworzą malowniczy krajobraz.';
            case 'Montserrat':
                return 'Montserrat, znana również jako Szmaragdowa Wyspa Karaibów, to mała, malownicza wyspa leżąca na Morzu Karaibskim. Charakteryzuje się bujną, zieloną roślinnością i pięknymi krajobrazami.';
            case 'Dominikana':
                return 'Dominikana to karaibska perła o fascynującej mieszance przyrody, kultury i historii. Położona na wschodnim krańcu karaibskiego basenu, słynie z pięknych plaż, bujnej dżungli, górskich krajobrazów i ciepłego, przyjaznego klimatu.';
            case 'Gwadelupa':
                return 'Gwadelupa, wyspiarskie terytorium zamorskie Francji, to karaibska oaza bogata w kulturę, przyrodę i historię. Wyspy otoczone są koralowymi rafami, a ich wybrzeża zdobią zarówno białe, piaszczyste plaże, jak i czarne plaże wulkaniczne.';
            default:
                return 'Wybierz trasę, żeby wyświetlić jej opis.';
        }
    };

    return (    
        <div className='Apply'>
            <Navbar site={'zs'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Zgłoś się</span>
                <span className='baner-text'>Skontaktuj się z nami w celu umówienia Twojej podróży!</span>
            </div>
            <div className='container'>
                <div className='contact-box'>
                    <div className='input-box'>
                        <div className='apply-input-container'>
                            <div style={{width: '360px'}}><p className='t3 appear animated' style={{animationDelay: '0.2s'}}>Jeśli jesteś chętny na niesamowitą przygodę - zostaw nam swoje dane, a my się do Ciebie odezwiemy!</p></div>
                            <div><input className='input1 appear animated' style={{animationDelay: '0.6s'}} placeholder='Imię i Nazwisko' name='name' value={name} onChange={handleInputChange}></input></div>
                            <div className='apply-input-div'>
                                <div><input className='input3 appear animated' style={{animationDelay: '0.8s'}} type='text' onFocus={handleFocus} onBlur={handleBlur} placeholder='Data' name='date' value={date} onChange={handleInputChange}></input></div>
                                <div><select className='input5 appear animated' style={{animationDelay: '0.6s', width: '155px'}} name='route' value={route} onChange={handleInputChange}>
                                    <option value="Karaiby">Karaiby</option>
                                    <option value="SaintLuica">Saint Luica</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Dominikana">Dominikana</option>
                                    <option value="Gwadelupa">Gwadelupa</option>   
                                </select></div>
                            </div>
                            <div><input className='input1 appear animated' style={{animationDelay: '0.6s'}} placeholder='E-mail' name='email' value={email} onChange={handleInputChange}></input></div>
                            <div><input className='input1 appear animated' style={{animationDelay: '0.4s'}} placeholder='Numer telefonu' name='tel' value={tel} onChange={handleInputChange}></input></div>
                            <div><textarea className='input2 appear animated' style={{animationDelay: '0.8s'}} placeholder='Dodatkowe informacje' name='message' value={message} onChange={handleInputChange} onFocus={handleFocusText} onBlur={handleBlurText}></textarea></div>
                        </div>
                    </div>
                    <div className='route-box'>
                        <div style={{width: '90%', marginBottom: '-30px', marginTop: '30px'}}><p className='t3 appear animated' style={{animationDelay: '0.3s'}}>Trasa podróży</p></div>
                        <div className='route-img appear animated' style={{animationDelay: '0.6s'}}><img src={`/${route}.png`} alt={route} /></div>
                        <div className='route-text appear animated' style={{animationDelay: '0.9s'}}>{textSelector()}</div>
                        <Toaster status={toasterMessage} handleButtonClick={handleButtonClick} site='apply'/>
                        
                    </div>
                </div>
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

export default Apply;