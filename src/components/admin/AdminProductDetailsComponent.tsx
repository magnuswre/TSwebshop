import React, { useContext, useState, useEffect } from 'react';
import { ProductDetailContext, ProductDetailContextType } from '../../contexts/ProductDetailContext';
import { ProductContext, ProductContextType } from '../../contexts/ProductContext';

export interface AdminProductDetailsComponentProps {
  name: string;
  imageURL: string;
  price: number;
  description: string;
}

const AdminProductDetailsComponent: React.FC<AdminProductDetailsComponentProps> = () => {
  const [formData, setFormData] = useState<AdminProductDetailsComponentProps>({
    name: "",
    imageURL: "",
    price: 0,
    description: "",
  });

  const { data } = useContext(ProductDetailContext) as ProductDetailContextType;
  const { changeProduct, deleteProduct } = useContext(ProductContext) as ProductContextType;

  useEffect(() => {
    // Set formData with the values from the selected product when data changes
    if (data) {
      setFormData({
        name: data.name,
        imageURL: data.imageURL,
        price: data.price,
        description: data.description,
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  if (!data) {
    return <div>Loading...</div>; 
  }

  const handleProductChange = () => {
    changeProduct(formData);
  };

  const handleProductDelete = () => {
    deleteProduct(formData.name);
  };

  return (
    <div>
      <div className="admin-product-container">
        <div className="admin-product-image">
          <img src={data.imageURL} alt={data.imageURL} />
        </div>

        <div className="admin-product-details-info">
          <div className='form-group-product'>
            <label htmlFor="_product_name">Product name:</label>
            <input type="text" id='_product_name' placeholder={data.name} name="name" onChange={handleChange} />
          </div>

          <div className='form-group-product'>
            <label htmlFor="_product_description">Description:</label>
            <input type="text" id='_product_description' placeholder={data.description} name="description" onChange={handleChange} />
          </div>

          <div className='form-group-product'>
            <label htmlFor="_product_price">Price:</label>
            <input type="text" id='_product_price' placeholder={data.price.toString()} name="price" onChange={handleChange} />
          </div>

          <div className='form-group-product'>
            <label htmlFor="">Image URL:</label>
            <input type="text" id='_product_URL' placeholder={data.imageURL} name="imageURL" onChange={handleChange} />
          </div>

          <div className='form-group-product'>
            <p className="category">Category: Clothes</p>
          </div>

          <button className='button' onClick={handleProductChange}>Change Product</button>
          <button className='button' onClick={handleProductDelete}>Delete Product</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetailsComponent;
