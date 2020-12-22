import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';
import Context from './Context';

const NavBar = () => {
    const { navClass, setNavClass } = useContext(Context);

    return (
        <nav className="nav">
            <NavLink to="/"><img src="../../assets/images/newlogo-orange2.png" alt="logo" /></NavLink>
            <div className="navbar">
                <div className="nav-items">
                    {/* <NavLink to="/" id="home" className="nav-item"
                        onClick={() => { setNavClass("/"); }}
                        className={navClass === "/" ? "selected" : ""}>
                        דף הבית
                    </NavLink> */}
                    <NavLink to="meonot" id="meonot"  className="nav-item"
                        onClick={() => { setNavClass("/meonot"); }}
                        className={navClass === "/meonot" ? "selected" : ""}>
                        חוגים למעונות
                    </NavLink>
                    <NavLink to="ganim" id="ganim"  className="nav-item"
                        onClick={() => { setNavClass("/ganim"); }}
                        className={navClass === "/ganim" ? "selected" : ""}>
                        חוגים לגנים
                    </NavLink>
                    <NavLink to="schools" id="schools"  className="nav-item"
                        onClick={() => { setNavClass("/schools"); }}
                        className={navClass === "/schools" ? "selected" : ""}>
                        חוגים לבתי ספר
                    </NavLink>
                    <NavLink to="gallery" id="gallery"  className="nav-item"
                        onClick={() => { setNavClass("/gallery"); }}
                        className={navClass === "/gallery" ? "selected" : ""}>
                        גלריה
                    </NavLink>
                    <NavLink to="contact" id="contact"  className="nav-item"
                        onClick={() => { setNavClass("/contact"); }}
                        className={navClass === "/contact" ? "selected" : ""}>
                        יצירת קשר
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;