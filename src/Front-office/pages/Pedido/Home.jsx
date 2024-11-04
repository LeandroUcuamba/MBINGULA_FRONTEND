import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pedido() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('numeroPedido');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/getAllPedidoLocal')
      .then(res => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    let filtered = [];

    if (searchBy === 'numeroPedido') {
      filtered = data.filter(pedido => pedido.numeroPedido.toString().toLowerCase().includes(value));
    } else if (searchBy === 'userName') {
      filtered = data.filter(pedido => pedido.userName.toLowerCase().includes(value));
    } else if (searchBy === 'userPhone') {
      filtered = data.filter(pedido => pedido.userPhone.toLowerCase().includes(value));
    }

    setFilteredData(filtered);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    if (selectedId) {
      axios.delete(`http://localhost:3000/deletePedidoLocal/${selectedId}`)
        .then(res => {
          setShowConfirmModal(false);
          setShowSuccessModal(true);
          setTimeout(() => {
            setShowSuccessModal(false);
            location.reload();
          }, 1500);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="home-container">
      <div className='content'>
        <div className='content-inner'>
          <h1>Pedidos no Local</h1>

          <div className='filter-container mb-3'>
            <input
              type="text"
              className="form-control"
              placeholder="Filtrar por Número do Pedido, Nome ou Telefone"
              value={searchTerm}
              onChange={handleSearch}
            />

            <div className="search-options mt-3">
              <label>
                <input
                  type="radio"
                  name="searchBy"
                  value="numeroPedido"
                  checked={searchBy === 'numeroPedido'}
                  onChange={() => setSearchBy('numeroPedido')}
                />
                Número do Pedido
              </label>
              <label className="ms-3">
                <input
                  type="radio"
                  name="searchBy"
                  value="userName"
                  checked={searchBy === 'userName'}
                  onChange={() => setSearchBy('userName')}
                />
                Nome
              </label>
              <label className="ms-3">
                <input
                  type="radio"
                  name="searchBy"
                  value="userPhone"
                  checked={searchBy === 'userPhone'}
                  onChange={() => setSearchBy('userPhone')}
                />
                Telefone
              </label>
            </div>
          </div>

          <div className='custom-container'>
            <div className='button-container'>
              <div className='left-buttons'>
                <Link to="/Front-office/pages/PedidoFilter" className='btn btn-search'>
                  <i className="bi bi-search"></i> Pesquisa avançada
                </Link>
              </div>
              <div className='right-buttons'>
                <Link to="/Front-office/carrinho" className='btn btn-success'>Fazer pedido +</Link>
              </div>
            </div>

            <div className="mesa-list">
              {filteredData.map((pedido, i) => (
                <div key={i} className="mesa-item border rounded p-3 mb-3">
                  <div className="row">
                    <div className="col-md-4">
                      <p><strong>ID:</strong> {pedido.id}</p>
                      <p><strong>Número do Pedido:</strong> {pedido.numeroPedido}</p>
                      <p><strong>Tipo de Consumo:</strong> {pedido.tipoConsumo}</p>
                    </div>
                    <div className="col-md-4">
                      <p><strong>Itens do Pedido:</strong> {pedido.itemsPedido}</p>
                      <p><strong>Valor Total:</strong> {pedido.valorTotal}</p>
                      <p><strong>Método de Pagamento:</strong> {pedido.metodoPagamento}</p>
                    </div>
                    <div className="col-md-4">
                      <p><strong>Status:</strong> 
                        <span
                            style={{
                            color: pedido.status === 'em preparação' ? 'yellow' : pedido.status === 'pronto a levantar' ? 'green' : 'black',
                            backgroundColor: pedido.status === 'em preparação' ? 'rgba(0, 0, 0, 0.4)' : pedido.status === 'pronto a levantar' ? 'rgba(0, 128, 0, 0.2)' : 'transparent',
                            padding: '5px',
                            borderRadius: '5px',
                            marginLeft: '4px'
                            }}>
                            {pedido.status}
                        </span>
                      </p>
                      {pedido.numeroMesa === 41 ? (
                        <p><strong>Não local:</strong> pedido feito de casa</p>
                      ) : (
                        <p><strong>Número da Mesa:</strong> {pedido.numeroMesa}</p>
                      )}
                      <p><strong>Cliente:</strong> {pedido.userName}</p>
                      <p><strong>Telefone:</strong> {pedido.userPhone}</p>
                      <p><strong>Solicitado em:</strong> {new Date(pedido.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="button-group mt-3">
                    <Link
                        to={`/Front-office/pages/Pedido/Update/${pedido.id}`}
                        className='btn-sm btn-primary'
                        disabled={pedido.status === 'pronto a levantar'}
                        style={{ pointerEvents: pedido.status === 'pronto a levantar' ? 'none' : 'auto' }}>
                        <i className="bi bi-pencil"></i>
                    </Link>
                    <button
                        onClick={() => handleDelete(pedido.id)}
                        className='btn-sm btn-danger'
                        disabled={pedido.status === 'pronto a levantar'}>
                        <i className="bi bi-trash"></i>
                    </button>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja deletar este pedido?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={confirmDelete}>Deletar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pedido deletado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pedido;