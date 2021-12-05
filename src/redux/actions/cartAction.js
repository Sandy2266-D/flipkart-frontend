import *as actionTypes from "../constants/cartConstant"
import axios from "axios"
// const url= "http://localhost:5000"

export const addToCart= (id,quantity)=>async (dispatch,getState)=>{
    try{
     const {data} = await  axios.get(`/product/${id}`)

     dispatch ({ type: actionTypes.ADD_TO_CART, payload: data,quantity })
     localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))

    }catch(err)
    {
        console.log("error while calling add to cart")
    }

}

export const removeFromCart = (id) =>(dispatch,getState) =>{
    dispatch({type: actionTypes.REMOVE_FROM_CART, payload: id})
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}