import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function PedidoLocal() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/getAllPedidoLocal')
      .then(res => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const Toggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    if (value === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(pedido =>
        pedido.userName.toLowerCase().includes(value.toLowerCase()) || 
        pedido.userPhone.includes(value)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="home-container">
      <div className={toggle ? "d-none" : "sidebar-container"}>
        <Sidebar />
      </div>
      <div className={toggle ? "d-none" : "sidebar-invisible"}>
        <Sidebar />
      </div>
      <div className='content'>
        <Navbar Toggle={Toggle} />
        <div className='content-inner'>
          <h1>Pedidos Locais</h1>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filtrar por nome ou telefone"
            className="form-control mb-3"
            style={{ width: '50%' }}
          />
          <div className='custom-container'>
            <div className="pedido-list">
              {filteredData.map((pedido, i) => (
                <div key={i} className="pedido-item">
                  <p><strong>Número do Pedido:</strong> {pedido.numeroPedido}</p>
                  <p><strong>Nome do Usuário:</strong> {pedido.userName}</p>
                  <p><strong>Telefone do Usuário:</strong> {pedido.userPhone}</p>
                  <p><strong>Número da Mesa:</strong> {pedido.numeroMesa}</p>
                  <p><strong>Tipo de Consumo:</strong> {pedido.tipoConsumo}</p>
                  <p><strong>Valor Total:</strong> {pedido.valorTotal} KZ</p>
                  <p><strong>Itens do Pedido:</strong> {pedido.itemsPedido}</p>
                  <p><strong>Método de Pagamento:</strong> {pedido.metodoPagamento}</p>
                  <p>
                  <strong>Status:</strong> 
                  <span className={pedido.status === 'em preparação' ? 'status-em-preparacao' : 'status-outro'}>
                     {pedido.status}
                  </span>
                  </p>
                  <p><strong>Data da Criação:</strong> {formatDate(pedido.created_at)}</p>
                  <p><strong>Data do Último Acesso:</strong> {formatDate(pedido.updated_at)}</p>
                  <div className="button-group">
                    <Link to={`/Back-office/pages/PedidoLocal/update/${pedido.id}`} className='btn-sm btn-primary'>
                      <i className="bi bi-pencil"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PedidoLocal;