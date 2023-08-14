import React from "react";
import style from '../Search/Search.module.css'
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux"
import {buscarName} from '../../Redux/buscarNftName'
import lupa from "../../assets/lupa.png"

export default function SearchBar() {

     const { pathname } = useLocation();
    const dispatch = useDispatch()


    const handleChange = (e) => {
        dispatch(buscarName(e.target.value))
      }

    const pregunta = () => {
        if (pathname === '/') return false;
        else return true;
      }

    return (

        <div className={style.containerSearch}>
            <img src={lupa} className={style.img}/>
            <input className= {style.inputSearch} disabled={pregunta()} placeholder="Search for name" type="text" name="name" onChange={handleChange} />
        </div>
    
    );
}