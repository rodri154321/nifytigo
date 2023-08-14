// MPButton.js
import React from 'react';

class MPButton extends React.Component {
  handleCheckout = async () => {
    try {
      const res = await fetch("/create-order", {
        method: "POST",
      });
      const data = await res.json();
      window.location.href = data.init_point; // Redirige al usuario a la página de pago
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  render() {
    return (
      <button id="checkout" onClick={this.handleCheckout}>
        Pay with MercadoPago
      </button>
    );
  }
}

export default MPButton;
