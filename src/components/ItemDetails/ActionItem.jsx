import { Button,Box,makeStyles } from "@material-ui/core"
import { useState, useContext} from 'react';
import clsx from "clsx"
import {ShoppingCart as Cart, FlashOn as Flash} from "@material-ui/icons"
import { addToCart } from "../../redux/actions/cartAction"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {payUsingPaytm} from "../service/api"
import {post } from "../utilis/paytm"
import { LoginContext } from '../../context/ContextProvider';


const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
image:{
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%"
},
button:{
    height: 50,
    width: "46%",
    borderRadius: 2
},
addToCart:{
    background: "#ff9f00",
    color: "#fff",
    marginRight: 10
},
buyNow: {
    background: "#fb641b",
    color: "#fff"
}
}))

const ActionItem = ({product}) =>{
    const classes= useStyle()
    const history = useHistory()
    const { account } = useContext(LoginContext);
    const { id, price, url, title } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        history.push('/cart');
    }
    const buyNow = async()=>{
       let response= await payUsingPaytm( {amount: '500', email: 'santhoshdura@gmail.com'});
       var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
    }
return(
    <Box className={classes.leftContainer}>
        <img src={product.url} className={classes.image} /> <br />
        <Button onClick={() => addItemToCart()} className={clsx(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained"><Cart />Add to Cart</Button>
        <Button onClick={() => buyNow()} className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button>
     </Box>
)
}

export default ActionItem