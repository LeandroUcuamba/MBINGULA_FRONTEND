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
        <a href="/" className='p-3 text-decoration-none text-white'>
          <i id='logo-B' className="fa fa-cutlery m-1"></i>
          <span id='nome-mbingula' className="fs-3 m-1 me-5"><strong>Mbingula</strong></span>
        </a>

        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">

          <NavLink to="/Back-office/App_BackOffice" className="navLink">
            <i className="m-4 bi bi-clipboard2-data me-3 fs-4"></i>
            <span className="fs-4">Dashboard</span>
          </NavLink>

          <NavLink to="/Back-office/pages/funcionario" className="navLink">
            <i className="m-4 bi bi-person-lines-fill me-3 fs-4"></i>
            <span className="fs-4">Funcionários</span>
          </NavLink>

          <NavLink to="/Back-office/pages/fornecedor" className="navLink">
            <i className="m-4 bi bi-people me-3 fs-4"></i>
            <span className="fs-4">Fornecedores</span>
          </NavLink>

          <NavLink to="/Back-office/pages/produto" className="navLink">
            <i className="m-4 bi bi-box-seam me-3 fs-4"></i>
            <span className="fs-4">Produto e fornecidor</span>
          </NavLink>

          <NavLink to="/Back-office/pages/estoque" className="navLink">
            <i className="m-4 bi bi-boxes me-3 fs-4"></i>
            <span className="fs-4">Estoque de produto</span>
          </NavLink>

          <NavLink to="/Back-office/pages/atividade" className="navLink">
            <i className="m-4 bi bi-calendar2-event me-3 fs-4"></i>
            <span className="fs-4">Atividades da casa</span>
          </NavLink>

          <NavLink to="/Back-office/pages/sector" className="navLink">
            <i className="m-4 bi bi-ui-checks-grid me-3 fs-4"></i>
            <span className="fs-4">Sector</span>
          </NavLink>
          <NavLink to="/Back-office/pages/mesa" className="navLink">
            <i className="m-4 bi bi-octagon-fill me-3 fs-4"></i>
            <span className="fs-4">Mesas</span>
          </NavLink>
          <NavLink to="/Back-office/components/otherSidebar" className="navLink">
            <i className="m-4 bi bi-arrow-down-circle me-3 fs-4"></i>
            <span className="fs-4">Ver mais</span>
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
              <button id='btn-voltar' className="p-1 d-flex btn btn-danger">
                <i className="bi bi-chevron-double-left me-1"></i> Voltar
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
