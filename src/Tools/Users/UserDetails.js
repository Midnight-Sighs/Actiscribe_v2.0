import { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Users from '../../API/UsersApi'
import useActivities from '../Hooks/useActivities'
import useDecode from '../Hooks/useDecode'
import { setDetails, setId } from '../../Redux/Slices/userSlice'

/**Sets user details to Redux and calls 'useActivities' to get userActivities */
const UserDetails = () => {

    const userId=useDecode();
    const dispatch = useDispatch();
    useActivities();
    const mountedRef = useRef(false);
    const [ userDetails, setUserDetails ]=useState(null)

    //When putting a function in a dependency array for a useEffect, it should be a useCallback function with its own dependencies.
    //It also needs to be called BEFORE the useEffect to prevent another warning
    const getUserDetails=useCallback(async()=>{
        let response = await Users.getUserDetails(userId)
        if(response && mountedRef.current === true){
            setUserDetails(response);
        }
        dispatch(setId(userId));
        dispatch(setDetails(response));
    },[dispatch, userId]);

    useEffect(()=>{
        mountedRef.current = true

        if(userId){
            getUserDetails();
        }

        return()=>{
            mountedRef.current = false;
        }
    },[userId, getUserDetails]);


    return(
        userDetails
    )

}

export default UserDetails