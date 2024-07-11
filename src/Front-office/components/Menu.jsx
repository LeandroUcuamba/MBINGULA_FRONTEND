import { useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { RiRestaurant2Fill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdRoomService } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";
import { BiLogOut, BiLogIn } from "react-icons/bi";

import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const { signed, signOut } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        {/* <i className="fa fa-cutlery"></i> */}
        <RiRestaurant2Fill className="fa-cutlery" />
        Restaurant Mbingula
      </Link>

      <div className="navbar">
        <nav ref={navRef}>
          <ul>

            <li><NavLink to="/"><IoHome className="icones-menu icon-active" /> Home</NavLink></li>
            
            <li><NavLink to="/components/comida/Comida"> <MdRoomService className="icones-menu" /> Serviços</NavLink></li>

            <li><NavLink to="/pages/Sobre/Sobre"> <MdRoundaboutRight className="icones-menu" /> Sobre</NavLink></li>

            <li>
              {signed ? (
                <NavLink to="/" onClick={signOut}> <BiLogOut className="icones-menu" /> Sair</NavLink>
              ) : (
                <NavLink to="/Front-office/components/LoginRegisterForm"> <BiLogIn className="icones-menu" /> Entrar</NavLink>
              )}
            </li>

            <li><NavLink to="/Back-office/App_BackOffice">Admin</NavLink></li>

            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;