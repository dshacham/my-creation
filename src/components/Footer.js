import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Context from './Context';

const Footer = () => {
    const { setNavClass } = useContext(Context);

    return (
        <div className="footer-desk">
            <ul className="footer-section-desk">
                <li className="hoogim">
                    <Link to="meonot">חוגים למעונות</Link>
                </li>
                <li className="hoogim">
                    <Link to="ganim">חוגים לגנים</Link>
                </li>
                <li className="hoogim">
                    <Link to="schools">חוגים לבתי ספר</Link>
                </li>
            </ul>
            <ul className="footer-section-desk">
                <li className="hoogim">
                    <Link to="gallery">גלריה</Link>
                </li>
            </ul>
            <ul className="footer-section-desk">
                {/* <li className="section-contact-desk">
                    <Link to="contact">יצירת קשר</Link>
                </li> */}
                <li>
                    <a href="https://www.facebook.com/CshMyCreation/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-desk" title="פייסבוק" icon={faFacebookSquare} />
                    </a>
                </li>
                <li>
                    <a href="mailto: csh.mycreation@gmail.com">
                    <FontAwesomeIcon className="icon-desk" title="אימייל" icon={faEnvelope} />
                    </a>
                </li>
            </ul>
            <ul className="footer-section-desk">
                <li>
                    <p className="tel">055-6875459</p>
                    <p className="tel">054-7968168</p>
                </li>
            </ul>
            <ul className="footer-section-desk credits">
                <li className="credit1">
                ©2021 יצירתי - חוגי קונספט לילדים
                </li>
                <li className="credit2">
                    <a href="http://d-shacham.web.app/" target="_blank" rel="noopener noreferrer">האתר נבנה ע"י דנה שחם</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;