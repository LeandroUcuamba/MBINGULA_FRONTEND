import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {
    const [data, setData] = useState({});
    const [sector, setSector] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // Obter detalhes do funcionário
        axios.get(`http://localhost:3000/get-funcionario/${id}`)
            .then(res => {
                setData(res.data);
                // Obter detalhes do setor
                if (res.data.Sector && res.data.Sector.name) {
                    axios.get(`http://localhost:3000/sectores`)
                        .then(sectorRes => {
                            const sectorData = sectorRes.data.find(sector => sector.name === res.data.Sector.name);
                            setSector(sectorData);
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
                <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                    <h3>Detail of Funcionario</h3>
                    <div className="mb-2">
                        <strong>ID: {data.id}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Nome: {data.name}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Morada: {data.morada}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Bilhete Identidade: {data.bilheteidentidade}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Telefone: {data.telefone}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Cargo: {data.cargo}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Salário: {data.salario}</strong>
                    </div>
                    <div className="mb-2">
                        <strong>Sector: {sector ? sector.name : 'Loading...'}</strong>
                    </div>
                    <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Read;
