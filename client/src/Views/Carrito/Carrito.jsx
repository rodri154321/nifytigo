import  { useState, useEffect } from 'react';
import axios from 'axios';

const Carrito = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getToCart = (userId) => {
    axios.get('http://localhost:3001/shop/add', {  userId: userId })
      .then(response => {
        console.log(response.data.message);
        setCart([...cart]);
      })
      .catch(error => console.error(error));
  };

  /*const addToCart = (product) => {
    axios.post('http://localhost:3001/shop/add', { productId: product.id })
      .then(response => {
        console.log(response.data.message);
        setCart([...cart, product]);
      })
      .catch(error => console.error(error));
  };*/

  const removeFromCart = (productId) => {
    axios.delete(`/api/cart/remove/${productId}`)
      .then(response => {
        console.log(response.data.message);
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
      })
      .catch(error => console.error(error));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div >
      <h1>Carrito de Compras</h1>
      
      <div>
        <h2>Productos Disponibles</h2>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => getToCart(product.id)}> <h1>ver</h1></button>
            </li>
            
          ))}
        </ul>
        
      </div>
      
      <div>
        <h2>Carrito</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Carrito;


/*function Carrito() {
  return (
    <div>Carrito

    </div>
  )
}


export default Carrito*/
