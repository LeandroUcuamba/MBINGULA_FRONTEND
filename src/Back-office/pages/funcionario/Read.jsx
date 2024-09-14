import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {
    const [data, setData] = useState({});
    const [sector, setSector] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/get-funcionario/${id}`)
            .then(res => {
                setData(res.data);
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
        <div className='d-flex flex-column justify-content-center align-items-center bg-dark vh-100'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 border bg-white shadow px-4 py-5 rounded">
                        <h3 className="text-center">Dados do funcionário</h3>
                        <div className="mb-2 mt-4">
                            <strong className="orange-text">ID: </strong> {data.id}
                        </div>
                        <div className="mb-2">
                            <strong className="orange-text">Nome: </strong> {data.name}
                        </div>
                        <div className="mb-2">
                            <strong className="orange-text">Morada: </strong> {data.morada}
                        </div>
                        <div className="mb-2">
                            <strong className="orange-text">Bilhete Identidade: </strong> {data.bilheteidentidade}
                        </div>
                        <div className="mb-2">
                            <strong className="orange-text">Telefone: </strong> {data.telefone}
                        </div>
                        <div className="mb-2">
                            <strong className="orange-text">Cargo: </strong> {data.cargo}
                        </div>
                        <div className="mb-2">
                            <strong className="orange-text">Salário: </strong> {data.salario}
                        </div>
                        <div className="mb-2">
                            <strong className="orange-text">Sector: </strong> {sector ? sector.name : 'Loading...'}
                        </div>
                        <div className="text-center">
                            <Link to="/Back-office/pages/funcionario" className='btn btn-primary mt-3'>Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Read;
