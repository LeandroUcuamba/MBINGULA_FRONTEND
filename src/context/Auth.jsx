import { createContext, useEffect, useState } from "react";
import api from '../service/api'

export const AuthContext = createContext();

export const AuthProvider = ({ clidren }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
       const loadingStoreData = async () => {
           const storageUser = localStorage.getItem("@Auth:user");
           const storageToken = localStorage.getItem("@Auth:token");
    
            if(storageUser && storageToken){
                setUser(storageUser);
            }
        };
        loadingStoreData();
    }, [])

    const signIn = async ({ phone, password }) => {
        const response = await api.post("/sign-in", {
            phone,
            password
        });

        if(response.data.error){
           alert(response.data.error);
        }else{
           setUser(response.data);
           api.default.headers.common[
              "Authorization"
           ] = `Bearer ${response.data.token}`;
           localStorage.setItem("@Auth:token", response.data.token);
           localStorage.setItem("@Auth:user", response.data.user);
        }

    }

   return (
     <AuthContext.Provider 
        value={{
          user,
          signed: !!user,
          signIn
        }} >
        {clidren}
     </AuthContext.Provider>
   )

}