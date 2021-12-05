import {useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import { getProductDetails } from "../../redux/actions/productActions"
import {Box,makeStyles, Typography,Grid} from "@material-ui/core"
import clsx from "clsx"
import ActionItem from "./ActionItem"
//import { getProductByID } from "../service/api"
import ProductDetail from './ProductDetail';
//import { useParams } from 'react-router-dom';


const useStyle = makeStyles(theme=>({
    component:{
        marginTop: 55,
        background: "#F2F2F2"
    },
    container:{
        margin: "0 80px",
        background: '#fff',
        display: 'flex',
        [theme.breakpoints.down('md')]:
    {
        margin: 0
    }
    },
    rightContainer:{
        marginTop: 50,
        '& > *':{
            marginTop: 10
        }
    },
    smallText:{
        fontSize: 14,
        verticalAlign: "baseline",
        "& > *":{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor:{
        color: "#878787"
    },
    price:{
        fontWeight: 28
    },badge:{
        fontSize: 14,
        marginRight: 15,
        color: "#00CC00"
    }
}))

const data = { 
    id: '',
    url: '', 
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    }, 
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '', 
    tagline: '' 
};

const DetailView = ({ match }) =>{
    const classes= useStyle()
    const dispatch = useDispatch();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, product } = productDetails;

    useEffect(() => {
        if(product && match.params.id !== product.id)   
            dispatch(getProductDetails(match.params.id));
    }, [dispatch, product, match, loading]);

    return(
        <Box className={classes.component}>
            <Box> </Box>
            { product && Object.keys(product).length && 
            <Grid container className={classes.container}>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText,classes.greyTextColor)}>
                        8 Ratings & 1 Review
                        <span><img src={fassured} style ={{width: 77, marginLeft: 20}}/></span></Typography>
                <Typography>
                    <span className={classes.price}>₹ {product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}>₹ <strike>{product.price.mrp}</strike></span> &nbsp;&nbsp;
                    <span style={{color: "#388E3C"}}>{product.price.discount} off </span>
                </Typography>
                <ProductDetail product={product} />
                {/* <Typography style={{marginTop: 20, fontWeight: 600}}>Available Offers</Typography>
                <Box className={classes.smallText}>
                    <Typography><Badge className={classes.badge} />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                    <Typography><Badge className={classes.badge} />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction</Typography>
                    <Typography><Badge className={classes.badge} />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                    <Typography><Badge className={classes.badge} />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                </Box>
                <Table>
                    <TableBody>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                            <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>                          
                        </TableRow>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>
                                    Warranty
                                </TableCell>
                                <TableCell>No Warranty</TableCell>          
                            </TableRow>
                        <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>
                            Seller</TableCell>
                            <TableCell className={classes.smallText}>
                                <span style={{color: "#2874f0"}}>SuperComNet</span>
                                <Typography>GST invoice Available</Typography>
                                <Typography>14 Days Return policy</Typography>
                                <Typography>View More Sellers starting from ₹300</Typography>
                            </TableCell>                          
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell colSpan={2}>
                                <img src={sellerURL} style={{width: 390}} />
                             </TableCell>                          
                        </TableRow>
                        <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}> Description </TableCell> 
                            <TableCell>{product.description} </TableCell>                         
                        </TableRow>
                        
                    </TableBody>
                </Table> */}
                </Grid>
                
            </Grid>
}
        </Box>
    )
}

export default DetailView