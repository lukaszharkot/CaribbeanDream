import { TiSocialFacebookCircular, TiSocialYoutubeCircular, TiSocialInstagramCircular  } from "react-icons/ti"

export function Footer() {
    return (
        <div className='footer'>
            <div className="footer1">
                <p className="footer-title">Kontakt</p>
                <div style={{backgroundColor: 'white', width: '70px', height: '2px', borderRadius: '1px'}}></div>
                <p className="footer-text">biuro@caribbeandream.pl<br/>tel: (+48) 123 456 789</p>
            </div>
            <div className="footer2">
                <p className="footer-title">Bądź na bieżąco</p>
                <div style={{backgroundColor: 'white', width: '148px', height: '2px', borderRadius: '1px'}}></div>
                <div className="endicon-div">
                    <a href='https://www.facebook.com/'><TiSocialFacebookCircular  className='icon-end'/></a>
                    <a href='https://www.instagram.com/'><TiSocialInstagramCircular  className='icon-end'/></a>
                    <a href='https://youtube.com/'><TiSocialYoutubeCircular  className='icon-end'/></a>
                </div>
            </div>
            <div className="footer3">
                <p className="footer-title">O nas</p>
                <div style={{backgroundColor: 'white', width: '53px', height: '2px', borderRadius: '1px'}}></div>
                <p className="footer-text">Jesteśmy firmą działającą od 2014 roku. Rejsy katamaranem to nasza pasja i jesteśmy dumni, że możemy dzielić ją właśnie z Tobą!</p>
            </div>
            <p className="designedby">© 2024 Designed by Łukasz Harkot, Olaf Ryznar, Dominik Grabowski. Developed by Łukasz Harkot. Photos from Unsplash.</p>
        </div>
    )
}