import  { useState, useContext } from 'react'

import { ProductContext, ProductContextType } from '../../contexts/ProductContext'

export interface ChangeProductProps {
  formData: {  
    name:        string;
    description: string;
    price:       number;
    imageURL:    string;
  }
}


const ChangedProduct: React.FC<ChangeProductProps> = ({ formData }) => {

  // const { formData } = useContext(ProductContext) as ProductContextType
  console.log(formData)
  return (
    <div>
      {formData ? (
        <div>
          <h2>Product Successfully changed</h2>
          <p>Updated Product Details:</p>
          <p>Name: {formData.name}</p>
          <p>Description: {formData.description}</p>
          <p>Price: ${formData.price}</p>
          {/* Add more product details as needed */}
        </div>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  )
}

export default ChangedProduct
