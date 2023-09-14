import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Footer from './components/Footer';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ProductDetails from './pages/ProductDetails.jsx';
import { UserContext, UserContextType } from './contexts/UserContext';
import OrderContextProvider from './contexts/OrderContext';
import UserProfile from './pages/UserProfile';
import Checkout from './pages/Checkout';
import AdminPage from './pages/admin/AdminPage';
import AdminProductDetails from './pages/admin/AdminProductDetails';
import AdminOrders from './pages/admin/AdminOrders';
import AdminOrderDetail from './pages/admin/AdminOrderDetail';
import ProductContextProvider from './contexts/ProductContext';
import ChangedProduct from './pages/admin/ChangedProduct';
import DeletedProduct from './pages/admin/DeletedProduct';
import AdminLogin from './pages/admin/AdminLogin';
import { AdminContext, AdminContextType } from './contexts/admin/AdminContext'; // Import AdminContext
import ExtendedProduct from './pages/ExtendedProduct';

const App = () => {
  const { user } = useContext(UserContext) as UserContextType;
  console.log(user);

  const { admin  } = useContext(AdminContext) as AdminContextType; // Destructure admin and setAdmin

  console.log(admin);

 return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />}/>
        <Route path='/userprofile' element={
         <OrderContextProvider>
           <UserProfile />
         </OrderContextProvider>}/>
         
         <Route path='checkout' element={
         <OrderContextProvider>

            <Checkout />
         </OrderContextProvider>
        }/>
         
        <Route path='/productdetails/:productId' element={<ProductDetails />} />

        <Route path='/adminlogin' element={<AdminLogin />}/>
         
        <Route path='/adminpage' element={
            <AdminPage />
          }/>

        <Route path='/extendedproduct' element={
          <ProductContextProvider>
            <ExtendedProduct />
            </ProductContextProvider>
          }/>

        <Route path='/adminproductdetails/:productId' element={
          //  <Protected admin={admin} >
              <AdminProductDetails />
            // </Protected>
            } />
       
       
       <Route path='/adminorders' element={
          // <Protected admin={admin} >
            <OrderContextProvider>
              <AdminOrders />
            </OrderContextProvider> 
          // </Protected> 
          }/>

         <Route path='/adminorderdetails/:orderId' element={
          // <Protected admin={admin} >
            <OrderContextProvider>
              <AdminOrderDetail />   
               </OrderContextProvider>
          // </Protected> 
          }/>

        <Route path='/changedproduct' element={
          // <Protected admin={admin} >
            <ProductContextProvider>
              <ChangedProduct formData={{
             name: '',
             description: '',
             price: 0,
             imageURL: ''
           }} />  
              </ProductContextProvider>
          // </Protected> 
          }/>

        <Route path='/deletedproduct' element={
          // <Protected admin={admin} >
              <DeletedProduct />  
          // </Protected> 
          }/>


         </Routes>
      <Footer />
    </div>
  )
}

export default App