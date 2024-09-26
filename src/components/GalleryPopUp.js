import '../sites/CSS/Gallery.css';
import { useState } from 'react';

export function GalleryPopUp({ title, photo, side}) {

    const [isOpen, setIsOpen] = useState(false)

    function openPopUp() {
        setIsOpen(true)
      }

    function closePopUp() {
        setIsOpen(false)
      }

    return (
        <div>
            <div className='gallery-tile' onClick={openPopUp}>
                <img src={photo} alt={photo} className='gallery-photo'></img>
                <div className='photo-shadow'></div>
                <p className='photo-text'>{title}</p>
            </div>
            <div className={isOpen === true ? 'BackgroundBlurOn' : 'BackgroundBlurOff'} id='PopUp' >
            <div className={`${side === 'left' ? (isOpen ? 'PopUpBoxLeft slideInLeft animated' : 'PopUpBoxLeft slideOutLeft animated') : (isOpen ? 'PopUpBoxRight slideInRight animated' : 'PopUpBoxRight slideOutRight animated')}`} style={{animationDuration: '0.4s'}}>
                    <div className={side === 'left' ? 'exitGalleryRight' : 'exitGalleryLeft'} onClick={closePopUp}>
                        {/* <img className='backImg' src={back} alt='Back'></img> */}
                        <div className='x1'></div>
                        <div className='x2'></div> 
                    </div>
                    <div className='PopUpContainer'>
                        <div className={side === 'right' ? 'PopUpGalleryBoxRight' : 'PopUpGalleryBoxLeft'}>
                            <div className='popup-text'>dsad</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}