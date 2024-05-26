import React from 'react'

import home3 from '../../assets/hero-bg3.jpg';

import Cardapio from '../Cardapio/Cardapio.jsx';
import Sobre from '../Sobre/Sobre.jsx';
import Footer from '../../components/Footer.jsx';
import Menu from '../../components/Menu.jsx'

const Home = () => {

    return (
        <>
            <Menu />
            <div className='home'>

                <img src={home3} alt="home" />

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
            </div>
            <Cardapio />
            <Sobre />
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
