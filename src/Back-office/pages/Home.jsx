import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, Bar, Line, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, RadialLinearScale } from 'chart.js';

ChartJS.register(
    ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, 
    PointElement, LineElement, RadialLinearScale
);

function Home() {
    const [mesas, setMesas] = useState(0);
    const [pedidosDoDia, setPedidosDoDia] = useState(0);
    const [itemsCardapio, setItemsCardapio] = useState(0);
    const [users, setUsers] = useState(0);

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

        const fetchItemsCardapio = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getItemsCardapio');
                const items = response.data;
                setItemsCardapio(items.length);
            } catch (error) {
                console.error('Erro ao buscar os itens do cardápio:', error);
            }
        };

        const fetchAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getAllUsers');
                const users = response.data;
                setUsers(users.length);
            } catch (error) {
                console.error('Erro ao buscar os utilizadores:', error);
            }
        };

        fetchMesas();
        fetchPedidosDoDia();
        fetchItemsCardapio();
        fetchAllUsers();
    }, []);

    const pieData = {
        labels: ['Mesas', 'Pedidos do Dia', 'Items Cardápio', 'Utilizadores'],
        datasets: [
            {
                label: 'Dados do Restaurante',
                data: [mesas, pedidosDoDia, itemsCardapio, users],
                backgroundColor: ['#4caf50', '#2196f3', '#ff5722', '#ffc107'],
                borderColor: ['#388e3c', '#1976d2', '#d84315', '#ffa000'],
                borderWidth: 1,
            },
        ],
    };

    const barData = {
        labels: ['Mesas', 'Pedidos do Dia', 'Items Cardápio', 'Utilizadores'],
        datasets: [
            {
                label: 'Dados do Restaurante',
                data: [mesas, pedidosDoDia, itemsCardapio, users],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: ['Mesas', 'Pedidos do Dia', 'Items Cardápio', 'Utilizadores'],
        datasets: [
            {
                label: 'Tendência dos Dados',
                data: [mesas, pedidosDoDia, itemsCardapio, users],
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1,
            },
        ],
    };

    const radarData = {
        labels: ['Mesas', 'Pedidos do Dia', 'Items Cardápio', 'Utilizadores'],
        datasets: [
            {
                label: 'Distribuição dos Dados',
                data: [mesas, pedidosDoDia, itemsCardapio, users],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
            },
        ],
    };

    return (
        <div className='p-5 bg-white'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-table fs-1 text-success'></i>
                            <div>
                                <span>Mesas</span>
                                <h2>{mesas}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-cash fs-1 text-primary'></i>
                            <div>
                                <span>Pedidos do dia</span>
                                <h2>{pedidosDoDia}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
                        <div className=' d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-book fs-3 text-danger'></i>
                            <div>
                                <span>Items cardápio</span>
                                <h2>{itemsCardapio}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-person fs-1 text-warning '></i>
                            <div>
                                <span>Utilizadores</span>
                                <h2>{users}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Pizza</h3>
                            <Pie data={pieData} />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Barras</h3>
                            <Bar data={barData} />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Linha</h3>
                            <Line data={lineData} />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Radar</h3>
                            <Radar data={radarData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;