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

const nftsAPIUrl = 'https://nifytigoserver.onrender.com/nft/admin';

const getNFTsDataFromAPI = async () => {
    try {
        const response = await fetch(nftsAPIUrl);
        if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
        } else {
            throw new Error('Error al obtener los datos de NFTs desde la API');
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default function NFTsChart() {
    const [nftsData, setNFTsData] = useState([]);
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const nftsResponse = await getNFTsDataFromAPI();
                setNFTsData(nftsResponse);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const nftsCountByMonth = Array.from({ length: 12 }, () => 0);

    nftsData.forEach(nft => {
        const createdAtDate = new Date(nft.customCreatedAt);
        const monthIndex = createdAtDate.getMonth();
        nftsCountByMonth[monthIndex]++;
    });

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
                max: Math.max(...nftsCountByMonth) + 10
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
                label: 'NFTs',
                data: nftsCountByMonth,
                backgroundColor: 'rgba(0, 220, 195, 0.5)'
            }
        ]
    };

    return <Bar data={data} options={options} />;
}

