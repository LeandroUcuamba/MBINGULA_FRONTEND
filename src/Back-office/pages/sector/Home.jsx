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
    axios.get('http://localhost:3000/sectores')
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
      axios.delete(`http://localhost:3000/delete-sector/${selectedId}`)
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
          <h1>Sectores</h1>
          <div className='custom-container'>
            <div className='button-container'>
              <div className='right-buttons'>
                <Link to="/Back-office/pages/sector/create" className='btn btn-success'>Cadastrar +</Link>
              </div>
            </div>
            <div className="sector-list">
              {data.map((d, i) => (
                <div key={i} className="sector-item">
                  <p><strong>ID:</strong> {d.id}</p>
                  <p><strong>Nome:</strong> {d.name}</p>
                  <p><strong>Descrição:</strong> {d.descricao}</p>
                  <div className="button-group">
                    <Link to={`/Back-office/pages/sector/read/${d.id}`} className='btn-sm btn-info'>
                      <i className="bi bi-eye"></i>
                    </Link>
                    <Link to={`/Back-office/pages/sector/update/${d.id}`} className='btn-sm btn-primary'>
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
        <Modal.Body>Tem certeza que deseja deletar este sector?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={confirmDelete}>Deletar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sector deletado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
