import './TopRating_styles.css'
import Cards from '../../Components/Cards/Cards';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Loader from '../../Components/Loader/Loader';
import { getEjemplo } from '../../Redux/getEjemplo';

function TopRating(){
    const dispatch=useDispatch();
    const cards=useSelector((state)=>state.ejemplo)
    console.log(cards)
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        dispatch(getEjemplo())
        setTimeout(() => {          //Loader
            setIsLoading(false);
          }, 500); //
        }, [dispatch]);


    return(
        <div id='topContainer'>
            <div id="cardsTop">
        
        {cards?.map((eje) =>{
          return(
                <Cards
                key={eje.id}
                id={eje.id}
                name={eje.name}
                description={eje.description}
                image={eje.image}
                price={eje.price}
                user={eje.user}
                categories={eje.categories}
                />
          )
          })}
        { isLoading && <Loader></Loader> }
        { isLoading && <div className='loaderBack'/>}
        </div>
        </div>
    )
}

export default TopRating;