import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function Pieschart() {
    const [nftsData, setNFTsData] = useState([]);
    const [nftsVendidosData, setNFTsVendidosData] = useState([]);

    useEffect(() => {
        const fetchNFTsData = async () => {
            try {
                const response = await fetch('https://nifytigoserver.onrender.com/nft');
                if (response.ok) {
                    const jsonData = await response.json();
                    setNFTsData(jsonData);
                } else {
                    throw new Error('Error al obtener los datos de NFTs desde la API');
                }
            } catch (error) {
                console.error(error);
            }
        };

        const fetchNFTsVendidosData = async () => {
            try {
                const response = await fetch('https://nifytigoserver.onrender.com/nft/nfts/true');
                if (response.ok) {
                    const jsonData = await response.json();
                    setNFTsVendidosData(jsonData);
                } else {
                    throw new Error('Error al obtener los datos de NFTs vendidos desde la API');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchNFTsData();
        fetchNFTsVendidosData();
    }, []);
    
    const nftsCount = nftsData.length;
    const nftsVendidosCount = nftsVendidosData.length;

    const data = {
        labels: ['unsold NFTs', 'NFTs sold'],
        datasets: [
            {
                data: [nftsCount, nftsVendidosCount],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} options={options} />;
}
