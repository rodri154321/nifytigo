
import './home_styles.css';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Cards from "../../Components/Cards/Cards";
import { getEjemplo } from "../../Redux/getEjemplo"
// import NavBar from '../../Components/NavBar/NavBar';
import Filters from '../../Components/Filters/Filters';
// import videoBackground from '../../assets/background_video/Waves.webm'
import Pagination from '../../Components/Pagination/Pagination'


function Home(){
 const dispatch = useDispatch()
 

const ejemplo = useSelector((state) => state.ejemplo)

 const [currentPage, setCurrentPage] = useState(1);

 const [videogamesPerPage] = useState(15);

 const lastIndex = currentPage * videogamesPerPage; 
 const firstIndex = lastIndex - videogamesPerPage;

 const currentEjemplo= ejemplo.slice(firstIndex, lastIndex);
 //EL SLICE 
 const paginate = (pageNumber) => setCurrentPage(pageNumber);

 useEffect(()=>{
    dispatch(getEjemplo())
   }, [dispatch])

    return (
        <div>
       <div id='HomeContainer'>
            {/* <NavBar></NavBar> */}
            <Filters></Filters>
            <Pagination cardsPerPage={videogamesPerPage} paginate={paginate}></Pagination>
        <label>Este es el home</label>
            {/* <Collection allCards={currentCards}></Collection> */}
 <div id="cards">
        
        { currentEjemplo?.map((eje) =>{
  
      return(
     
            
            <Cards
            key={eje.id}
            id={eje.id}
            name={eje.name}
            description={eje.description}
            image={eje.image}
            price={eje.price}
            user={eje.user}
            

            />
        
     
      )
       })}
       
        </div>


            <Pagination cardsPerPage={videogamesPerPage}  paginate={paginate}></Pagination>
            
        </div>
       
    

{/*
//const [currentPage, setCurrentPage] = useState(1);
//const cardsPerPage=15;
//const cardsFiltered = useSelector((state) => state.cardsFiltered);


  //! Lógica para paginado
//   const indexOfLastCard = currentPage * cardsPerPage;                                                             //Obtiene el index del ultimo juego p/pagina
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;                                                        //Obtiene el index del primer juego p/pagina
//   const currentCards = cardsFiltered.slice(indexOfFirstCard, indexOfLastCard);                                    // Seccionado de juegos por página

  
*/}
  
    




     
       
        </div>
        
    );
}
export default Home