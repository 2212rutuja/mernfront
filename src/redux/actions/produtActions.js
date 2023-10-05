import axios from "axios"
import { GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_REQUEST, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCTS_FAILURE } from "../constants/productConstant";


//const URL = 'http://localhost:8000';
//const URL = '';

const URL = "https://flipkartbackend-ejex.onrender.com";


export const getProducts =() =>async (dispatch)=>{
    try{
        const {data} = await axios.get(`${URL}/products`)
        
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload:data
        })

    }catch(error){

        dispatch({
            type:GET_PRODUCTS_FAILURE,
            payload:error.message
        })
    }
}

export  const getProductDetails =(id) => async(dispatch)=>{
    try{
        dispatch({type:GET_PRODUCT_DETAIL_REQUEST})
        const {data} = await axios.get(`${URL}/product/${id}`)
        dispatch({
            type: GET_PRODUCT_DETAIL_SUCCESS,
            payload:data
        })


    }catch(error){
        dispatch({
            type:GET_PRODUCT_DETAIL_FAILURE,
            payload:error.response
        })

    }
}