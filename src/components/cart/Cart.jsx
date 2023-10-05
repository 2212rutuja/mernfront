import { Grid, Typography,Box, styled, Button } from "@mui/material"
import { useSelector } from "react-redux"

import CartItem from "./CartItem"
import TotalBalance from "./TotalBalance"
import EmptyCart from "./EmptyCart"
import { payWithPaytm } from "../../service/api"
import { post } from "../../utils/paytm"


const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('sm')]:{
        padding:'20px 0px'
    }
}))

const Header = styled(Box)({
    padding: '15px 24px',
    backgroundColor:'white'
})

const OrderBtn = styled(Button)(({theme})=>({
    backgroundColor:'#f4511e',
    color:'white',
    fontWeight:'600',
   padding:'12px',
   display:'flex',
   marginLeft:'auto',
   width:'30%',
   borderRadius:'2px',    
   [theme.breakpoints.down('md')]:{
    width:'100%',
   
   }
}))

const BtnWrapper = styled(Box)({
    padding:'16px 22px',
    backgroundColor:'white',
    boxShadow:'0px -2px 10px 0 rgba(0, 0, 0, 0.1)'
    
})

const LeftComponent = styled (Grid)(({theme})=>({
    
    [theme.breakpoints.down('md')]:{
        marginBottom:'15px',
        marginLeft:'10px'
    }
}))

const Footer = styled(Box)(({theme})=>({
    display:'flex',
    alignItems: 'center',
    padding:'10px 90px',
    color:'#9e9e9e',
    borderTop:'1px solid #bdbdbd',
    margin:'25px',
    fontSize:'14px',
    [theme.breakpoints.down('md')]:{
        display:'none',
     
    }
}))


const Cart = () =>{
    const {cartItems}= useSelector(state=>state.cart)
    const buyNow = async() =>{
        let response = await payWithPaytm({amount:500, email:'personaluse2212@gmail.com'})
        var information = {
            action:'https://securegw-stage.paytm.in/order/process',
            params : response
        }
        post(information)
    }
    return (
        <>
            {
                cartItems.length ?
                <Container container >
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item =>(
                                    <CartItem item={item}/>
                            ))

                        }
                    <BtnWrapper>
                            <OrderBtn onClick={()=> buyNow()}> Place Order</OrderBtn>
                        </BtnWrapper>

                    </LeftComponent>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalBalance cartItems={cartItems}/>

                    </Grid>

                    <Footer >
                        <Typography >Policies:Returns PolicyTerms of useSecurityPrivacyInfringement© 2007-2023 Flipkart.com </Typography>
                        <Typography  style={{ marginLeft:'25px'}}> Need help? Visit the Help Center or Contact Us</Typography>
                    </Footer>




                </Container>
                : <EmptyCart/>
            }
           
        </>

    )
}

export default Cart