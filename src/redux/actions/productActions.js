import axios from "axios"
import * as actionTypes from "../constants/productConstant"
// const url = "http://localhost:5000"

export const getProducts =() => async (dispatch)=>{
    try{
        const {data} = await axios.get(`/products`)
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data})
    }catch(err){
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: err.response})
    }
};

export const getProductDetails= (id)=> async(dispatch)=>{
try{
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const {data} = await axios.get(`/product/${id}`)
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data});

}catch(err)
{
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: err.response});   
}
}

export const removeProductDetails = () => (dispatch) => {
    
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};