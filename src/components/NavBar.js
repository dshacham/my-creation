import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavBar.scss';
import Context from './Context';

const NavBar = () => {
    const { navClass, setNavClass } = useContext(Context);
console.log(navClass)
    return (
        <nav className={navClass === "/meonot" ? "nav nav-blue" : navClass === "/ganim" ? "nav nav-green" : navClass === "/schools" ? "nav nav-red" : navClass === "/gallery" ? "nav nav-purple" : navClass === "/contact" ? "nav nav-orange" : "nav"}>
            <NavLink to="/"><img src={navClass === "/meonot" ? "../../assets/images/newlogo-blue.png" : navClass === "/ganim" ? "../../assets/images/newlogo-green.png" : navClass === "/schools" ? "../../assets/images/newlogo-red.png" : navClass === "/gallery" ? "../../assets/images/newlogo-purple.png" : navClass === "/contact" ? "../../assets/images/newlogo-orange.png" : "../../assets/images/newlogo-yellow.png"} alt="logo" /></NavLink>
            <div className="navbar">
                <div className="nav-items">
                    <NavLink to="meonot" id="meonot"
                        onClick={() => { setNavClass("/meonot"); }}
                        className={navClass === "/meonot" ? "nav-item selected" : "nav-item"}>
                        חוגים למעונות
                    </NavLink>
                    <NavLink to="ganim" id="ganim"
                        onClick={() => { setNavClass("/ganim"); }}
                        className={navClass === "/ganim" ? "nav-item selected" : "nav-item"}>
                        חוגים לגנים
                    </NavLink>
                    <NavLink to="schools" id="schools"
                        onClick={() => { setNavClass("/schools"); }}
                        className={navClass === "/schools" ? "nav-item selected" : "nav-item"}>
                        חוגים לבתי ספר
                    </NavLink>
                    <NavLink to="gallery" id="gallery"
                        onClick={() => { setNavClass("/gallery"); }}
                        className={navClass === "/gallery" ? "nav-item selected" : "nav-item"}>
                        גלריה
                    </NavLink>
                    <NavLink to="contact" id="contact"
                        onClick={() => { setNavClass("/contact"); }}
                        className={navClass === "/contact" ? "nav-item selected" : "nav-item"}>
                        יצירת קשר
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;