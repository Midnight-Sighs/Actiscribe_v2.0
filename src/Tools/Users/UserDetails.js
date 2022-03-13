import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import Users from '../../API/UsersApi'
import useActivities from '../../Components/Hooks/useActivities'
import useDecode from '../../Components/Hooks/useDecode'
import { setDetails, setId } from '../../Redux/Slices/userSlice'

/**Sets user details to Redux and calls 'useActivities' to get userActivities */
const UserDetails = () => {

    const userId=useDecode();
    const dispatch = useDispatch();
    useActivities();
    const mountedRef = useRef(false);
    const [ userDetails, setUserDetails ]=useState(null)

    useEffect(()=>{
        mountedRef.current = true

        if(userId){
            getUserDetails();
        }

        return()=>{
            mountedRef.current = false;
        }
    },[userId]);

    const getUserDetails=async()=>{
        let response = await Users.getUserDetails(userId)
        if(response && mountedRef.current === true){
            setUserDetails(response);
        }
        dispatch(setId(userId));
        dispatch(setDetails(response))
    }

    return(
        userDetails
    )

}

export default UserDetails