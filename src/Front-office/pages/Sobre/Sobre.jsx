import React from 'react'
import about from '../../assets/about-img.png'
import Menu from '../../components/Menu'

const Sobre = () => {
    return (
        <div>
            <Menu />
            <div className="container-about  ">
                <div className="row-about">

                    <div className="img-box-about">
                        <img src={about} alt="home" />
                    </div>

                    <div className="detail-box-about">
                        <div >
                            <h2 className="heading_about">
                               Sobre Nós
                            </h2>
                            
                        </div>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus nobis aliquam necessitatibus, nemo quae dicta doloribus obcaecati aspernatur consequatur, quaerat reprehenderit ducimus perspiciatis a iure enim at veniam eveniet!
                        </p>
                        <div className='btn-about'>
                            <a className="leia-mais"><span>Leia Mais</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre
