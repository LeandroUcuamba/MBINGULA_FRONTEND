/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Navbar1.css'

function Navbar({ Toggle }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-white">

            <a className='ms-auto bg-dark mb-2 mb-lg-0 navbar-toggler navbar-brand d-block d-md-none d-sm-block' onClick={Toggle}>
                <i className='bi bi-justify'></i>
            </a>

        </nav>
    );
}

export default Navbar
