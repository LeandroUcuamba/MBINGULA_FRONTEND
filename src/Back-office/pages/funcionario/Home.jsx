import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
   if(confirm) {
      axios.delete(`http://localhost:3000/delete-funcionario/${id}`)
      .then(res => {
         location.reload();
      })
      .catch(err => console.log(err));
   }
  }

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
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
          <h1>List of Funcionarios</h1>
          <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
              <Link to="/Back-office/pages/funcionario/create" className='btn btn-success'>Add +</Link>
            </div>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Morada</th>
                  <th>Bilhete Identidade</th>
                  <th>telefone</th>
                  <th>cargo</th>
                  <th>salario</th>
                  <th>sector</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.morada}</td>
                      <td>{d.bilheteidentidade}</td>
                      <td>{d.telefone}</td>
                      <td>{d.cargo}</td>
                      <td>{d.salario}</td>
                      <td>{getSectorNameById(d.sectorId)}</td>
                      <td>
                           <Link to={`/Back-office/pages/funcionario/read/${d.id}`} className='btn-sm btn-info me-3 text-primary'>
                              <i className="bi bi-eye"></i>
                           </Link>
                           <Link to={`/Back-office/pages/funcionario/update/${d.id}`} className='btn-sm btn-primary me-3 text-dark'>
                              <i className="bi bi-pencil"></i>
                           </Link>
                           <button onClick={() => handleDelete(d.id)} className='btn-sm btn-danger text-danger'>
                              <i className="bi bi-trash"></i>
                           </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
