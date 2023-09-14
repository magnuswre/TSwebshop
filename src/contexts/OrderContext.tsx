import React, { useContext, useEffect, useState, ReactNode } from "react";
import { UserContext, UserContextType } from "./UserContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export interface OrderContextType {
  orderData: Order[];
  updateStatus: (orderId: string, status: string) => Promise<void>;
  submitOrder: (cart: CartItem[]) => void;
}

export const OrderContext = React.createContext<OrderContextType | undefined>(undefined);

interface CartItem {
  product: {
    _id: string;
  };
  quantity: number;
}

const OrderContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext<UserContextType | undefined>(UserContext) || {};
  const [orderData, setOrderData] = useState<Order[]>([]);

  const fetchOrders = async () => {
    try {
      if (user) {
        const res = await axios.get<Order[]>('http://localhost:8080/api/order/allOrders');
        setOrderData(res.data);
      } else {
        setOrderData([]);
      }
    } catch (error) {
      console.log('Error fetching orders', error);
    }
  };

  const submitOrder = (cart: CartItem[]) => {
    const token = localStorage.getItem('user-token');
    
    if (token !== null) {
      const parse = JSON.parse(token);

      if (!user) {
        console.log("no user");
      } else {
        const orderRows = cart.map(item => {
          return {
            product: item.product._id,
            quantity: item.quantity
          };
        });
  
        const fetchData = async () => {
          try {
            const result = await axios.post(`http://localhost:8080/api/order/add`,
              { orderRows },
              {
                headers: {
                  Authorization: `Bearer ${parse}`
                }
              });
            console.log(result.data);
  
          } catch (error) {
            console.log("Error fetching data:", error);
          }
        };
  
        fetchData();
      }

    } else {
      return;
    }
  }

  const updateStatus = async (orderId: string, status: string) => {
    try {
      if (user) {
        await axios.put(`http://localhost:8080/api/order/${orderId}`, { status }, {
          headers: {
            Authorization: `Bearer ${user}`
          }
        });
        setOrderData(prevOrderData =>
          prevOrderData.map(order =>
            order._id === orderId ? { ...order, status } : order
          )
        );
      }
    } catch (error) {
      console.log('Error updating order status', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const value: OrderContextType = {
    orderData,
    updateStatus,
    submitOrder
  }

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContextProvider;

