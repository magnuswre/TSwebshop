import React, { useContext, useState } from 'react';
import { ProductContext, ProductContextType } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';


export interface AdminPageDetailStateExtended {
  name: string;
  imageURL: string;
  price: number;
  description: string;
  isEco?: string;
  AllergyInfo: string;

}

export const initState : AdminPageDetailStateExtended = {
    name: "",
    imageURL: "",
    price: 0,
    description: "",
    isEco: "",
    AllergyInfo: ""
};

const ExtendedProduct: React.FC<{}> = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initState); 
  const { data, postProductExtended } = useContext(ProductContext) as ProductContextType;

 const handleAddProduct = () => {
    const newProductData: AdminPageDetailStateExtended = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      imageURL: formData.imageURL,
      isEco: formData.isEco,
      AllergyInfo: formData.AllergyInfo
    };
    postProductExtended(newProductData);
  };
      
  const handleAddProductInformation = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };
   
  const goToExtendedProduct = () => {
    navigate('/adminpage')
  }

  return (
    <div className="admin-page-details-container">
      <div className="admin-page-details-form">
        <h1>Add a new product:</h1>
        <div className="d-flex">
          <label htmlFor="product_name">Product name:</label>
          <input type="text" id="product_name" name="name" onChange={handleAddProductInformation} />
        </div>
        <div className="d-flex">
          <label htmlFor="product_description">Description:</label>
          <input type="text" id="product_description" name="description" onChange={handleAddProductInformation} />
        </div>
        <div className="d-flex">
          <label htmlFor="product_price">Price:</label>
          <input type="text" id="product_price" name="price" onChange={handleAddProductInformation} />
        </div>
        <div className="d-flex">
          <label htmlFor="product_imageURL">ImageURL:</label>
          <input type="text" id="product_imageURL" name="imageURL" onChange={handleAddProductInformation} />
        </div>
        <div className="d-flex">
          <label htmlFor="isEco">Eco Friendly:</label>
          <input type="text" id="isEco" name="isEco" onChange={handleAddProductInformation} />
        </div>
        <div className="d-flex">
          <label htmlFor="AllergyInfo">Allergy Info:</label>
          <input type="text" id="AllergyInfo" name="AllergyInfo" onChange={handleAddProductInformation} />
        </div>
        
        <button className="button admin-page-button" onClick={handleAddProduct}>
          ADD PRODUCT
        </button>
        <button className="button admin-page-button" onClick={goToExtendedProduct}>
          BACK
        </button>
      </div>

     

     
    </div>
  );
};

export default ExtendedProduct;
