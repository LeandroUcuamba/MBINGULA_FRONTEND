import React, { useContext, useState, useEffect } from 'react'
import api from '../../service/api'
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginRegisterForm = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const accessName = "normal";
   
   const [registrationSuccess, setRegistrationSuccess] = useState(false);
   const [alertText, setAlertText] = useState("");
   const [errorText, setErrorText] = useState("");

   const { signIn, signed } = useContext(AuthContext);

   const handleSaveUser = async (e) => {

      if (!name || !email || !phone || !password) {
        setErrorText("Todos os campos são obrigatórios.");
        setTimeout(() => setErrorText(""), 10000);
        return;
      }

      if (!email.includes("@")) {
        setErrorText("Este email não é valido.");
        setTimeout(() => setErrorText(""), 10000);
        return;
      }

      if (!phone.startsWith("9") || phone.length !== 9) {
        setErrorText("O telefone deve começar com '9' e ter apenas 9 dígitos.");
        setTimeout(() => setErrorText(""), 10000);
        return;
      }

      e.preventDefault();
      const data = {
        name, email, phone, password, accessName
      }
      try {
        await api.post("/user", data);
        setRegistrationSuccess(true);
        setAlertText("Criado com sucesso!");
        location.reload();
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
      }
   }

   useEffect(() => {
     let timer;
     if (registrationSuccess) {
       timer = setTimeout(() => {
         setRegistrationSuccess(false);
         setAlertText("");
       }, 4000);
     }
     return () => clearTimeout(timer);
   }, [registrationSuccess]);

   const handleSignIn = async (e) => {
     e.preventDefault();
     const data = {
       phone,
       password,
     };
     await signIn(data);
   };
    
    if(signed){
      return <Navigate to="/" />
    } else
    {

      return (
          <div id='login-register'>
              <div className="div-main">
                  <div className="main1">
                      <input type="checkbox" id="chk" aria-hidden="true" />

                      <div className="login">
                          <form className="form" onSubmit={handleSignIn}>

                              <h1>Login</h1>

                              <input className="input" id="telSign" type="tel" name="tel" placeholder="Telefone" required="" autoComplete='off' 
                                onChange={(e) => setPhone(e.target.value)} />
                              <input className="input" id="passwordSign" type="password" name="password" placeholder="Password" required="" autoComplete='off' 
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

                              <input className="input" type="text" name="txt" placeholder="Nome" required="" autoComplete='off'
                                onChange={(e) => setName(e.target.value)} />
                              <input className="input" type="email" name="email" placeholder="Email" required="" autoComplete='off'
                                onChange={(e) => setEmail(e.target.value)} />
                              <input className="input" type="number" name="pswd" placeholder="Telefone" required="" autoComplete='off'
                                onChange={(e) => setPhone(e.target.value)} />
                              <input className="input" type="password" name="pswd" placeholder="Senha" required="" autoComplete='off'
                                onChange={(e) => setPassword(e.target.value)} />

                              <button type='submit'>Registrar</button>
                              {registrationSuccess && (
                                  <div className="alert alert-success" role="alert">
                                      {alertText}
                                  </div>
                              )}
                              {errorText && (
                                <div className="alert alert-danger" role="alert">
                                    {errorText}
                                </div>
                              )}

                          </form>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}

export default LoginRegisterForm
