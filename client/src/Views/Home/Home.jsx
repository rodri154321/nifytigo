
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
            <Filters></Filters>
            {/* <Pagination cardsPerPage={15} paginate={paginate} totalCards={150}></Pagination> */}
            <Pagination cardsPerPage={videogamesPerPage} paginate={paginate} totalCards={ejemplo.length}></Pagination>
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

        <Pagination cardsPerPage={videogamesPerPage} paginate={paginate} totalCards={ejemplo.length}></Pagination>
        </div>
       
     
       
        </div>
        
    );
}
export default Home