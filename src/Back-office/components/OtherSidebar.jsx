import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../components/Sidebar.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const handleDashboardClick = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-black text-white py-3 ps-3 vh-100">
      <div>
        <a href="#" className='p-3 text-decoration-none text-white'>
          <i id='logo-B' className="fa fa-cutlery m-1"></i>
          <span id='nome-mbingula' className="fs-3 m-1 me-5"><strong>Mbingula</strong></span>
        </a>

        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">

          <NavLink to="/Back-office/App_BackOffice" className="navLink">
            <i className="m-4 bi bi-speedometer2 me-2 fs-4"></i>
            <span className="fs-4">Dashboard</span>
          </NavLink>

          <NavLink to="/Back-office/pages/acesso" className="navLink">
            <i className="m-4 bi bi-people me-3 fs-4"></i>
            <span className="fs-4">Privilegios de acesso</span>
          </NavLink>
          <NavLink to="/Back-office/pages/item" className="navLink">
            <i className="m-4 bi bi-people me-3 fs-4"></i>
            <span className="fs-4">Items cardapio</span>
          </NavLink>
          <NavLink to="/Back-office/pages/servico" className="navLink">
            <i className="m-4 bi bi-people me-3 fs-4"></i>
            <span className="fs-4">Serviços prestados</span>
          </NavLink>
          <NavLink to="/Back-office/pages/utilizador" className="navLink">
            <i className="m-4 bi bi-people me-3 fs-4"></i>
            <span className="fs-4">Alterar acesso para utilizador</span>
          </NavLink>
        </ul>
      </div>

      <div>
        <hr className="text-white" />
        <div className="m-1 nav-item flex-column">
          <div className="nav-item d-flex">
            <NavLink to="/" className="navLink">
              <button id='btn-conta' className="p-1 d-flex btn btn-danger">
                <i className="bi bi-person-circle me-1"></i> Conta
              </button>
            </NavLink>

            <NavLink to="/" className="navLink">
              <button id='btn-logout' className="p-1 d-flex btn btn-danger">
                <i className="bi bi-box-arrow-right me-1"></i> Sair
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
