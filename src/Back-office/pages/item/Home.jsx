import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/getItemsCardapio')
      .then(res => setData(res.data))
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

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    if (selectedId) {
      axios.delete(`http://localhost:3000/delete-itemCardapio/${selectedId}`)
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
      <div className={toggle ? "d-none" : "sidebar-container"}>
        <Sidebar />
      </div>
      <div className={toggle ? "d-none" : "sidebar-invisible"}>
        <Sidebar />
      </div>
      <div className='content'>
        <Navbar Toggle={Toggle} />
        <div className='content-inner'>
          <h1>Itens do Cardápio</h1>
          <div className='custom-container'>
            <div className='button-container'>
              <div className='left-buttons'>
                <Link to="/Back-office/pages/item/itemFilter" className='btn btn-search'>
                  <i className="bi bi-search"></i> Pesquisar Por
                </Link>
              </div>
              <div className='right-buttons'>
                <Link to="/Back-office/pages/item/create" className='btn btn-success'>Cadastrar +</Link>
              </div>
            </div>
            <div className="item-list">
              {data.map((d, i) => (
                <div key={i} className="item-cardapio">
                  <img 
                    src={`http://localhost:3000/images/${d.Image[0]?.path}`} 
                    alt={d.name} 
                    className="item-image"
                  />
                  <p><strong>ID:</strong> {d.id}</p>
                  <p><strong>Nome:</strong> {d.name}</p>
                  <p><strong>Preço:</strong> {d.price}</p>
                  <p><strong>Categoria:</strong> {d.categoria}</p>
                  <p><strong>Disponível:</strong> {d.disponivel}</p>
                  <div className="button-group">
                    <Link to={`/Back-office/pages/item/update/${d.id}`} className='btn-sm btn-primary'>
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <button onClick={() => handleDelete(d.id)} className='btn-sm btn-danger'>
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
        <Modal.Body>Tem certeza que deseja deletar este item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={confirmDelete}>Deletar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Item deletado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
