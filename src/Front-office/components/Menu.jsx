import { useRef, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { RiRestaurant2Fill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { AiOutlineQuestionCircle, AiOutlinePlusCircle, AiOutlineUser, AiOutlineReload } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
import { AiFillTool } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogOut, BiLogIn } from "react-icons/bi";

import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const navRef = useRef();
  const [showMore, setShowMore] = useState(false);
  const [showOrderMenu, setShowOrderMenu] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const { signed, signOut } = useContext(AuthContext);

  const handleShowMore = () => {
    setShowMore(true);
    setShowOrderMenu(false);
  };

  const handleBack = () => {
    setShowMore(false);
    setShowOrderMenu(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <RiRestaurant2Fill className="fa-cutlery" />
        Restaurante Mbingula
      </Link>

      <div className="navbar">
        <nav ref={navRef}>
          <ul>
            {!showMore && !showOrderMenu ? (
              <>
                <li><NavLink to="/"><IoHome className="icones-menu" /> Home</NavLink></li>
                <li><NavLink to="/Front-office/pages/Pedido"><AiOutlineMail className="icones-menu" /> Pedido</NavLink></li>
                <li><NavLink to="/Back-office/App_BackOffice"><AiOutlineUser className="icones-menu" /> Admin</NavLink></li>
                <li>
                  {signed ? (
                    <NavLink to="/" onClick={signOut}> <BiLogOut className="icones-menu" /> Sair</NavLink>
                  ) : (
                    <NavLink to="/Front-office/components/LoginRegisterForm"> <BiLogIn className="icones-menu" /> Entrar</NavLink>
                  )}
                </li>
                <li><NavLink to="/Front-office/pages/Sobre"> <AiOutlineQuestionCircle className="icones-menu" /> Sobre</NavLink></li>
                <li>
                  <NavLink to="#" onClick={handleShowMore}><AiOutlinePlusCircle className="icones-menu" /> Ver mais</NavLink>
                </li>
              </>
            ) : (
              <>
                <li><NavLink to="/Front-office/pages/AtividadeCasa"><AiFillSun className="icones-menu" /> Atividades</NavLink></li>
                <li><NavLink to="/Front-office/pages/CardapioItems"><AiOutlineContainer className="icones-menu" /> Cardápio </NavLink></li>
                <li><NavLink to="/Front-office/pages/Servicos"><AiFillTool className="icones-menu" /> Serviços</NavLink></li>
                <li><NavLink to="/Front-office/pages/pages/avaliacao/create"><AiOutlineEdit className="icones-menu" /> Avaliação</NavLink></li>
                <li>
                  <li><NavLink to="/Front-office/pages/mesaReservada"><AiOutlineFileDone className="icones-menu" /> Res. Mesa</NavLink></li>
                </li>
                <li><NavLink to="#" onClick={handleBack}><AiOutlineReload className="icones-menu" /> Voltar</NavLink></li>
              </>
            )}
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