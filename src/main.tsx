import * as ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import UserContextProvider from './contexts/UserContext';
import AdminContextProvider from './contexts/admin/AdminContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AdminContextProvider>
      <CartProvider>
         <UserContextProvider>
            <App />
         </UserContextProvider>
       </CartProvider>
  </AdminContextProvider>
</BrowserRouter>
);