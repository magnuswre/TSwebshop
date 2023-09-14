import ProductDetailsProvider from '../../contexts/ProductDetailContext';
import ProductContext from '../../contexts/ProductContext';
import AdminProductDetailsComponent, { AdminProductDetailsComponentProps } from '../../components/admin/AdminProductDetailsComponent';

const AdminProductDetails = () => {

  const productDetails: AdminProductDetailsComponentProps = {
    name: '',
    imageURL: '',
    price: 0,
    description: ''
  };
  
    return (
    <div>
        <ProductContext>
          <ProductDetailsProvider>
            <AdminProductDetailsComponent 
             name={productDetails.name}
             imageURL={productDetails.imageURL}
             price={productDetails.price}
             description={productDetails.description}/>
          </ProductDetailsProvider>
        </ProductContext>
    </div>
  )
}

export default AdminProductDetails