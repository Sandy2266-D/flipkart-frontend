import axios from "axios"
const url= " ";

export const authenticateSignup = async (user)=>{
    try{
        return await axios.post(`${url}/signup`, user)
    }catch(err)
    {
        console.log("error while calling signup",err)
    }
    
}

export const authenticateLogin = async (user)=>{
    try{
        return await axios.post(`${url}/login`, user)
    }catch(err)
    {
        console.log("error while calling Login")
    }   
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export const payUsingPaytm = async(data) =>{
    try{
        console.log('payment api');
        let response = await axios.post(`${url}/payment`,data)
        return response.data;
    }catch(err){
        console.log("while logging paytm api",err)
    }
}