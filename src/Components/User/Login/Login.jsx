import React, { useState} from 'react'
import Users from '../../../API/UsersApi'

export const Login = () => {
  const [ userName, setUserName ]=useState("");
  const [ password, setPassword ]=useState("");

  const userLogin=async()=>{
      let login={
          username: userName,
          password: password
      }
     await Users.login(login);
  }

  const loginHandle=()=>{
      userLogin()
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


