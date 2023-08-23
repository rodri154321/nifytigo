import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: 'rgb(255, 99, 132)' },
    },
  },
};

export default function LinesChart() {
  const [usersData, setUsersData] = useState([]);
  const [nftsData, setNFTsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('https://nifytigoserver.onrender.com/users');
        const nftsResponse = await fetch('https://nifytigoserver.onrender.com/nft');

        if (usersResponse.ok && nftsResponse.ok) {
          const usersJsonData = await usersResponse.json();
          const nftsJsonData = await nftsResponse.json();
          setUsersData(usersJsonData);
          setNFTsData(nftsJsonData);
        } else {
          console.error('Error al obtener los datos desde la API');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  const getMonthsCount = (dataArray) => {
    const monthsCount = new Array(12).fill(0);

    dataArray.forEach(entry => {
      const month = new Date(entry.customCreatedAt).getMonth();
      monthsCount[month] += 1; // Incrementar el contador para cada entrada en el mes
    });

    return monthsCount;
  };

  const usersCountByMonth = getMonthsCount(usersData);
  const nftsCountByMonth = getMonthsCount(nftsData);

  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Users quantity',
        data: usersCountByMonth,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(255, 99, 132)',
        pointBackgroundColor: 'rgba(255, 99, 132)',
      },
      {
        label: 'NFTs quantity',
        data: nftsCountByMonth,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(75, 192, 192)',
        pointBackgroundColor: 'rgba(75, 192, 192)',
      },
    ],
  };

  return <Line data={data} options={options} />;
}
