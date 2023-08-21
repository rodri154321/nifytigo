import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

// var Usuarios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
// var NFTs = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
// var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// var midata = {
//     labels: meses,
//     datasets: [ 
//         {
//             label: 'Usuarios',
//             data: Usuarios,
//             tension: 0.5,
//             fill : true,
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             pointRadius: 5,
//             pointBorderColor: 'rgba(255, 99, 132)',
//             pointBackgroundColor: 'rgba(255, 99, 132)',
//         },
//         {
//             label: 'NFTs',
//             data: NFTs,
//             tension: 0.5,
//             fill : true,
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             pointRadius: 5,
//             pointBorderColor: 'rgba(255, 99, 132)',
//             pointBackgroundColor: 'rgba(255, 99, 132)',
//         },
//     ],
// };

// var misoptions = {
//     scales : {
//         y : {
//             min : 0
//         },
//         x: {
//             ticks: { color: 'rgb(255, 99, 132)'}
//         }
//     }
// };

// export default function LinesChart() {
//     return <Line data={midata} options={misoptions}/>
// }

// URL de la API que devuelve los datos de usuarios
const usersAPIUrl = 'https://nifytigoserver.onrender.com/users';

// Función para obtener los datos de usuarios desde la API
const getUsersDataFromAPI = async () => {
    try {
        const response = await fetch(usersAPIUrl);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData; // Esto será un arreglo de objetos de usuarios
        } else {
            throw new Error('Error al obtener los datos de usuarios desde la API');
        }
    } catch (error) {
        console.error(error);
        return []; // En caso de error, retornar un arreglo vacío o manejarlo según tu necesidad
    }
};

// URL de la API que devuelve los datos de NFTs
const nftsAPIUrl = 'https://nifytigoserver.onrender.com/nft';

// Función para obtener los datos de NFTs desde la API
const getNFTsDataFromAPI = async () => {
    try {
        const response = await fetch(nftsAPIUrl);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData; // Esto será un arreglo de objetos de NFTs
        } else {
            throw new Error('Error al obtener los datos de NFTs desde la API');
        }
    } catch (error) {
        console.error(error);
        return []; // En caso de error, retornar un arreglo vacío o manejarlo según tu necesidad
    }
};


export default function LinesChart() {
    const usersByMonthData = getUsersDataFromAPI();
    const nftsByMonthData = getNFTsDataFromAPI();

    // Procesar los datos para el gráfico de los Usuarios
    const labelsUser = usersByMonthData.map(entry => meses[entry.month - 1]);
    const userData = usersByMonthData.map(entry => entry.user_count);
    // Procesar los datos para el gráfico de los NFTs
    const labelsNFTs = nftsByMonthData.map(entry => meses[entry.month - 1]);
    const nftData = nftsByMonthData.map(entry => entry.nft_count);
    
    const allLabels = labelsUser.concat(labelsNFTs); // Combinar todas las etiquetas
    
    const midata = {
        labels: allLabels, // Etiquetas para el eje X que incluyen ambos gráficos
        datasets: [
            {
                label: 'Cantidad de Usuarios',
                data: userData,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
            {
                label: 'Cantidad de NFTs',
                data: nftData,
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

    const misoptions = {
        scales : {
            y : {
                min : 0
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)'}
            }
        }
    };

    return <Line data={midata} options={misoptions}/>
}