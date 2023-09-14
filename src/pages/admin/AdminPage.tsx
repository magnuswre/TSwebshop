import React from 'react';
// import { ProductContextProvider } from '../../contexts/ProductContext';
import AdminPageDetails from '../../components/admin/AdminPageDetails';
import ProductContextProvider from '../../contexts/ProductContext';

const AdminPage: React.FC = () => {
  return (
    <div>
      <ProductContextProvider> 
        <AdminPageDetails />
      </ProductContextProvider>
    </div>
  );
};

export default AdminPage;


// import React, { useState } from 'react';

// // Define the props for AdminPageDetails component
// export interface AdminPageDetailsProps {
//   formData: {
//     name: string;
//     imageURL: string;
//     price: number;
//     description: string;
//   };
// }

// const AdminPageDetails: React.FC<AdminPageDetailsProps> = ({ formData }) => {
//   // Your component logic here, using formData
//   return (
//     <div>
//       {/* Render your component with formData */}
//       <div>
//         <p>Name: {formData.name}</p>
//         <p>Image URL: {formData.imageURL}</p>
//         <p>Price: {formData.price}</p>
//         <p>Description: {formData.description}</p>
//       </div>
//     </div>
//   );
// };


// const initFormData: AdminPageDetailsProps['formData'] = {
//   name: '',
//   imageURL: '',
//   price: 0,
//   description: '',
// };

// const AdminPage: React.FC = () => {
//   const [formData, setFormData] = useState(initFormData);

//   return (
//     <div>
//       {/* Pass the formData as a prop */}
//       <AdminPageDetails
//         formData={formData}
//       />
//     </div>
//   );
// };

// export default AdminPage;