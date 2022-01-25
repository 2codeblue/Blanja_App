import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const userContext = createContext(null);
const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const userId = JSON.parse(localStorage.getItem('userId'))
        if (userId) {
            axios({
                baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
                method : 'GET',
                url : `/users/customer/${userId}`
            })
            .then((res) => {
                const result = res.data.data[0]
                setUser(result)
            })
            .catch((err) => {
                console.log(err.response)
            })
        }
    },[])
  return (
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
  );
};

export default UserContext;
