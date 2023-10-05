import { Box, Button, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { payWithPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px;',
    [theme.breakpoints.down('md')]:{
        padding:'20px 40px'
    }
  
}))

const LeftImage = styled('img')({
    
    width:'85%',
    padding:'15px'
    
})

const OrderBtn = styled(Button)(({theme})=>({
    fontSize:'16px',
    fontWeight:'600',
    width:'46%',
    height:'50px',
    marginTop:'10px',
    borderRadius:'2px',
    [theme.breakpoints.only('md')]:{
        fontSize:'14px',
        fontWeight:'600',
        width:'80%',
        height:'50px',

    }
}))

const  ActionItem = ({product})=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const {id} = product

    const addItemToCart = () =>{
        dispatch(addToCart(id,quantity))
        navigate('/cart')
    }

    const buyNow = async() =>{
        let response = await payWithPaytm({amount:500, email:'personaluse2212@gmail.com'})
        var information = {
            action:'https://securegw-stage.paytm.in/order/process',
            params : response
        }
        post(information)
    }

    return(
        <LeftContainer>
            <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0',marginRight:'20px'}}>
                 <LeftImage src={product.detailUrl} alt="product image" />
            </Box>
            <OrderBtn variant='contained'  onClick={()=> addItemToCart()} style={{backgroundColor:'#ffa000',marginRight:'12px'}} ><ShoppingCartIcon style={{width:'20px', height:'24px'}}/>&nbsp;ADD TO CART</OrderBtn>
            <OrderBtn variant="contained" onClick={()=> buyNow()} style={{backgroundColor:'#f4511e'}}><FlashOnIcon style={{width:'20px', height:'24px'}}/>&nbsp;BUY NOW </OrderBtn>
        </LeftContainer>

    )
}

export default ActionItem