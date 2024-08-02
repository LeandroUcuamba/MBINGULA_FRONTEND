import React from 'react'
import Carne from '../../assets/carnes.jpg'
import Dish from '../../assets/dish.png';
import Menu from '../../components/Menu'

const Cardapio = () => {
    return (
        <div>
            <Menu />
            <section id="cardapio-comida">

                <h2 className="cardapio-title">Cardápio</h2>
                <h3 className="cardapio-subtitle">Nossos pratos especiais</h3>

                <div id="container-cardapio-comida">

                    <div className="card-cardapio-comida">
                        <div className='img-box-cardapio-comida'>
                            <img src={Carne} alt="home" />
                        </div>
                        <h3 className="dish-title-cardapio-comida">
                            Carne na tábua
                        </h3>
                        <span className="dish-description-cardapio-comida">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-price-cardapio-comida">
                            <h4>20,00kz</h4>
                            <button className="btn-default-cardapio-comida">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </button>
                        </div>
                    </div>

                    <div className="card-cardapio-comida">
                        <div className='img-box-cardapio-comida'>
                            <img src={Carne} alt="home" />
                        </div>
                        <h3 className="dish-title-cardapio-comida">
                            Carne na tábua
                        </h3>
                        <span className="dish-description-cardapio-comida">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-price-cardapio-comida">
                            <h4>20,00kz</h4>
                            <button className="btn-default-cardapio-comida">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </button>
                        </div>
                    </div>

                    <div className="card-cardapio-comida">
                        <div className='img-box-cardapio-comida'>
                            <img src={Carne} alt="home" />
                        </div>
                        <h3 className="dish-title-cardapio-comida">
                            Carne na tábua
                        </h3>
                        <span className="dish-description-cardapio-comida">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-price-cardapio-comida">
                            <h4>20,00kz</h4>
                            <button className="btn-default-cardapio-comida">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </button>
                        </div>
                    </div>

                    <div className="card-cardapio-comida">
                        <div className='img-box-cardapio-comida'>
                            <img src={Carne} alt="home" />
                        </div>
                        <h3 className="dish-title-cardapio-comida">
                            Carne na tábua
                        </h3>
                        <span className="dish-description-cardapio-comida">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-price-cardapio-comida">
                            <h4>20,00kz</h4>
                            <button className="btn-default-cardapio-comida">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Cardapio
