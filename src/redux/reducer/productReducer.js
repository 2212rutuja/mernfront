
import { GET_PRODUCTS_SUCCESS } from "../constants/productConstant"
import { GET_PRODUCTS_FAILURE } from "../constants/productConstant"
import { GET_PRODUCT_DETAIL_REQUEST } from "../constants/productConstant"
import { GET_PRODUCT_DETAIL_SUCCESS } from "../constants/productConstant"
import { GET_PRODUCT_DETAIL_FAILURE } from "../constants/productConstant"
import { GET_PRODUCT_DETAIL_RESET } from "../constants/productConstant"

export const getProductsReducer = (state={products:[]} ,action)=>{
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return{
                products: action.payload

            }
        case GET_PRODUCTS_FAILURE:
            return{
                error: action.payload
            }
        default:
            return state


    }
    

}


export  const getProductDetailsReducer = (state={product:{}}, action)=>{
    switch(action.type){
        case GET_PRODUCT_DETAIL_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_PRODUCT_DETAIL_SUCCESS:
            return{
                loading:false,
                product: action.payload
            }
        case GET_PRODUCT_DETAIL_FAILURE:
            return {
                loading:false,
                error:action.payload
            }
        case GET_PRODUCT_DETAIL_RESET:
            return{
                product:{}
            }
        default: 
            return state
    }

}

