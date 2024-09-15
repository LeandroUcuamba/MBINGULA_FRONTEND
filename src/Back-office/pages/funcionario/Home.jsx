import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  const [data, setData] = useState([]);
  const [sectores, setSectores] = useState([]);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/getAllFuncionarios')
      .then(res => setData(res.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:3000/sectores')
      .then(res => setSectores(res.data))
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

  const getSectorNameById = (id) => {
    const sector = sectores.find(sector => sector.id === id);
    return sector ? sector.name : 'Desconhecido';
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete this?");
    if (confirm) {
      axios.delete(`http://localhost:3000/delete-funcionario/${id}`)
        .then(res => {
          location.reload();
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="d-flex">
      <div className={toggle ? "d-none" : "w-auto position-fixed"}>
        <Sidebar />
      </div>
      <div className={toggle ? "d-none" : "invisible"}>
        <Sidebar />
      </div>
      <div className='col overflow-auto'>
        <Navbar Toggle={Toggle} />
        <div className='d-flex flex-column justify-content-center align-items-center bg-black vh-100'>
          <h1>Funcionários</h1>
          <div className='w-100 rounded bg-black border shadow p-4 custom-container'>
            <div className='d-flex justify-content-end mb-3'>
              <Link to="/Back-office/pages/funcionario/create" className='btn btn-success'>Cadastrar +</Link>
            </div>
            <div className="d-flex flex-column">
              {
                data.map((d, i) => (
                  <div key={i} className="border p-3 mb-3 bg-light rounded">
                    <p><strong>ID:</strong> {d.id}</p>
                    <p><strong>Nome:</strong> {d.name}</p>
                    <p><strong>Morada:</strong> {d.morada}</p>
                    <p><strong>Bilhete Identidade:</strong> {d.bilheteidentidade}</p>
                    <p><strong>Telefone:</strong> {d.telefone}</p>
                    <p><strong>Cargo:</strong> {d.cargo}</p>
                    <p><strong>Salário:</strong> {d.salario}</p>
                    <p><strong>Setor:</strong> {getSectorNameById(d.sectorId)}</p>
                    <div className="d-flex mt-2">
                        <Link to={`/Back-office/pages/funcionario/read/${d.id}`} className='btn-sm btn-info me-2 flex-fill w-100 d-flex justify-content-center align-items-center'>
                          <i className="bi bi-eye"></i>
                        </Link>
                        <Link to={`/Back-office/pages/funcionario/update/${d.id}`} className='btn-sm btn-primary me-2 flex-fill w-100 d-flex justify-content-center align-items-center'>
                          <i className="bi bi-pencil"></i>
                        </Link>
                        <button onClick={() => handleDelete(d.id)} className='btn-sm btn-danger flex-fill w-100 d-flex justify-content-center align-items-center'>
                          <i className="bi bi-trash"></i>
                        </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;