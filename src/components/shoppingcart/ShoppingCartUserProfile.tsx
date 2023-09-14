import { useContext } from "react";
import { CartContext, CartContextType } from "../../contexts/CartContext";
import CartProductUserProfile from "./CartProductUserProfile";


const ShoppingCartUserProfile: React.FC = () => {
  const { cartItems } = useContext(CartContext) as CartContextType;

  const calculateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div>
      {cartItems.map((item, index) => (
        <CartProductUserProfile key={index + item.product._id} item={item} />
      ))}
      <div className="dropdown-divider"></div>
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="price-info">
          <p className="m-0">Total: {calculateTotal()} SEK</p>
          <small>incl. vat</small>
        </div>
        <div className="d-flex gap-2"></div>
      </div>
    </div>
  );
};

export default ShoppingCartUserProfile;
