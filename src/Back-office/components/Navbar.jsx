/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function Navbar({Toggle}) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container-fluid">
    
            <a className='navbar-brand d-block d-md-none d-sm-block' onClick={Toggle}>
                <i className='bi bi-justify'></i>
            </a>

            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-current="page">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id="navbarTogglerDemo02">

                 <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>

                    <li className='nav-item border rounded'>
                        <a className='nav-link text-white' aria-current="page" href='#'>
                            <i className='bi bi-search'></i>Search
                        </a>
                    </li>

                    <li className='nav-item mx-2 rounded border'>
                        <a className='nav-link text-white' aria-current="page" href='#'>Account</a>
                    </li>

                 </ul>
            </div>
         </div>
      </nav>
    );
}
  
  export default Navbar
  