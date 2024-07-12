import logo from '../logo.svg';
import { useState,useEffect } from 'react';

export function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (props.site === 'sg') {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }else{
      setScrolled(true)
    }
  }, [props.site]);

    return(
      <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className='logo-container' style={{marginLeft: '5px'}}>
          <p className={`logo ${scrolled ? 'scrolled' : ''}`}><a href='/'>Caribbean</a></p>
          <div className={`logo-div ${scrolled ? 'scrolled' : ''}`}><a href='/'><img src={logo} alt="Logo" className={`logoimg ${scrolled ? 'scrolled' : ''}`}/></a></div>
          <p className={`logo ${scrolled ? 'scrolled' : ''}`}><a href='/'>Dream</a></p>
        </div>
        <div className={`navcontainer ${scrolled ? 'scrolled' : ''}`}>
          <div className={`navbuttons${props.site === 'sg' ? ' navbuttonsbold' : ''}`} style={{ width: 'auto'}}><a href='/'>STRONA GŁÓWNA</a></div>
          <div className={`navbuttons${props.site === 'of' ? ' navbuttonsbold' : ''}`} style={{ width: 'auto' }}><a href='/oferta'>OFERTA</a></div>
          <div className={`navbuttons${props.site === 'zs' ? ' navbuttonsbold' : ''}`} style={{ width: 'auto' }}><a href='/zglos'>ZGŁOŚ SIĘ</a></div>
          <div className={`navbuttons${props.site === 'gl' ? ' navbuttonsbold' : ''}`} style={{ width: 'auto' }}><a href='/galeria'>GALERIA</a></div>
          <div className={`navbuttons${props.site === 'kn' ? ' navbuttonsbold' : ''}`} style={{ width: 'auto', marginRight: '10px' }}><a href='/kontakt'>KONTAKT</a></div>
        </div>
      </div>
    )
}