import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

export interface AdminContextType {
  admin: Admin | null; 
  setAdmin: Dispatch<SetStateAction<User | null>>; 
}

export const AdminContext = createContext<AdminContextType | undefined>(undefined);

const AdminContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [admin, setAdmin] = useState<User | null>(null); 
   
    useEffect(() => {
        const storedAdmin = localStorage.getItem("admin-token");
        if (storedAdmin) {
          try {
            setAdmin(JSON.parse(storedAdmin));
          } catch (error) {
            console.error("Error parsing Admin data:", error);
          }
        }
      }, []);


    const value: AdminContextType = {
        admin,
        setAdmin
      }
    
      return (
        <AdminContext.Provider value={value}>
          {children}
        </AdminContext.Provider>
      )
}

export default AdminContextProvider