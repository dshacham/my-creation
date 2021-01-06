import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpenText, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    return (
        <div className="contact">
            <h3>נשמח לשמוע מכם</h3>
            <div className="info-img">
                <ul className="info">
                    <li>
                        <a href="https://www.facebook.com/CshMyCreation/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" title="פייסבוק" icon={faFacebookSquare} />
                        עמוד הפייסבוק שלנו
                        </a>
                    </li>
                    <li>
                        <a href="mailto: csh.mycreation@gmail.com">
                        <FontAwesomeIcon className="icon" title="אימייל" icon={faEnvelope} />
                        csh.mycreation@gmail.com
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" title="נייד" icon={faPhoneSquare} />
                        055-6875459
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" title="נייד" icon={faPhoneSquare} />
                        054-7968168
                    </li>
                </ul>
                <img src="../../assets/images/contact.jpeg" alt="תמונה מתוך חוג סיפור בהמחשה"></img>
            </div>
        </div>
    )
}

export default Contact;