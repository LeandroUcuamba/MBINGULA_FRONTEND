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
{/* Back-office - Estoque*/}
import HomeEstoque from './Back-office/pages/estoque/Home.jsx';
import CreateEstoque from './Back-office/pages/estoque/Create.jsx'
import ReadEstoque from './Back-office/pages/estoque/Read.jsx'
import UpdateEstoque from './Back-office/pages/estoque/Update.jsx'
import ReadEstoqueByFilter from './Back-office/pages/estoque/ReadByFilter.jsx'
import UpdateQtdEstoque from './Back-office/pages/estoque/UpdateQtdEstoque.jsx'
{/* Back-office - Atividade*/}
import HomeAtividadeCasa from './Back-office/pages/atividadeCasa/Home.jsx';
import CreateAtividadeCasa from './Back-office/pages/atividadeCasa/Create.jsx'
import ReadAtividadeCasa from './Back-office/pages/atividadeCasa/Read.jsx'
import UpdateAtividadeCasa from './Back-office/pages/atividadeCasa/Update.jsx'
{/* Back-office - Sector*/}
import HomeSector from './Back-office/pages/sector/Home.jsx';
import CreateSector from './Back-office/pages/sector/Create.jsx'
import ReadSector from './Back-office/pages/sector/Read.jsx'
import UpdateSector from './Back-office/pages/sector/Update.jsx'
{/* Back-office - Mesa*/}
import HomeMesa from './Back-office/pages/mesa/Home.jsx'
import CreateMesa from './Back-office/pages/mesa/Create.jsx'
import ReadMesa from './Back-office/pages/mesa/Read.jsx'
import UpdateMesa from './Back-office/pages/mesa/Update.jsx'
import ReadMesaByFilter from './Back-office/pages/mesa/ReadByFilter.jsx'


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
            {/* Back-office - Estoque*/}
            <Route path="/Back-office/pages/estoque" element={<HomeEstoque />}></Route>
            <Route path="/Back-office/pages/estoque/create" element={<CreateEstoque />}></Route>
            <Route path="/Back-office/pages/estoque/read/:id" element={<ReadEstoque />}></Route>
            <Route path="/Back-office/pages/estoque/update/:id" element={<UpdateEstoque />}></Route>
            <Route path="/Back-office/pages/estoqueFilter" element={<ReadEstoqueByFilter />}></Route>
            <Route path="/Back-office/pages/updateQtdEstoque/:id" element={<UpdateQtdEstoque />}></Route>
            {/* Back-office - Atividade*/}
            <Route path="/Back-office/pages/atividade" element={<HomeAtividadeCasa />}></Route>
            <Route path="/Back-office/pages/atividade/create" element={<CreateAtividadeCasa />}></Route>
            <Route path="/Back-office/pages/atividade/read/:id" element={<ReadAtividadeCasa />}></Route>
            <Route path="/Back-office/pages/atividade/update/:id" element={<UpdateAtividadeCasa />}></Route>
            {/* Back-office - Sector*/}
            <Route path="/Back-office/pages/sector" element={<HomeSector />}></Route>
            <Route path="/Back-office/pages/sector/create" element={<CreateSector />}></Route>
            <Route path="/Back-office/pages/sector/read/:id" element={<ReadSector />}></Route>
            <Route path="/Back-office/pages/sector/update/:id" element={<UpdateSector />}></Route>
            {/* Back-office - Mesa*/}
            <Route path="/Back-office/pages/mesa" element={<HomeMesa />}></Route>
            <Route path="/Back-office/pages/mesa/create" element={<CreateMesa />}></Route>
            <Route path="/Back-office/pages/mesa/read/:id" element={<ReadMesa />}></Route>
            <Route path="/Back-office/pages/mesa/update/:id" element={<UpdateMesa />}></Route>
            <Route path="/Back-office/pages/mesaFilter" element={<ReadMesaByFilter />}></Route>

        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App;