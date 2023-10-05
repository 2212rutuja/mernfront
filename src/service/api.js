import axios from 'axios';

//const URL = "http://localhost:8000" //backendurl

//const URL = "" //backendurl

const URL = "https://flipkartmern.onrender.com";

export const authenticateUser = async (data)=>{
    try{
            return await axios.post(`${URL}/signup`,data) //hit signup url

    }catch(e){
        console.log("Error while handling signup api",e.message)
    }
}

export const authenticateLogin = async (data)=>{
    try{
            return await axios.post(`${URL}/login`,data) //hit login url

    }catch(e){
        console.log("Error while handling login api",e.message)
        return e.response;
    }
}

export const payWithPaytm = async(data) =>{
    try{
        let response = await axios.post(`${URL}/payment`,data)
        return response.data

    }catch(error){
        console.log('Error while handling paytm api', error.message)
    }
}