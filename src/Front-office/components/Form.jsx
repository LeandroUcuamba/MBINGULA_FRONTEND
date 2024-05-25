import React from 'react'

const Form = () => {
    return (
        <>
            <div className="div-main">
                <div className="main1">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="login">
                        <form className="form">

                            <h1>Login</h1>

                            <input className="input" type="email" name="email" placeholder="Email" required="" />
                            <input className="input" type="password" name="pswd" placeholder="Password" required="" />
                            
                            <button>Entrar</button>
                            
                            <div className='div-Nconta'>
                            <p className='N-conta'>Não tem uma conta?</p>
                            <label className="abrir-logout" htmlFor="chk" aria-hidden="true">registra-se</label>
                            </div>
                        </form>

                    </div>

                    <div className="register">
                        <form className="form1">

                            <div className='fechar-registrar'>
                                <label className='fechar-registrar1' htmlFor="chk" aria-hidden="true"><i className='bx bx-x bx-tada'></i></label>
                            </div>

                            <h1>SignUp</h1>

                            <input className="input" type="text" name="txt" placeholder="Nome" required="" />
                            <input className="input" type="email" name="email" placeholder="Email" required="" />
                            <input className="input" type="number" name="pswd" placeholder="Telefone" required="" />
                            <input className="input" type="password" name="pswd" placeholder="Senha" required="" />

                            <button>SignUp</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
