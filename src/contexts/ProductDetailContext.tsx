import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/loader/Loader';

export interface ProductDetailContextType {
  data: Product | null;
  loading: boolean;
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export const ProductDetailContext = createContext<ProductDetailContextType | undefined>(undefined);

const ProductDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const result = await axios.get<Product>(`http://localhost:8080/api/product/${productId}`);
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getProductById();
  }, [productId]);

  const [quantity, setQuantity] = useState<number>(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const value: ProductDetailContextType = {
    data,
    loading,
    quantity,
    incrementQuantity,
    decrementQuantity,
  };

  return (
    <ProductDetailContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailsProvider;
