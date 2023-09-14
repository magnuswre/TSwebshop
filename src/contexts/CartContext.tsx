import { createContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  cartCount: number;
  decrementQuantity: (index: number) => void;
  incrementQuantity: (index: number) => void;
  totalQuantity: number;
  checkOut: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const storedItems = localStorage.getItem('cart');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setTotalQuantity(getQuantity(cartItems));
  }, [cartItems]);

  const getQuantity = (cart: CartItem[]) => {
    let value = 0;
    cart.forEach((item) => {
      value += item.quantity;
    });
    return value;
  };

  const addToCart = (product: Product, quantity: number) => {
    const updatedCartItems = [...cartItems];
    let productExists = false;

    updatedCartItems.forEach((item) => {
      if (item.product._id === product._id) {
        item.quantity += quantity;
        productExists = true;
      }
    });

    if (!productExists) {
      const newItem: CartItem = {
        product,
        quantity,
      };
      updatedCartItems.push(newItem);
    }

    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (index: number) => {
    if (cartItems[index].quantity > 1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const incrementQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const checkOut = () => {
    navigate('/checkout');
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    decrementQuantity,
    incrementQuantity,
    totalQuantity,
    checkOut,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
