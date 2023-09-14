import { useContext } from 'react'
import { BsFillCupFill } from "react-icons/bs";

import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext, UserContextType } from '../contexts/UserContext';
import DropDown from './DropDown';
import { AdminContext, AdminContextType } from '../contexts/admin/AdminContext';


const Navbar = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext) as UserContextType
  const { admin, setAdmin } = useContext(AdminContext) as AdminContextType

  const handleLogoutUser = () => {
    
    console.log("works")
    localStorage.removeItem('user-token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/')
};
const handleLogoutAdmin = () => {
  localStorage.removeItem('admin-token');
  setAdmin(null);
  navigate('/')
};

const goToDashboad = () => {
  navigate('/adminpage')
    
 }

 return (
  <div className='header'>
    <div className='title-logo'>
      <BsFillCupFill size={35} />
      <h1>ECOMMERCE</h1>
      {admin ? <>
      <button className='btn btn-danger btn-sm handle-admin' onClick={handleLogoutAdmin}>Logout Admin</button>
      <button className='button-dashboard' onClick={goToDashboad} >Dashboard</button>
      </>  :  <>
      <p></p>
      </>}
      
    </div>
    <div className='navigation'>
      <li>
        <NavLink to='/'>HOME</NavLink>
      </li>
      <li>
        <NavLink to='/product'>PRODUCTS</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>CONTACT</NavLink>
      </li>
      {user ? (
        <>
        <NavLink to='/userprofile'>
          <li className='text-uppercase button user-message-nav'>WELCOME USER</li>
        </NavLink>
          <li>
            <button className='btn btn-danger btn-sm' onClick={handleLogoutUser}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to='/login'>LOGIN</NavLink>
        </li>
      )}
      

      <DropDown />
     
       
    </div>
  </div>
);
}

export default Navbar