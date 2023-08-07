import './Filters_Styles.css'
import { useDispatch } from 'react-redux';
import { sortAlfa } from '../../Redux/sortAlfa'; 

function Filters({paginate}){
    const dispatch=useDispatch();

    const handleFilterByCollection=(e)=>{
        
    }
    const handleSort=(e)=>{
        dispatch(sortAlfa(e.target.value))
        paginate(1);
    }
    const handleFilterByCategory=(e)=>{

    }


    return(
        <div id='filterContainer'>
            <div className='filterNames'>
                <label>FILTROS</label>
            </div>  

            <div className='filtersBox'>
                <label>COLLECTION: </label>
                <select onChange={handleFilterByCollection}>
                    {["A","B","C"].map((origin) => (
                        <option key={origin} value={origin}>
                            {origin}
                        </option>
                    ))}
                </select>
            </div>

            <div className='filtersBox'>
                <label>SORT: </label>
                <select onChange={handleSort}>
                    {["A-Z","Z-A","Price (Higher First)","Price (Lower First)"].map((sort) => (
                        <option key={sort} value={sort}>
                            {sort}
                        </option>
                    ))}
                </select>
            </div>

            <div className='filtersBox' id='genresFilterBox'>
                <label>Category: </label>
                <select onChange={handleFilterByCategory}>
                    {["All Genres","Art","Membership","Game","PFP","Photography","Domain Names","Music","Sports Collectibles","Virtual Worlds"].map((gender) => (
                        <option key={gender} value={gender}>
                            {gender}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Filters;