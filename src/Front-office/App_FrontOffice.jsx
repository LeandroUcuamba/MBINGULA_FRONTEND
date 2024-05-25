import './App_FrontOffice.css'
import Menu from './components/Menu.jsx';
import Home from './pages/Home/Home.jsx';
import Cardapio from './pages/Cardapio/Cardapio.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';


function App_FrontOffice() {
  return (
    <div>
      <Menu/>
      <Home/>
      <Cardapio/>
      <Sobre/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App_FrontOffice
