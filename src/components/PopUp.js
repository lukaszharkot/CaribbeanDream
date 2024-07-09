import '../sites/CSS/Offer.css';
import { useState } from 'react';

export function PopUp({ text, price, side, button}) {

    const [isOpen, setIsOpen] = useState(false)

    function togglePopUp() {
        setIsOpen(true)
      }

    function closePopUp() {
        setIsOpen(false)
      }

    return (
        <div>
            <button className={button === 'black' ? 'offer-button' : 'offer-button2'} onClick={togglePopUp}>Dowiedz się więcej</button>
            <div className={isOpen === true ? 'BackgroundBlurOn' : 'BackgroundBlurOff'} id='PopUp' >
            <div className={`${side === 'left' ? (isOpen ? 'PopUpBoxLeft slideInLeft animated' : 'PopUpBoxLeft slideOutLeft animated') : (isOpen ? 'PopUpBoxRight slideInRight animated' : 'PopUpBoxRight slideOutRight animated')}`} style={{animationDuration: '0.4s'}}>
                    <div className={side === 'left' ? 'exitRight' : 'exitLeft'} onClick={closePopUp}>
                        {/* <img className='backImg' src={back} alt='Back'></img> */}
                        <div className='x1'></div>
                        <div className='x2'></div> 
                    </div>
                    <div className='PopUpContainer'>
                        <div className='PopUpTextBox'>
                            <div className='popup-text'>{text}</div>
                        </div>
                        <div className='PopUpPrice'>
                            <div className='offer-text'>{price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}