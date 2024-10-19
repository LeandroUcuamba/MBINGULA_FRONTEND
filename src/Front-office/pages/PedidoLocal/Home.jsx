import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PedidoLocal() {
  const [data, setData] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/getAllPedidoLocal')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

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
          <div className='custom-container'>
          <div className='button-container'>
              <div className='left-buttons'>
                <Link to="/Front-office/pages/PedidoLocalFilter" className='btn btn-search'>
                  <i className="bi bi-search"></i> Pesquisar Por
                </Link>
              </div>
              <div className='right-buttons'>
                <Link to="/Front-office/pages/PedidoLocal/Create" className='btn btn-success'>Fazer pedido +</Link>
              </div>
            </div>
            <div className="pedido-local-list">
              {data.map((pedido, i) => (
                <div key={i} className="pedido-local-item border rounded p-3 mb-3">
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
                            backgroundColor: pedido.status === 'em preparação' ? 'rgba(255, 165, 0, 0.2)' : pedido.status === 'pronto a levantar' ? 'rgba(0, 128, 0, 0.2)' : 'transparent',
                            padding: '5px',
                            borderRadius: '5px',
                            marginLeft: '4px'
                            }}>
                            {pedido.status}
                        </span>
                      </p>
                      <p><strong>Número da Mesa:</strong> {pedido.numeroMesa}</p>
                      <p><strong>Cliente:</strong> {pedido.userName}</p>
                      <p><strong>Telefone:</strong> {pedido.userPhone}</p>
                      <p><strong>Solicitado em:</strong> {new Date(pedido.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="button-group mt-3">
                    <Link to={`/Front-office/pages/PedidoLocal/Update/${pedido.id}`} className='btn-sm btn-primary'>
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <button onClick={() => handleDelete(pedido.id)} className='btn-sm btn-danger'>
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

export default PedidoLocal;