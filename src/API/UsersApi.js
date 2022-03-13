import axios from 'axios';

const base = 'http://127.0.0.1:8000/api/auth/'
const jwt = localStorage.getItem('token')
const headers = {headers: {Authorization: 'Bearer '+ jwt}}

const login=async(props)=>{
    try{
        let response = await axios.post(base+'login/', props);
        if(response.data){
          localStorage.setItem('token', response.data.access)
        }
      }
      catch(ex){
        console.log("Error Logging In", ex)
      }
}

const getUserDetails=async(props)=>{
    try{
        let response = await axios.get(base+`user/${props}/`, headers);
        return response.data;
    }
    catch(ex){
        console.log(ex)
    }
}

const Users={
    login, getUserDetails
}
export default Users