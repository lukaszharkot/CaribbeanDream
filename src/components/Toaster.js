import '../sites/CSS/Apply.css';
import { useState, useEffect } from 'react';

export function Toaster({ status, handleButtonClick, site }) {

    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null); 

    useEffect(() => {
        return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        };
    }, [timeoutId]);
  
    function toggleToaster() {
        handleButtonClick();
        setIsVisible(true);
        const id = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        setTimeoutId(id);
    }
  
    function closeToaster() {
      setIsVisible(false);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }

    let toasterContent;
    if (status === 'error') {
        toasterContent = (
            <>
                <div className='Toaster-line error'></div>
                <div className='Toaster-text-container'>
                    <div className='Toaster-title error'>Błąd!</div>
                    <div className='Toaster-text'>Proszę uzupełnić wszystkie wymagane pola.</div>
                </div>
            </>
        );
    } else if (status === 'success-apply') {
        toasterContent = (
            <>
                <div className='Toaster-line success'></div>
                <div className='Toaster-text-container'>
                    <div className='Toaster-title success'>Wysłano zgłoszenie!</div>
                    <div className='Toaster-text'>Twoje zgłoszenie trafiło do naszego zespołu!</div>
                </div>
            </>
        );
    } else if (status === 'success-contact') {
        toasterContent = (
            <>
                <div className='Toaster-line success'></div>
                <div className='Toaster-text-container'>
                    <div className='Toaster-title success'>Wysłano wiadomość!</div>
                    <div className='Toaster-text'>Twoja wiadomość trafiła do naszego zespołu!</div>
                </div>
            </>
        );
    }

    return (
        <div>
            <div className={ site === 'apply' ? 'input-apply-div appear animated' : 'input-button-div'} style={{animationDelay: '1.2s'}}><button onClick={toggleToaster} className='contact-button'>Wyślij</button></div>
            <div className={ isVisible ? 'ToasterOn appear animated' : 'ToasterOff disappear animated'}>
                <div className='exit-toaster' onClick={closeToaster}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
                {toasterContent}
            </div>
        </div>
    );
}