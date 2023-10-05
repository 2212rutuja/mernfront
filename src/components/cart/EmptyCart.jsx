import { Box, Button, Typography, styled } from "@mui/material"
import { Link } from "react-router-dom"

const ShopBtn = styled(Button)(({theme})=>({
    backgroundColor:'#2874f0',
    color:'white',
    borderRadius:'1px',
    marginTop:'15px', 
    width:'15%',
    [theme.breakpoints.down('md')]:{
        width:'40%'
    }
}))

const Component = styled(Box)(({theme})=>({
    height:'55vh',
    width:'80%',
    backgroundColor:'#fff',
    margin:'80px 140px',
    [theme.breakpoints.down('md')]:{
        margin:'80px 70px'
    }
}))

const Container = styled (Box)({
    textAlign:'center',
    paddingTop:'70px',
    
})

const Footer = styled(Box)(({theme})=>({
    display:'flex',
    alignItems: 'center',
    padding:'20px 90px',
    color:'#9e9e9e',
    borderTop:'1px solid #bdbdbd',
    margin:'2px',
    fontSize:'14px',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))




const EmptyCart = () =>{
    const emptyUrl ='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'
    return(
        <>
        <Component>
            <Container>
                <img src={emptyUrl} alt="flipkartLogo" style={{width:'20%'}}/>
                <Typography style={{fontSize:'20px'}}> Your cart is empty!</Typography>
                <Typography style={{fontSize:'12px'}}> Add items to it now.</Typography>
                <Link to= '/'>
                    <ShopBtn > Shop Now</ShopBtn>
                </Link>
            </Container>
        </Component>
        <Footer >
        <Typography >Policies:Returns PolicyTerms of useSecurityPrivacyInfringement© 2007-2023 Flipkart.com </Typography>
        <Typography  style={{ marginLeft: 'auto'}}> Need help? Visit the Help Center or Contact Us</Typography>
        </Footer>
    </>
    )
        
    
}


export default EmptyCart