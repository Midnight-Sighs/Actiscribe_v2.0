import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

import Users from '../../../API/UsersApi'

export const Login = () => {
    const navigate = useNavigate();
    const [ userName, setUserName ]=useState("");
    const [ password, setPassword ]=useState("");

    const userLogin=async()=>{
        let login={
            username: userName,
            password: password
        }
        try{
            let response = await Users.login(login);
            if(response.status === 200) navigate("/activity")
        }
        catch(ex){
            console.log(ex)
        }
    }

    const loginHandle=()=>{
        userLogin();
    }

    return(
        <>
            <label htmlFor="username-input">Username</label>
            <input 
                id="username-input"
                onChange={e=>setUserName(e.target.value)}
            />
            <label htmlFor="password-input">Password</label>
            <input 
                id="password-input"
                onChange={e=>setPassword(e.target.value)}
            />
            <button 
                type="button"
                onClick={loginHandle}
            >
                Login
            </button>
        </>
    )
}


