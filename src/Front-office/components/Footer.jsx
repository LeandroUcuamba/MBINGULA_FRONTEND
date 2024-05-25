import React from 'react'
import ondas from '/ondas.svg'
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
                    <div className='horario'>
                        <h4>Horário</h4>
                        <p>Todos dias</p>
                        <p>8:00 até 22:00</p>
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
