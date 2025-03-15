import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      <hr />
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cartdetail">
                <div>
                <h3>{item.title}</h3>
                <p style={{color:"#2DC100"}}>{item.price}</p>
                </div>

                <div>
                Qty:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
            
          ))}
          <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
