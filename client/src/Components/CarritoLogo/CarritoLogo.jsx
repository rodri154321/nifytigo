


import "./CarritoLogo.css" // Asegúrate de tener este archivo CSS creado

import { NavLink } from "react-router-dom";
const CarritoLogo = () => {

    
  

  return (
    
    <div className="logo-container">

       
            <NavLink to={`/Carritos/${'a4c97885-6310-4ee4-a42d-37a7f99ea765'}`}> 
             <img src="https://i.pinimg.com/1200x/1b/3b/d5/1b3bd5af30cb31cc4bc842b38e3ce459.jpg" alt="Logo" className="logo-image" />
             </NavLink>
        
      <div>
        <h1>{}</h1>
        <h3>{}</h3>
      </div>
      
        
      
    </div>
  );
};

export default CarritoLogo;
