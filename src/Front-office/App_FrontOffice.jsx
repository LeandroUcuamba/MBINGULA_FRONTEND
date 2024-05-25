import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App_FrontOffice.css'
import Main from './pages/Main'
import LoginRegisterForm from '../Front-office/components/LoginRegisterForm'


function App_FrontOffice() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/Login' element={<LoginRegisterForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App_FrontOffice
