import axios from 'axios';

const Request = async (props)=>{

    const jwt = localStorage.getItem('token');

    const client = axios.create({
        ...props.config,
        baseURL: 'http://127.0.0.1:8000/api/actiscribe/',
        headers: props.headers || {Authorization: "Bearer " +jwt},
        method: props.method || 'GET',
        data: props.data || {},
    })

    const onSuccess = (response)=>{
        return response.data;
    }

    const onError = (error)=>{
        let errorData={
            message: "An error has occured.",
            request: error.config
        };
        if(error.response){
            errorData={
                ...errorData,
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers
            }
        }else error.data.message = error.message;
        return errorData;
    }

    try{
        const response = await client({...props});
        return onSuccess(response);
    }catch(ex){
        return onError(ex)
    }
}

export default Request