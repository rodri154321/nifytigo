import React from "react";
import style from '../Search/Search.module.css'
import lupa from "../../assets/lupa.png"

export default function SearchBar() {

    return (

        <div className={style.container}>
            <img src={lupa} className={style.img}/>
            <h3>It's Search</h3>
        </div>

    );
}