import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const nftsVendidosAPIUrl = 'https://nifytigoserver.onrender.com/nft/nfts/true';

const getNFTsVendidosDataFromAPI = async () => {
    try {
        const response = await fetch(nftsVendidosAPIUrl);
        if (response.ok) {
            const jsonData = await response.json();
            const modifiedData = jsonData.map(nft => ({
                ...nft,
                createdAt: nft.customCreatedAt
            }));

            return modifiedData;
        } else {
            throw new Error('Error al obtener los datos de NFTs desde la API');
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default function Bars() {
    const [usuariosData, setUsuariosData] = useState([]);
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const nftsVendidosData = await getNFTsVendidosDataFromAPI();
                const usuariosPorMes = Array.from({ length: 12 }, () => 0); // Inicializar el arreglo con ceros para cada mes

                nftsVendidosData.forEach(nft => {
                    const createdAtDate = new Date(nft.createdAt);
                    const monthIndex = createdAtDate.getMonth();
                    usuariosPorMes[monthIndex]++;
                });

                setUsuariosData(usuariosPorMes);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const options = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: Math.max(...usuariosData) + 10 // Ajustar el máximo del eje y según los datos
            },
            x: {
                ticks: { color: 'rgba(0, 220, 195)' }
            }
        }
    };

    const data = {
        labels: meses,
        datasets: [
            {
                label: 'Usuarios',
                data: usuariosData,
                backgroundColor: 'rgba(0, 220, 195, 0.5)'
            }
        ]
    };

    return <Bar data={data} options={options} />;
}
