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
    const [pedidos, setPedidos] = useState([]);
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [valorTotalIntervalo, setValorTotalIntervalo] = useState(0);
    const [itemMaisSolicitado, setItemMaisSolicitado] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseMesas = await axios.get('http://localhost:3000/getAllMesas');
                setMesas(responseMesas.data.length);

                const responsePedidos = await axios.get('http://localhost:3000/getAllPedidoLocal');
                const pedidos = responsePedidos.data;
                setPedidos(pedidos);

                const hoje = new Date();
                const dataAtual = hoje.toISOString().split('T')[0];
                const pedidosFiltrados = pedidos.filter(pedido => pedido.created_at.split('T')[0] === dataAtual);
                setPedidosDoDia(pedidosFiltrados.length);

                const responseItems = await axios.get('http://localhost:3000/getItemsCardapio');
                setItemsCardapio(responseItems.data.length);

                const responseUsers = await axios.get('http://localhost:3000/getAllUsers');
                setUsers(responseUsers.data.length);

                const itemCounts = pedidos.reduce((acc, pedido) => {
                    const items = pedido.itemsPedido.split(',');
                    items.forEach(item => {
                        const [quantity, name] = item.trim().split(' x ');
                        const itemName = name.trim();

                        acc[itemName] = (acc[itemName] || 0) + parseInt(quantity);
                    });
                    return acc;
                }, {});

                setItemMaisSolicitado(itemCounts);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    const calcularValorTotalIntervalo = () => {
        const fim = new Date(dataFim);
        fim.setDate(fim.getDate() + 1);
    
        const total = pedidos.reduce((acc, pedido) => {
            const dataPedido = new Date(pedido.created_at);
            const inicio = new Date(dataInicio);
    
            if (dataPedido >= inicio && dataPedido < fim) {
                return acc + parseFloat(pedido.valorTotal);
            }
            return acc;
        }, 0);
        setValorTotalIntervalo(total);
    };

    const tipoConsumoCounts = pedidos.reduce((acc, pedido) => {
        acc[pedido.tipoConsumo] = (acc[pedido.tipoConsumo] || 0) + 1;
        return acc;
    }, {});

    const valorTotalPorTipoConsumo = pedidos.reduce((acc, pedido) => {
        acc[pedido.tipoConsumo] = (acc[pedido.tipoConsumo] || 0) + parseFloat(pedido.valorTotal);
        return acc;
    }, {});

    const valorTotalPorMetodoPagamento = pedidos.reduce ((acc, pedido) => {
        acc[pedido.metodoPagamento] = (acc[pedido.metodoPagamento] || 0) + parseFloat(pedido.valorTotal);
        return acc;
    }, {});

    const metodoPagamentoCounts = pedidos.reduce((acc, pedido) => {
        acc[pedido.metodoPagamento] = (acc[pedido.metodoPagamento] || 0) + 1;
        return acc;
    }, {});

    const pieData = {
        labels: Object.keys(tipoConsumoCounts),
        datasets: [
            {
                label: 'Tipo de Consumo',
                data: Object.values(tipoConsumoCounts),
                backgroundColor: ['#4caf50', '#2196f3', '#ff5722'],
                borderColor: ['#388e3c', '#1976d2', '#d84315'],
                borderWidth: 1,
            },
        ],
    };

    const barDataTipoConsumo = {
        labels: Object.keys(valorTotalPorTipoConsumo),
        datasets: [
            {
                label: 'Valor Total por Tipo de Consumo',
                data: Object.values(valorTotalPorTipoConsumo),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barDataMetodoPagamento = {
        labels: Object.keys(valorTotalPorMetodoPagamento),
        datasets: [
            {
                label: 'Valor Total por Método de Pagamento',
                data: Object.values(valorTotalPorMetodoPagamento),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: pedidos.map(pedido => new Date(pedido.created_at).toLocaleDateString()),
        datasets: [
            {
                label: 'Tendência de Pedidos ao Longo do Tempo',
                data: pedidos.map(pedido => parseFloat(pedido.valorTotal)),
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1,
            },
        ],
    };

    const radarData = {
        labels: Object.keys(metodoPagamentoCounts),
        datasets: [
            {
                label: 'Métodos de Pagamento',
                data: Object.values(metodoPagamentoCounts),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
            },
        ],
    };

    const itemCountsKeys = Object.keys(itemMaisSolicitado);
    const itemCountsValues = Object.values(itemMaisSolicitado);

    const barDataItemsSolicitados = {
        labels: itemCountsKeys,
        datasets: [
            {
                label: 'Itens Mais Solicitados',
                data: itemCountsValues,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
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
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-book fs-3 text-danger'></i>
                            <div>
                                <span>Items cardápio</span>
                                <h2>{itemsCardapio}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
                        <div className='d-flex justify-content-between p-3 align-items-center bg-white border border-secondary rounded shadow'>
                            <i className='bi bi-person fs-1 text-warning'></i>
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
                            <h3 className='text-center'>Gráfico de Pizza - Tipo de Consumo</h3>
                            <Pie data={pieData} />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Barras - Valor Total por Tipo de Consumo</h3>
                            <Bar data={barDataTipoConsumo} />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Barras - Valor Total por Método de Pagamento</h3>
                            <Bar data={barDataMetodoPagamento} />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Linha - Tendência de Pedidos</h3>
                            <Line data={lineData} />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Radar - Métodos de Pagamento</h3>
                            <Radar data={radarData} />
                        </div>
                    </div>

                    <div className='col-12 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Gráfico de Barras - Itens Mais Solicitados</h3>
                            <Bar data={barDataItemsSolicitados} />
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12 p-3'>
                        <div className='border border-secondary rounded shadow p-3'>
                            <h3 className='text-center'>Calcular Valor Total por Intervalo de Datas</h3>
                            <div className='d-flex justify-content-center'>
                                <input 
                                    type='date' 
                                    className='form-control me-2' 
                                    value={dataInicio} 
                                    onChange={(e) => setDataInicio(e.target.value)} 
                                />
                                <input 
                                    type='date' 
                                    className='form-control me-2' 
                                    value={dataFim} 
                                    onChange={(e) => setDataFim(e.target.value)} 
                                />
                                <button 
                                    className='btn btn-primary' 
                                    onClick={calcularValorTotalIntervalo}
                                >
                                    Calcular
                                </button>
                            </div>
                            <h4 className='text-center mt-3'>Valor Total: R$ {valorTotalIntervalo.toFixed(2)}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;