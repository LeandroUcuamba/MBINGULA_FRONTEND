import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './Front-office/pages/Home/Home.jsx';
import Sobre from './Front-office/pages/Sobre/Sobre.jsx';
import Menu from './Front-office/components/Menu.jsx';
import Comida from './Front-office/components/comida/Comida.jsx';
import Bebida from './Front-office/components/bebida/Bebidas.jsx'
import Reserva from './Front-office/components/reserva/Reserva.jsx';
import LoginRegisterForm from './Front-office/components/LoginRegisterForm.jsx';


function App() {
  return (

    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pages/Sobre/Sobre" element={<Sobre />}></Route>
        <Route path="/components/comida/Comida" element={<Comida />}></Route>
        <Route path="/components/bebida/Bebida" element={<Bebida />}></Route>
        <Route path="/components/reserva/Reserva" element={<Reserva />}></Route>
        <Route path="/Front-office/components/LoginRegisterForm" element={<LoginRegisterForm />}></Route>
      </Routes>

    </div>
  )
}

export default App




/* eslint-disable no-unused-vars 
import './App.css'
import App_FrontOffice from './Front-office/App_FrontOffice.jsx';
import App_BackOffice from './Back-office/App_BackOffice.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <App_FrontOffice />
    </div>
  )
}

function App() {
  return (
    <div>
      <App_FrontOffice />
    </div>
  )
}

export default App
*/