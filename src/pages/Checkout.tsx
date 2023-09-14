import React, { useContext } from "react";
import { CartContext, CartContextType } from "../contexts/CartContext";
import { OrderContext, OrderContextType } from "../contexts/OrderContext"; 

import CartProduct from "../components/shoppingcart/CartProduct";

const Checkout: React.FC = () => {
  const { submitOrder } = useContext(OrderContext) as OrderContextType;
  const { cartItems, clearCart } = useContext(CartContext) as CartContextType

  const calculateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice.toFixed(2); 
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content" onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <div className="checkout p-2 text-center">Your cart is empty.</div>
        )}
        {cartItems.map((item, index) => (
          <CartProduct key={index + item.product._id} item={item} index={index} />
        ))}
        <div className="checkout dropdown-divider"></div>
        <div className="checkout d-flex justify-content-between align-items-center p-2 m-">
          <div className="checkout price-info">
            <p className="checkout m-0 checkout-left" >Total: {calculateTotal()} SEK</p>
            <small>incl. vat</small>
          </div>
          <div className="checkout d-flex gap-2 checkout-button">
            <button className="button" onClick={clearCart}>
              Clear Cart
            </button>
            <button
              className="button"
              onClick={() => submitOrder(cartItems)}>
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
