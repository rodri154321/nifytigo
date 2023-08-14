


import "./CarritoLogo.css" // Asegúrate de tener este archivo CSS creado

import { NavLink } from "react-router-dom";
const CarritoLogo = () => {

    
  

  return (
    
    <div className="logo-container">

       
<NavLink to={`/Carritos/${'112c6e93-9118-4755-8984-bca1848ea962'}`}> 
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
