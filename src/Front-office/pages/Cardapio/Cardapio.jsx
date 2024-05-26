import React from 'react'
import Dish from '../../assets/dish.png';
import Menu from '../../components/Menu'

const Cardapio = () => {
    return (
        <div>
            <Menu />
            <section id="menu">
                <h2 className="section-title">Cardápio</h2>
                <h3 className="section-subtitle">Nossos pratos especiais</h3>

                <div id="dishes">
                    
                    <div className="dish">
                        <div className="dish-heart">
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className='img-box'>
                            <img src={Dish} alt="home" />
                        </div>
                        <h3 className="dish-title">
                            Lorem Ipsum
                        </h3>

                        <span className="dish-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-rate">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="dish-price">
                            <h4>20,00kz</h4>
                            <button className="btn-default1">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </button>
                        </div>
                    </div>

                    <div className="dish">
                        <div className="dish-heart">
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className='img-box'>
                            <img src={Dish} alt="home" />
                        </div>
                        <h3 className="dish-title">
                            Lorem Ipsum
                        </h3>

                        <span className="dish-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-rate">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="dish-price">
                            <h4>20,00kz</h4>
                            <button className="btn-default1">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </button>
                        </div>
                    </div>

                    <div className="dish">
                        <div className="dish-heart">
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className='img-box'>
                            <img src={Dish} alt="home" />
                        </div>
                        <h3 className="dish-title">
                            Lorem Ipsum
                        </h3>

                        <span className="dish-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-rate">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="dish-price">
                            <h4>20,00kz</h4>
                            <button className="btn-default1">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </button>
                        </div>
                    </div>

                    <div className="dish">
                        <div className="dish-heart">
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className='img-box'>
                            <img src={Dish} alt="home" />
                        </div>
                        <h3 className="dish-title">
                            Lorem Ipsum
                        </h3>

                        <span className="dish-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>

                        <div className="dish-rate">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="dish-price">
                            <h4>20,00kz</h4>
                            <button className="btn-default1">
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
