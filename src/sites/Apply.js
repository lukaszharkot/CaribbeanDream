import './CSS/Apply.css';
import catamaran from '../catamaran.svg';
import baner from '../photos/apply/baner.png';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect, useState  } from 'react';

function Apply() {

    const [time, setTime] = useState(5);

    useEffect(() => {
        // Set an interval to update the countdown timer every second
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        // Redirect to the homepage after 3 seconds
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 5000);

        // Clear the interval and timeout if the component unmounts
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);
    return (    
        <div className='Apply'>
            <Navbar site={'zs'}/>
            <div className='baner'>
                <img className='baner-img' src={baner} alt='Baner'></img>
                <span className='baner-title'>Zgłoś się</span>
                <span className='baner-text'>Skontaktuj się z nami w celu umówienia Twojej podróży!</span>
            </div>
            <div className='container'></div>
            <div className='redirect'>
                <div className='redirect-box'>
                    <div className='big-logo-containerapply2' style={{marginTop:'10px'}}>
                        <p className='big-logoapply1'>Caribbean</p>
                        <img src={catamaran} alt="Logo" className='big-logoimgapply'/>
                        <p className='big-logoapply2'>Dream</p>
                    </div>
                    <div style={{width:'100%', display:'grid', justifyItems:'center'}}>
                        <div style={{backgroundColor: '#323038', width: '300px', height: '2px', borderRadius: '1px', marginTop: '-5px', marginRight:'2px'}}></div>
                        <div style={{backgroundColor: '#323038', width: '270px', height: '1px', borderRadius: '1px', marginTop: '5px', marginRight:'3px'}}></div>
                    </div>
                    <p className='redirect-title'>Podstrona w trakcie budowy</p>
                    <p className='redirect-text'>Przekierowanie za {time}...</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Apply;