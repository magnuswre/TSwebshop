import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AdminPageDetailState } from '../components/admin/AdminPageDetails';
import { AdminProductDetailsComponentProps } from '../components/admin/AdminProductDetailsComponent';
import { AdminPageDetailStateExtended } from '../pages/ExtendedProduct';

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export interface ProductContextType {
  data: Product[];
  changeProduct: (formData: AdminProductDetailsComponentProps) => void;
  deleteProduct: (formData: string ) => void;
  postProduct: (formData: AdminPageDetailState) => void;
  postProductExtended: (formData: AdminPageDetailStateExtended) => void;
}

const ProductContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [data, setData] = useState<Product[]>([]);
  const { productId } = useParams<{ productId: string }>() 

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/product");
        setData(prevData => [...prevData, ...result.data.slice(prevData.length)]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


      
    const postProduct = async (formData: AdminPageDetailState) => {
      console.log(formData)
     const token = localStorage.getItem('admin-token')
     if (token !== null) { 
     const parse = JSON.parse(token)
 
     const fetchData = async () => {
         try {
           const result = await axios.post(`http://localhost:8080/api/product/add`, formData,    
            {
               headers: {
                 Authorization: `Bearer ${parse}`
               }
             })
             console.log(result.data)
             
           } catch (error) {
           console.log("Error fetching data:", error);
         }
       };
       fetchData()
      }
      else {
        
        return console.log("Couldn't add the product ")
        
       }
        } 


        const postProductExtended = async (formData: AdminPageDetailStateExtended) => {
          console.log(formData)
         const token = localStorage.getItem('admin-token')
         if (token !== null) { 
         const parse = JSON.parse(token)
     
         const fetchData = async () => {
             try {
               const result = await axios.post(`http://localhost:8080/api/product/add`, formData,    
                {
                   headers: {
                     Authorization: `Bearer ${parse}`
                   }
                 })
                 console.log(result.data)
                 
               } catch (error) {
               console.log("Error fetching data:", error);
             }
           };
           fetchData()
          }
          else {
            
            return console.log("Couldn't add the product ")
            
           }
            } 


const changeProduct = async (formData: AdminProductDetailsComponentProps) => {
  // console.log(formData)
  const token = localStorage.getItem('admin-token')
  
  if (token !== null) {
    const parse = JSON.parse(token);
    const fetchData = async () => {
      try {
        const result = await axios.put(`http://localhost:8080/api/product/${productId}`, formData,    
         {
            headers: {
              Authorization: `Bearer ${parse}`
            }
          })
          console.log(result.data)
        } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    
    fetchData()
}
else {
  return console.log("Couldn't change the product ")
 }
  } 

  const deleteProduct = async () => {
    const token = localStorage.getItem('admin-token') 
    if (token !== null) { 
     const parse = JSON.parse(token)
    try {
      const result = await axios.delete(`http://localhost:8080/api/product/${productId}`, 
      
      {
        headers: {
          Authorization: `Bearer ${parse}`
        }
      }) ;
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  } else {
    return console.log("Couldn't delete the product ")
  }
  };

const value: ProductContextType = {
    data,
    changeProduct,
    deleteProduct,
    postProduct,
    postProductExtended
    

   
  }

  return (
   <ProductContext.Provider value={value}>
      { children }
   </ProductContext.Provider>
  )
}

export default ProductContextProvider