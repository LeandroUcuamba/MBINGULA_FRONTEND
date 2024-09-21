import './App.css'
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import Home from './Front-office/pages/Home/Home.jsx';
import Sobre from './Front-office/pages/Sobre/Sobre.jsx';
import Comida from './Front-office/components/comida/Comida.jsx';
import Bebida from './Front-office/components/bebida/Bebidas.jsx'
import Reserva from './Front-office/components/reserva/Reserva.jsx';
import LoginRegisterForm from './Front-office/components/LoginRegisterForm.jsx';
import App_BackOffice from './Back-office/App_BackOffice.jsx';
{/* Back-office - Funcionario*/}
import HomeFuncionario from './Back-office/pages/funcionario/Home.jsx'
import CreateFuncionario from './Back-office/pages/funcionario/Create.jsx'
import ReadFuncionario from './Back-office/pages/funcionario/Read.jsx'
import UpdateFuncionario from './Back-office/pages/funcionario/Update.jsx'
import ReadFuncionarioByFilter from './Back-office/pages/funcionario/ReadByFilter.jsx'
{/* Back-office - Fornecedores*/}
import HomeFornecedor from './Back-office/pages/fornecedor/Home.jsx';
import CreateFornecedor from './Back-office/pages/fornecedor/Create.jsx'
import ReadFornecedor from './Back-office/pages/fornecedor/Read.jsx'
import UpdateFornecedor from './Back-office/pages/fornecedor/Update.jsx'
import ReadFornecedorByFilter from './Back-office/pages/fornecedor/ReadByFilter.jsx'
{/* Back-office - Produto*/}
import HomeProduto from './Back-office/pages/produto/Home.jsx';
import CreateProduto from './Back-office/pages/produto/Create.jsx'
import ReadProduto from './Back-office/pages/produto/Read.jsx'
import UpdateProduto from './Back-office/pages/produto/Update.jsx'
import ReadProdutoByFilter from './Back-office/pages/produto/ReadByFilter.jsx'

function App() {
  return (

    <div>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pages/Sobre/Sobre" element={<Sobre />}></Route>
            <Route path="/components/comida/Comida" element={<Comida />}></Route>
            <Route path="/components/bebida/Bebida" element={<Bebida />}></Route>
            <Route path="/components/reserva/Reserva" element={<Reserva />}></Route>
            <Route path="/Front-office/components/LoginRegisterForm" element={<LoginRegisterForm />}></Route>
            <Route path="/Back-office/App_BackOffice" element={<App_BackOffice />}></Route>
            {/* Back-office - Funcionario*/}
            <Route path="/Back-office/pages/funcionario" element={<HomeFuncionario />}></Route>
            <Route path="/Back-office/pages/funcionario/create" element={<CreateFuncionario />}></Route>
            <Route path="/Back-office/pages/funcionario/read/:id" element={<ReadFuncionario />}></Route>
            <Route path="/Back-office/pages/funcionario/update/:id" element={<UpdateFuncionario />}></Route>
            <Route path="/Back-office/pages/funcionarioFilter" element={<ReadFuncionarioByFilter />}></Route>
            {/* Back-office - Fornecedores*/}
            <Route path="/Back-office/pages/fornecedor" element={<HomeFornecedor />}></Route>
            <Route path="/Back-office/pages/fornecedor/create" element={<CreateFornecedor />}></Route>
            <Route path="/Back-office/pages/fornecedor/read/:id" element={<ReadFornecedor />}></Route>
            <Route path="/Back-office/pages/fornecedor/update/:id" element={<UpdateFornecedor />}></Route>
            <Route path="/Back-office/pages/fornecedorFilter" element={<ReadFornecedorByFilter />}></Route>
            {/* Back-office - Produto*/}
            <Route path="/Back-office/pages/produto" element={<HomeProduto />}></Route>
            <Route path="/Back-office/pages/produto/create" element={<CreateProduto />}></Route>
            <Route path="/Back-office/pages/produto/read/:id" element={<ReadProduto />}></Route>
            <Route path="/Back-office/pages/produto/update/:id" element={<UpdateProduto />}></Route>
            <Route path="/Back-office/pages/produtoFilter" element={<ReadProdutoByFilter />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App;