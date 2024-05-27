import React, { useState } from 'react'
import axios from 'axios'

const LoginRegisterForm = () => {
    const [values, setValues] = useState({
        phone: '',
        password: ''
    });

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/sign-in', values)
          .then(res => console.log(res))
          .then(err => console.log(err));
    }

    return (
        <>
            <div className="div-main">
                <div className="main1">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="login">
                        <form className="form" onSubmit={handleSubmit}>

                            <h1>Login</h1>

                            <input className="input" id="telSign" type="tel" name="tel" placeholder="Telefone" required="" 
                              onChange={e => setValues({...values, phone: e.target.values})} />
                            <input className="input" id="passwordSign" type="password" name="password" placeholder="Password" required="" 
                              onChange={e => setValues({...values, password: e.target.value})} />
                            
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

                            <input className="input" type="text" name="txt" placeholder="Nome" required />
                            <input className="input" type="email" name="email" placeholder="Email" required />
                            <input className="input" type="number" name="pswd" placeholder="Telefone" required />
                            <input className="input" type="password" name="pswd" placeholder="Senha" required />

                            <button>Registrar</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegisterForm
