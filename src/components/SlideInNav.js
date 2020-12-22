import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';
import Context from './Context';

const SlideInNav = () => {
    const { navClass, setNavClass } = useContext(Context);

    return (
        <nav className="nav">
            <NavLink to="/"><img src="../../assets/images/chenLogo.png" alt="logo" /></NavLink>
            <div className="navbar">
                <div className="nav-items">
                    <NavLink to="/" id="home"
                        onClick={() => { setNavClass("/"); }}
                        className={navClass === "/" ? "selected" : ""}>
                        דף הבית
                    </NavLink>
                    <NavLink to="meonot" id="meonot"
                        onClick={() => { setNavClass("/meonot"); }}
                        className={navClass === "/therapy" ? "selected" : ""}>
                        חוגים למעונות
                    </NavLink>
                    <NavLink to="ganim" id="ganim"
                        onClick={() => { setNavClass("/ganim"); }}
                        className={navClass === "/ganim" ? "selected" : ""}>
                        חוגים לגנים
                    </NavLink>
                    <NavLink to="schools" id="schools"
                        onClick={() => { setNavClass("/schools"); }}
                        className={navClass === "/schools" ? "selected" : ""}>
                        חוגים לבתי ספר
                    </NavLink>
                    <NavLink to="gallery" id="gallery"
                        onClick={() => { setNavClass("/gallery"); }}
                        className={navClass === "/gallery" ? "selected" : ""}>
                        גלריה
                    </NavLink>
                    <NavLink to="contact" id="contact"
                        onClick={() => { setNavClass("/contact"); }}
                        className={navClass === "/contact" ? "selected" : ""}>
                        יצירת קשר
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default SlideInNav;