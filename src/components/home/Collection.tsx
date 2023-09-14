import { useContext } from "react";
import { Link } from 'react-router-dom'
import CollectionCard from './CollectionCard'
import { ProductContext, ProductContextType } from "../../contexts/ProductContext";


  
  const Collection: React.FC = () => {
  const { data } = useContext(ProductContext) as ProductContextType;
  
  return (
    <div className='collection-container'>
      <h1>Top Sellers</h1>
      
      <div className='grid-collection-template'>
        {
          data.map(card => (
            <Link to={
              `/productdetails/${card._id}`} key={card._id}>
              <CollectionCard card={card} key={card._id} />
            </Link>
          ))
        }
      </div>
      
    </div>
  )

}

export default Collection