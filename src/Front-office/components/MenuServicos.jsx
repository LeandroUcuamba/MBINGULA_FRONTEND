import React from 'react'
import { NavLink } from "react-router-dom";


const MenuServicos = () => {
  return (
    <div>
      <ul className='select-servico'>
        <li><NavLink to="/components/comida/Comida" >Comida</NavLink></li>
        <li><NavLink to="/components/bebida/Bebida" >Bebida</NavLink></li>
        <li><NavLink to="/components/reserva/Reserva" >Reserva</NavLink></li>
      </ul>
    </div>
  )
}

export default MenuServicos
