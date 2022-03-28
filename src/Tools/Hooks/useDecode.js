import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';

/** Hook to return the logged in User's Id */
const useDecode = () => {

    const [ user, setUser ]=useState();
    const jwt = localStorage.getItem('token');

    useEffect(()=>{
        decodeToken();
    },[jwt]);

    const decodeToken=()=>{
        try{
            const user = jwtDecode(jwt);
            setUser(user);
        }catch(ex){
            console.log(ex)
        }
    }
    
    if(user){
        return user.user_id
    } else return null
}

export default useDecode