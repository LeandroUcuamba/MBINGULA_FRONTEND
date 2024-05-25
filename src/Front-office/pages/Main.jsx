import Menu from '../components/Menu.jsx'
import Home from './Home/Home.jsx';
import Cardapio from './Cardapio/Cardapio.jsx';
import Sobre from './Sobre/Sobre.jsx';
import Footer from '../components/Footer.jsx';


function Main() {
  return (
    <div>
      <Menu/>
      <Home/>
      <Cardapio/>
      <Sobre/>
      <Footer />
    </div>
  )
}

export default Main