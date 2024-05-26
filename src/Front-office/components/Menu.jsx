import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="header">
            
                <Link to="/" className="logo">
                    <i className="fa fa-cutlery"></i>
                    Restaurant Mbingula
                </Link>
            
            <div className="navbar">
                <nav ref={navRef}>
                    <ul>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/components/comida/Comida">Servicos</NavLink></li>
                        <li><NavLink to="/pages/Sobre/Sobre">Sobre</NavLink></li>
                        <li><NavLink to="/Front-office/components/LoginRegisterForm">Login</NavLink></li>
                        <li><NavLink to="/Back-office/App_BackOffice">Admin</NavLink></li>

                        <button
                            className="nav-btn nav-close-btn"
                            onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </ul>
                </nav>

                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Navbar;

