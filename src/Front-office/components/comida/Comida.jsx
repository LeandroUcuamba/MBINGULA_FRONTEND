import React from 'react'
import Dish from '../../assets/dish.png';
import Menu from '../Menu'

import MenuServicos from '../MenuServicos';

const Comida = () => {
  return (
    <div>

      {/* <Menu /> */}
      <section id="servico-comida">
        <MenuServicos />
        <h3 className="comida-subtitle">Nossos pratos especiais</h3>

        <div id="container-comida">

          <div className="card-comida">
            <div className="dish-heart-comida">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className='img-box-comida'>
              <img src={Dish} alt="home" />
            </div>
            <h3 className="dish-title-comida">
              Lorem Ipsum
            </h3>
            <span className="dish-description-comida">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>

            <div className="dish-price-comida">
              <h4>20,00kz</h4>
              <button className="btn-default-comida">
                <i className="fa-solid fa-basket-shopping"></i>
              </button>
            </div>
          </div>

          <div className="box-main">
            <h1>cola</h1>
            <div id='box'>
              <div id="oval"></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Comida
