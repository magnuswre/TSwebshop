import{ useContext } from 'react';
import { BsCart3 } from "react-icons/bs";

import { ProductDetailContext, ProductDetailContextType } from '../../contexts/ProductDetailContext';
import { CartContext, CartContextType } from '../../contexts/CartContext';
import Loader from '../loader/Loader';


const ProductDetailInfo = () => {

    const { data, quantity, incrementQuantity, decrementQuantity } = useContext(ProductDetailContext) as ProductDetailContextType
    const { addToCart } = useContext(CartContext) as CartContextType

    if (!data) {
      return (
        <Loader />
      )
    }

    const handleAddToCart = () => {
      addToCart(data, quantity)
    }

    return (
      <div className="product-details">
        <div className="container">
          <div className="left">
            <div className="image">
              <img src={data.imageURL} alt={data.imageURL} />
            </div>
            
          </div>
          <div className="product-details-info left">
            <h2>{data.name}</h2>
            <p className="detail-text">
                {data.description}
            </p>
            
            <div className="price">
                <span>{data.price} SEK</span>
            </div>
            <div className="quantity">
                <button className="quantity-button" onClick={decrementQuantity}>-</button>
                <span className='quantity-number'>{quantity} </span>
                <button className="quantity-button" onClick={incrementQuantity}>+</button>
                <button onClick={handleAddToCart} className="button">Add to Cart <BsCart3 className='cart'/></button>
            </div>
            <div className="action-buttons">
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetailInfo;
