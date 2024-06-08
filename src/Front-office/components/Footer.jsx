import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import ondas from '/ondas.svg'

const socialNetworks = [
    { name: "whatsapp", icon: <FaWhatsapp /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> }
]

const Footer = () => {
    return (
        <>
            <div className='container-footer'>
                <img className='ond' src={ondas} alt="home" />
                <div id="footer_items">
                    <div className='contactos'>
                        <h4>Contactos</h4>
                        <div className='links'>
                            <a href=''>localização</a>
                            <a href=''>Tel: 67893242</a>
                            <a href=''>Bing@mail.com</a>
                        </div>
                    </div>

                    <div className="detalhes">
                        <h4>Sobre</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit eius quod nostrum excepturi expedita ea possimus animi iure placeat reiciendis odit adipisci laboriosam, est minus, ad atque molestias recusandae.</p>
                        <div className="social-media-buttons">
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
                    <div className='horario'>
                        <h4>Horário</h4>
                        <p>Todos dias</p>
                        <p><span>8:00</span> até <span>22:00</span></p>
                    </div>
                </div>
                <div className='copy'>
                    <p>©2024 Todos os direitos reservados a CLAV</p>
                </div>
            </div>
        </>
    )
}

export default Footer
