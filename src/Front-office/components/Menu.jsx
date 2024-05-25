import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="header">
            <div> 
                <i className="fa fa-cutlery"></i>
                < a href="#" className="logo" >Restaurant Mbingula</a>
            </div>
            <div className="navbar">
                <nav ref={navRef}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#contact">Contato</a></li>
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

