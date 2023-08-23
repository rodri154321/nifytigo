<<<<<<< HEAD
import { NavLink, } from "react-router-dom"
import "./Card.css"
import { useState, useEffect } from "react";
import axios from "axios"

function Card(ejemplo) {
  /*redux */
  const [cart, setCart] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(null);
  const idUserActual = localStorage.getItem("clientId");
  const idCartActual = localStorage.getItem("cartId");

  //AGREGAR Y SE CREA EL CARRITO */
  const addToCart = (userId, nftId) => {
    console.log(userId, " + ", nftId)
    axios.post('https://nifytigoserver.onrender.com/shop/add', { userId: userId, nftId: nftId })  //IDS DE CADA USER
      .then(response => {
        console.log('add')
        console.log(response.data.message);
        setCart([...cart]);
      })
      .catch(error => console.error(error));
  };

  //SE ELIMINA EL NFT QUE ESTA EN EL CARRITO 
  const deleteToCart = (cartId, nftId) => {

    console.log(nftId)
    axios.delete('https://nifytigoserver.onrender.com/shop/delete', {
      data: {
        cartId: cartId,
        nftId: nftId,
      },
    })
      .then(response => {
        console.log('delete')

        console.log(response.data.message);
        setDeleteStatus([...deleteStatus]);
      })
      .catch(error => console.error(error));
  };

  /*ESTADO PARA QUE CAMBIE EL BOTON Y SUS FUNCIONES */
=======

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./Card.css";

function Card(ejemplo) {
/*redux */
 const idUserActual=localStorage.getItem("clientId");
 const idCartActual=localStorage.getItem("cartId");     
>>>>>>> 34c64c7de5e7cf223169a257e5b37248c75c7c8b

  const [isCart, setIsCart] = useState(false);
  const localStorageKey = `cartState_${ejemplo.id}`;

  useEffect(() => {
    const storedIsCart = localStorage.getItem(localStorageKey);
    setIsCart(storedIsCart === 'true'); // Parse the stored value to a boolean
  }, [localStorageKey]);

<<<<<<< HEAD
  const handleCart = () => {
    if (isCart) {
      setIsCart(false);
      deleteToCart(`${idCartActual}`, ejemplo.id)   //cart
    } else {
      setIsCart(true);
      addToCart(idUserActual, ejemplo.id)    //user
    }
  }

=======
  const addToCart = async (userId, nftId) => {
    try {
      await axios.post('https://nifytigoserver.onrender.com/shop/add', { userId, nftId });
      setIsCart(true);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFromCart = async (cartId, nftId) => {
    try {
      await axios.delete('https://nifytigoserver.onrender.com/shop/delete', {
        data: {
          cartId,
          nftId,
        },
      });
      setIsCart(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCart = () => {
    if (isCart) {
      deleteFromCart(idCartActual, ejemplo.id); // cartID 
    } else {
      addToCart(idUserActual, ejemplo.id); // userID
    }
  };
>>>>>>> 34c64c7de5e7cf223169a257e5b37248c75c7c8b

  useEffect(() => {
    localStorage.setItem(localStorageKey, isCart);
  }, [localStorageKey, isCart]);

  return (
    <div>
      {idUserActual&&<button onClick={handleCart}>{isCart ? "✅" : "🛒"}</button>}

      <NavLink to={`/detail/${ejemplo.id}`}>
<<<<<<< HEAD




        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">

                <div>
                  <img width="220px" height="220px" src={ejemplo.image} />
                </div>

              </div>
            </div>
            <div className="front">

              <div className="img">
                <div className="circle">
                </div>
                <div className="circle" id="right">
                </div>
                <div className="circle" id="bottom">
                </div>
              </div>

              <div className="front-content">

                <h1>{ejemplo.name}</h1>
                <h1>{ejemplo.shop}</h1>

                <div className="description">
                  <div className="description">
                    <div className="title">
                      <p>  {ejemplo.price}</p>
                    </div>
                    <p className="card-footer">

                    </p>
                  </div>
                </div>
              </div>
            </div>
=======
       
         
        
       
<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
       
      <div>
          <img width="220px" height="220px"src={ejemplo.image}/>
          {console.log(ejemplo.imagen)}
        </div>
        
      </div>
    </div>
    <div className="front">
      
      <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>

      <div className="front-content">
     
         <h1>{ejemplo.name}</h1> 
         
         <h1>{ejemplo.shop}</h1> 

        <div className="descriptionN">
        <div className="descriptionN">
          <div className="title">
        <p>  {ejemplo.price}</p> 
>>>>>>> 34c64c7de5e7cf223169a257e5b37248c75c7c8b
          </div>
        </div>




      </NavLink>

    </div>

<<<<<<< HEAD

  );
}

export default Card;


=======
          </div>
       
   
      );
    }
    
    export default Card;
>>>>>>> 34c64c7de5e7cf223169a257e5b37248c75c7c8b
