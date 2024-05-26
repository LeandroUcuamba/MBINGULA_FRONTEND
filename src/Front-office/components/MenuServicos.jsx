import React from 'react'
import { NavLink, Link } from "react-router-dom";


const MenuServicos = () => {
  return (
    <div>
      <ul className='select-servico'>
        <li><NavLink to="/components/comida/Comida" >Comida</NavLink></li>
        <li><NavLink to="/components/bebida/Bebida" >Bebida</NavLink></li>
        <li><NavLink to="/components/reserva/Reserva" >Reserva</NavLink></li>
        {/* <li><NavLink to="/pages/Servicos/Servicos">Bebida</NavLink></li>
        <li><NavLink to="/pages/Sobre/Sobre">Reserva</NavLink></li> */}
        {/* <li className='active'>Comida</li>
              <li>Bebida</li>
              <li>Reserva</li> */}
      </ul>
    </div>
  )
}

export default MenuServicos
