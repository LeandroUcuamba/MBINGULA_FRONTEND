import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [mesas, setMesas] = useState(0);
    const [pedidosDoDia, setPedidosDoDia] = useState(0);

    useEffect(() => {
        const fetchMesas = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getAllMesas');
                const data = response.data;
                setMesas(data.length);
            } catch (error) {
                console.error('Erro ao buscar as mesas:', error);
            }
        };

        const fetchPedidosDoDia = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getAllPedidoLocal');
                const pedidos = response.data;

                const hoje = new Date();
                const dataAtual = hoje.toISOString().split('T')[0];

                const pedidosFiltrados = pedidos.filter(pedido => 
                    pedido.created_at.split('T')[0] === dataAtual
                );

                setPedidosDoDia(pedidosFiltrados.length);
            } catch (error) {
                console.error('Erro ao buscar os pedidos do dia:', error);
            }
        };

        fetchMesas();
        fetchPedidosDoDia();
    }, []);

    return (
        <div className='p-5 bg-white'>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-currency-dollar fs-1 text-success'></i>
                            <div>
                                <span>Mesas</span>
                                <h2>{mesas}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-truck fs-1 text-primary'></i>
                            <div>
                                <span>Pedidos do dia</span>
                                <h2>{pedidosDoDia}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white'>
                        <div className=' d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-graph-up-arrow fs-3 text-bg-danger'></i>
                            <div>
                                <span>Atividades</span>
                                <h2>20%</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-white'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-truck fs-1 text-warning '></i>
                            <div>
                                <span>Cardápio</span>
                                <h2>240</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
