import "./Favoritos.css"
import { NavLink} from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import {setDeleteCartLogo} from '../../Redux/cardLogoID';
import { useDispatch } from "react-redux";

const Favoritos = () => {
  const dispatch=useDispatch();
  const [cart, setCart] = useState({
    id: "",
    price: "",
    image: "",
    status: "",
    userId: "",
    nfts: []
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const idUserActual = localStorage.getItem("clientId");
    try {
      const response = await axios.get(
        `https://nifytigoserver.onrender.com/shop/cart/${idUserActual}`
      );
      if (response.data) {
        setCart(response.data);
        console.log(response.data);
      } else {
        setCart({});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteToCart = (cartId, nftId) => {
    // dispatch(setDeleteCartLogo(nftId));
    axios
      .delete("https://nifytigoserver.onrender.com/shop/delete", {
        data: {
          cartId: cartId,
          nftId: nftId
        }
      })
      .then(response => {
        console.log(response.data.message);
        // Después de borrar, volvemos a traer los datos actualizados
        fetchData();
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="ContainerFav">
      <div className="one-div">
        <NavLink to="/Purchase">
          <div className="text">
            <p>{cart.status}</p>
            <h1>Total Price: {cart.price}</h1>
          </div>
        </NavLink>
      </div>

      <div className="CartsNFt">
        {cart.nfts.map((nft, index) => (
          <li className="est" key={index}>
            <div className="nft">
              <img src={nft.image} alt={`NFT ${index}`} />
              <h2>{nft.name}</h2>
              <NavLink className="link" to={`/Purchase?id=${nft.id}`}>
                <div className="Btn">
                  <h2>Pay: {nft.price}</h2>
                </div>
              </NavLink>
            </div>
            <bdo className="bn" onClick={() => deleteToCart(cart.id, nft.id)}>
              Delete NFT
            </bdo>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
