import './Filters_Styles.css'
import { useDispatch } from 'react-redux';


function Filters(){
    //const dispatch=useDispatch();

    const handleFilterByCollection=(e)=>{
        
    }
    const handleSort=(e)=>{

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
                    {["A","B","C"].map((origin)=>
                    (<option value={origin}>{origin}</option>))}
                </select>
            </div>

            <div className='filtersBox'>
                <label>SORT: </label>
                <select onChange={handleSort}>
                    {["A-Z","Z-A","Rating(Best First)","Rating(Worst First)"].map((gender)=>
                    (<option value={gender}>{gender}</option>))}
                </select>
            </div>

            <div className='filtersBox' id='genresFilterBox'>
                <label>Category: </label>
                <select onChange={handleFilterByCategory}>
                    {["All Genres","Art","Membership","Game","PFP","Photography","Domain Names","Music","Sports Collectibles","Virtual Worlds"].map((gender)=>
                    (<option value={gender}>{gender}</option>))}
                </select >
            </div>
        </div>
    )
}

export default Filters;