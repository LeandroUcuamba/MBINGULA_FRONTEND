import React, { useContext, useState } from 'react'
import api from '../../service/api'
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginRegisterForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const accessName = "normal";

   //const [phone, setPhoneLogin] = useState("");
   //const [password, setPasswordLogin] = useState("");
   const { signIn, signed } = useContext(AuthContext);

   const handleSaveUser = async (e) => {
      e.preventDefault();
      const data = {
        name, email, phone, password, accessName
      }
      await api.post("/user", data);
   }

   const handleSignIn = async (e) => {
        e.preventDefault();
        const data = {
          phone,
          password
        }

        await signIn(data);
    }
    
    if(signed){
      return <Navigate to="/" />
    } else
    {

      return (
          <>
              <div className="div-main">
                  <div className="main1">
                      <input type="checkbox" id="chk" aria-hidden="true" />

                      <div className="login">
                          <form className="form" onSubmit={handleSignIn}>

                              <h1>Login</h1>

                              <input className="input" id="telSign" type="tel" name="tel" placeholder="Telefone" required="" 
                                onChange={(e) => setPhone(e.target.value)} />
                              <input className="input" id="passwordSign" type="password" name="password" placeholder="Password" required="" 
                                onChange={(e) => setPassword(e.target.value)} />
                              
                              <button type='submit'>Entrar</button>
                              
                              <div className='div-Nconta'>
                              <p className='N-conta'>Não tem uma conta?</p>
                              <label className="abrir-logout" htmlFor="chk" aria-hidden="true">registra-se</label>
                              </div>
                          </form>

                      </div>

                      <div className="register">
                          <form className="form1" onSubmit={handleSaveUser}>

                              <div className='fechar-registrar'>
                                  <label className='fechar-registrar1' htmlFor="chk" aria-hidden="true"><i className='bx bx-x bx-tada'></i></label>
                              </div>

                              <h1>SignUp</h1>

                              <input className="input" type="text" name="txt" placeholder="Nome" required 
                                onChange={(e) => setName(e.target.value)} />
                              <input className="input" type="email" name="email" placeholder="Email" required 
                                onChange={(e) => setEmail(e.target.value)} />
                              <input className="input" type="number" name="pswd" placeholder="Telefone" required 
                                onChange={(e) => setPhone(e.target.value)} />
                              <input className="input" type="password" name="pswd" placeholder="Senha" required 
                                onChange={(e) => setPassword(e.target.value)} />

                              <button type='submit'>Registrar</button>

                          </form>
                      </div>
                  </div>
              </div>
          </>
      )
    }
}

export default LoginRegisterForm
