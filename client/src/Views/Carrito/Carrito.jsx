import  { useState, useEffect } from 'react';
import axios from 'axios';

const Carrito = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Obtener la lista de productos al cargar la página
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (product) => {
    axios.post('/api/cart/add', { productId: product.id })
      .then(response => {
        console.log(response.data.message);
        setCart([...cart, product]);
      })
      .catch(error => console.error(error));
  };

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
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
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
