


import "./CarritoLogo.css" // Asegúrate de tener este archivo CSS creado
import { useState } from "react";
import Carrito from "../../Views/Carrito/Carrito";
const CarritoLogo = () => {

    
  const [infoVisible, setInfoVisible] = useState(false);

  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    
    <div className="logo-container">

        <div onClick={toggleInfo}>

             <img src="https://i.pinimg.com/1200x/1b/3b/d5/1b3bd5af30cb31cc4bc842b38e3ce459.jpg" alt="Logo" className="logo-image" />
        </div>
        
      
       <div className="info-component " >
         {infoVisible && <Carrito />}{/* Renderiza el componente de información si infoVisible es true */}
       </div>
        
      
    </div>
  );
};

export default CarritoLogo;
