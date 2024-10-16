import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReadAvailableTable.css';

function Mesa() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/getAllAvailableTable')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <div className='content'>
        <div className='content-inner'>
          <h1>Mesas disponíveis para reservar:</h1>
          <div className='custom-container'>
            <div className='button-container'>
              <div className='left-buttons'>
                <Link to="/Front-office/pages/mesaReservada" className='btn btn-search'>
                  <i className="bi bi-arrow-left-circle"></i> Voltar
                </Link>
              </div>
              <div className='right-buttons'>
                <Link to="/" className='btn btn-success'>Reservar +</Link>
              </div>
            </div>
            <div className="mesa-list">
              <table className="table">
                <thead>
                  <tr>
                    <th>Número</th>
                    <th>Lugares</th>
                    <th>Posição</th>
                    <th>Status de Ocupação</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.numero}</td>
                      <td>{d.lugares}</td>
                      <td>{d.posicao}</td>
                      <td>{d.statusOcupacao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mesa;
