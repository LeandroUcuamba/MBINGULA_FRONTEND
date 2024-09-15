import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Create.css';

function CreateFuncionario() {
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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/sectores')
      .then(response => {
        setSectores(response.data);
      })
      .catch(error => {
        console.log("Erro ao buscar sectores:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:3000/create-funcionario', values)
        .then(res => {
          navigate('/Back-office/pages/funcionario');
        })
        .catch(err => console.log(err));
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!values.name) newErrors.name = "* campo obrigatório";
    if (!values.morada) newErrors.morada = "* campo obrigatório";
    if (!values.bilheteidentidade) newErrors.bilheteidentidade = "* campo obrigatório";
    if (!values.telefone) newErrors.telefone = "* campo obrigatório";
    if (!values.cargo) newErrors.cargo = "* campo obrigatório";
    if (!values.salario) newErrors.salario = "* campo obrigatório";
    if (!values.sectorId) newErrors.sectorId = "* campo obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-black vh-100'>
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2>Cadastrar Funcionário</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-row">
            <div className="mb-2">
              <label htmlFor="name">Nome:</label>
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                placeholder="Digite o nome" 
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>
            <div className="mb-2">
              <label htmlFor="morada">Morada:</label>
              <input 
                type="text" 
                name="morada" 
                className="form-control" 
                placeholder="Digite a sua Morada" 
                value={values.morada}
                onChange={handleChange}
              />
              {errors.morada && <small className="text-danger">{errors.morada}</small>}
            </div>
          </div>
          <div className="form-row">
            <div className="mb-2">
              <label htmlFor="bilheteidentidade">Bilhete de Identidade:</label>
              <input 
                type="text" 
                name="bilheteidentidade" 
                className="form-control" 
                placeholder="Digite o número do BI" 
                value={values.bilheteidentidade}
                onChange={handleChange}
              />
              {errors.bilheteidentidade && <small className="text-danger">{errors.bilheteidentidade}</small>}
            </div>
            <div className="mb-2">
              <label htmlFor="telefone">Telefone:</label>
              <input 
                type="text" 
                name="telefone" 
                className="form-control" 
                placeholder="Digite seu número" 
                value={values.telefone}
                onChange={handleChange}
              />
              {errors.telefone && <small className="text-danger">{errors.telefone}</small>}
            </div>
          </div>
          <div className="form-row">
            <div className="mb-2">
              <label htmlFor="cargo">Cargo:</label>
              <input 
                type="text" 
                name="cargo" 
                className="form-control" 
                placeholder="Digite o Cargo" 
                value={values.cargo}
                onChange={handleChange}
              />
              {errors.cargo && <small className="text-danger">{errors.cargo}</small>}
            </div>
            <div className="mb-2">
              <label htmlFor="salario">Salário:</label>
              <input 
                type="text" 
                name="salario" 
                className="form-control" 
                placeholder="Digite o Salário" 
                value={values.salario}
                onChange={handleChange}
              />
              {errors.salario && <small className="text-danger">{errors.salario}</small>}
            </div>
          </div>
          <div className="form-row">
            <div className="mb-3">
              <label>Sector:</label>
              <select 
                className="form-control" 
                name="sectorId" 
                value={values.sectorId}
                onChange={handleChange}
              >
                <option value="">Selecione um sector</option>
                {sectores.map(sector => (
                  <option key={sector.id} value={sector.id}>
                    {sector.id} - {sector.name}
                  </option>
                ))}
              </select>
              {errors.sectorId && <small className="text-danger">{errors.sectorId}</small>}
            </div>
          </div>
          <button className="btn btn-success">Criar</button>
          <Link to="/Back-office/pages/funcionario" className="btn btn-primary">Voltar</Link>
        </form>
      </div>
    </div>
  );
}

export default CreateFuncionario;
