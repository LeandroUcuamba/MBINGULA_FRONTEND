import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateStatusPedido() {
  const { id } = useParams();
  const [status, setStatus] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    
    if (!status) {
      alert("Por favor, selecione um status.");
      return;
    }

    axios.patch(`http://localhost:3000/updateStatusPedidoLocal/${id}`, { status })
      .then(res => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate('/Back-office/pages/Pedido');
        }, 3000);
      })
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className='container'>
      <div className="form-container">
        <h2>Atualizar Status do Pedido</h2>

        {showAlert && (
          <div className="alert alert-success" role="alert">
            Status atualizado com sucesso!
          </div>
        )}

        <form onSubmit={handleUpdate}>
          <div className="row">
            <div className="column">
              <label htmlFor="status">Status:</label>
              <select name="status" value={status} onChange={handleChange}>
                <option value="">Selecione um status</option>
                <option value="em preparação">Em Preparação</option>
                <option value="pronto a levantar">Pronto a Levantar</option>
              </select>
            </div>
          </div>

          <button className="btn-update">Atualizar</button>
          <Link to="/Back-office/pages/PedidoLocal" className="btn-back">Voltar</Link>
        </form>
      </div>
    </div>
  );
}

export default UpdateStatusPedido;