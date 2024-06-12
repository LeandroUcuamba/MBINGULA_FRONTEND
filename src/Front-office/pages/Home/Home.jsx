import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home1 from '../../assets/hero-bg1.jpg';
import home2 from '../../assets/hero-bg2.jpg';
import home3 from '../../assets/hero-bg3.jpg';

import Cardapio from '../Cardapio/Cardapio.jsx';
import Sobre from '../Sobre/Sobre.jsx';
import Footer from '../../components/Footer.jsx';
import Menu from '../../components/Menu.jsx'
import { NavLink } from "react-router-dom";

const socialNetworks = [
    { name: "whatsapp", icon: <FaWhatsapp /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> }
]

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <>
            <Menu />
            <div className='home'>
                    <Slider {...settings}>
                        <div className='home'>
                            <img src={home1} alt="home" />
                        </div>
                        <div className='home'>
                            <img src={home2} alt="home" />
                        </div>
                        <div className='home'>
                            <img src={home3} alt="home" />
                        </div>
                    </Slider>

                <div className='home-content'>
                    <h1>O sabor que vai até você</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit vel quia, sit voluptas aliquam !</p>


                    <NavLink to="/components/comida/Comida" className="peca-aqui"><span>Peça aqui!</span>
                    </NavLink>

                    <div className="social-media-btn">
                        {}
                        {socialNetworks.map((network) => (
                            <a href="#"
                                className='social-btn'
                                id={network.name}
                                key={network.name}>
                                {network.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Cardapio />
            <Sobre />
            <Cardapio />
            <Footer />
        </>
    )
}

export default Home



/*import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home1 from '../../assets/hero-bg.jpeg';
import home2 from '../../assets/hero-bg2.jpeg';
import home3 from '../../assets/hero-bg3.jpg';
import home4 from '../../assets/hero-bg4.jpg';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <>
            <Slider {...settings}>
                <div className='home'>
                    <img src={home1} alt="home" />
                </div>
                <div className='home'>
                    <img src={home2} alt="home" />
                </div>
                <div className='home'>
                    <img src={home3} alt="home" />
                </div>
                <div className='home'>
                    <img src={home4} alt="home" />
                </div>
            </Slider>
            <div className='home-content'>
                <h1>O sabor que vai até você</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit vel quia, sit voluptas aliquam !</p>
                <div className='peca-aqui'>
                    <a href="" className="btn-content">
                        Peça aqui!
                    </a>
                </div>
                <div className="social-media-btn">
                    <a href="">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;*/
