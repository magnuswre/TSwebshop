import React, { useContext, useState } from 'react';
import { ProductContext, ProductContextType } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export interface AdminPageDetailState {
  name: string;
  imageURL: string;
  price: number;
  description: string;

}

export const initState : AdminPageDetailState = {
    name: "",
    imageURL: "",
    price: 0,
    description: "",
};



const AdminPageDetails: React.FC<{}> = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState(initState); 
  const { data, postProduct } = useContext(ProductContext) as ProductContextType;

 const handleAddProduct = () => {
    const newProductData: AdminPageDetailState = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      imageURL: formData.imageURL,
    };
    postProduct(newProductData);
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
    navigate('/extendedproduct')
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

          <button className='button optional-button' onClick={goToExtendedProduct}>Optional Additional Info </button>
        
        <button className="button admin-page-button" onClick={handleAddProduct}>
          ADD PRODUCT
        </button>
      </div>

      <div className="change-product-title">
        <h2>Change or delete a product here:</h2>
      </div>

      <div className="products">
        {data.map((product) => (
          <Link to={`/Adminproductdetails/${product._id}`} key={product._id}>
            <div className="productCard">
              <img
                alt={product.title}
                src={product.imageURL}
                style={{ display: "block", maxWidth: "100%" }}
              />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPageDetails;
