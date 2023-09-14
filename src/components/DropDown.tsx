import { useContext } from 'react'

import TeaPottIcon from '../assets/output-onlinepngtools.png'
import ShoppingCart from './shoppingcart/ShoppingCart';
import { CartContext, CartContextType } from '../contexts/CartContext';

const DropDown = () => {
  const { totalQuantity } = useContext(CartContext) as CartContextType

  return (
    <li className='nav-item dropdown'>
          <div
            className='nav-link'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <img className="teapotticon" src={TeaPottIcon} alt={TeaPottIcon} style={{ fill: 'white' }} />
            {totalQuantity > 0 && <span className='rounded-pill'>{totalQuantity}</span>}
          </div>
          <ul className='dropdown-menu dropdown-menu-end shopping-cart'>
            <ShoppingCart />
          </ul>
        </li>
  )
}

export default DropDown