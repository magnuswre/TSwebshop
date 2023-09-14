import React, { useContext } from 'react';
import { OrderContext, OrderContextType } from '../contexts/OrderContext';


import ShoppingCartUserProfile from '../components/shoppingcart/ShoppingCartUserProfile';

const UserProfile: React.FC = () => {
  const orderContext = useContext(OrderContext) as OrderContextType;

  const { orderData } = orderContext;

  console.log(orderData);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="orders">
      
      <div className="active-order">
      <p>Current Order:</p>
        {
          <ShoppingCartUserProfile />
        }
      </div>

      
      <div className="historic-orders">
      <p>Historic Orders:</p>
        {orderData.map((order) => (
          <div key={order._id}>
            <h4>Order ID: {order._id}</h4>
            <h4>Order Rows:</h4>
            <ul>
              {order.orderRows.map((row) => (
                <li key={row._id}>
                  <p>Product: {row.product}</p>
                  <p>Quantity: {row.quantity}</p>
                  {/* <p>Status: {row.status} </p> */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
