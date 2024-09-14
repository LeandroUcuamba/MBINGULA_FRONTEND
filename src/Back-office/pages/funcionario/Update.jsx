import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateFuncionario() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    morada: '',
    bilheteidentidade: '',
    telefone: '',
    cargo: '',
    salario: '',
    sectorId: ''
  });

  const [sectores, setSectores] = useState([]);
  const navigate = useNavigate();

  // Buscar os detalhes do funcionário e os sectores ao carregar o componente
  useEffect(() => {
    // Buscar os detalhes do funcionário
    axios.get(`http://localhost:3000/get-funcionario/${id}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));

    // Buscar os sectores
    axios.get('http://localhost:3000/sectores')
      .then(response => {
        setSectores(response.data);
      })
      .catch(error => {
        console.log("Erro ao buscar sectores:", error);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/update-funcionario/${id}`, values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Funcionario</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Nome:</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="Enter Name" 
              value={values.name} 
              onChange={e => setValues({...values, name: e.target.value})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="morada">Morada:</label>
            <input 
              type="text" 
              name="morada" 
              className="form-control" 
              placeholder="Enter Morada" 
              value={values.morada} 
              onChange={e => setValues({...values, morada: e.target.value})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="bilheteidentidade">Bilhete de Identidade:</label>
            <input 
              type="text" 
              name="bilheteidentidade" 
              className="form-control" 
              placeholder="Enter Bilhete de Identidade" 
              value={values.bilheteidentidade} 
              onChange={e => setValues({...values, bilheteidentidade: e.target.value})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="telefone">Telefone:</label>
            <input 
              type="text" 
              name="telefone" 
              className="form-control" 
              placeholder="Enter Telefone" 
              value={values.telefone} 
              onChange={e => setValues({...values, telefone: e.target.value})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="cargo">Cargo:</label>
            <input 
              type="text" 
              name="cargo" 
              className="form-control" 
              placeholder="Enter Cargo" 
              value={values.cargo} 
              onChange={e => setValues({...values, cargo: e.target.value})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="salario">Salário:</label>
            <input 
              type="text" 
              name="salario" 
              className="form-control" 
              placeholder="Enter Salário" 
              value={values.salario} 
              onChange={e => setValues({...values, salario: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label>Sector:</label>
            <select 
              className="form-control" 
              name="sectorId" 
              value={values.sectorId}
              onChange={e => setValues({...values, sectorId: e.target.value})}
            >
              <option value="">Selecione um sector</option>
              {sectores.map(sector => (
                <option key={sector.id} value={sector.id}>
                  {sector.id} - {sector.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  );
}

export default UpdateFuncionario;
