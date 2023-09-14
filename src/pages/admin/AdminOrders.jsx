import React, { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Link } from 'react-router-dom'

const AdminOrders = () => {
  const { orders } = useContext(OrderContext)
  console.log(orders)

  if(!orders){
    return
  }
  
  return (
  <div className='admin-orders-container'>
    
    {orders.map(order => (
    <Link to={`/adminorderdetails/${order._id}`} key={order._id}>
      <div className='order-item'>
        <h3>Order ID: {order._id}</h3>
        <p>Status: {order.status} </p>
        <h4>Order Rows:</h4>
        <ul>
          {order.orderRows.map(row => (
          <li key={row._id}>
            <p>Product: {row.product}</p>
            <p>Quantity: {row.quantity}</p>
          </li>
          ))}
          </ul>
        </div>
        </Link>
        ))}
        </div>
            )
          }

export default AdminOrders