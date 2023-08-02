<<<<<<< HEAD
import './home_styles.css';
import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';

// import NavBar from '../../Components/NavBar/NavBar';
import Filters from '../../Components/Filters/Filters';
import videoBackground from '../../assets/background_video/Waves.webm'
import Pagination from '../../Components/Pagination/Pagination'


function Home(){

const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage=15;
//const cardsFiltered = useSelector((state) => state.cardsFiltered);

  //! Lógica para paginado
//   const indexOfLastCard = currentPage * cardsPerPage;                                                             //Obtiene el index del ultimo juego p/pagina
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;                                                        //Obtiene el index del primer juego p/pagina
//   const currentCards = cardsFiltered.slice(indexOfFirstCard, indexOfLastCard);                                    // Seccionado de juegos por página

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div id='HomeContainer'>
            {/* <NavBar></NavBar> */}
            <div id ='fakeNavBar'></div>
            <Filters></Filters>
            <Pagination cardsPerPage={cardsPerPage} totalCards={150} paginate={paginate}></Pagination>
        <label>Este es el home</label>
            {/* <Collection allCards={currentCards}></Collection> */}
            <Pagination cardsPerPage={cardsPerPage} totalCards={150} paginate={paginate}></Pagination>
            <video id='videoBack' muted autoPlay loop> <source src={videoBackground} type="video/webm"/></video>
        </div>
    );

}

export default Home;
=======
import React from "react";
//import style from "../../Views/Home.module.css"

export default function Home() {

    return (
        <h1>It's Home 

            NFT stands for Non-Fungible Token, a non-fungible token. Tokens are units of value that are assigned to a business model, such as cryptocurrencies. And it is that NFTs have a close relationship with cryptocurrencies, at least technologically, although they are opposites, since a Bitcoin is a fungible good, and an NFT is a non-fungible good, but in essence, they are like the two faces of a technological currency.

        </h1>

    );
}
>>>>>>> develop
