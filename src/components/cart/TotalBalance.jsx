import { Box, Typography, styled } from "@mui/material"
import { useState , useEffect, useCallback} from "react"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
//import BtnGroup from "./ButtonGroup";

const Heading = styled(Box)({
    padding:'15px 24px',
    backgroundColor:'#fff',
    borderBottom:'2px solid #f0f0f0'
})

const HeadingStyle = styled(Typography)({
    color:'#878787'
})

const Container = styled(Box)({
    padding:'15px 24px',
    backgroundColor:'#fff',
    ' & > p':{
        marginBottom:'20px',
        fontSize:'14px'

    }
})

const Price = styled(Box)({
    float:'right'
})



  const TotalBalance = ({ cartItems }) => {
    
    
        const [price, setPrice] = useState(0);
        const [discount, setDiscount] = useState(0);
      
        const totalAccount = useCallback(() => {
          let totalPrice = 0, totalDiscount = 0;
          cartItems.map(item => {
            totalPrice += item.price.mrp;
            totalDiscount += (item.price.mrp - item.price.cost);
            return null;
          });
          setPrice(totalPrice);
          setDiscount(totalDiscount);
        }, [cartItems]);
      
        useEffect(() => {
          totalAccount();
        }, [cartItems, totalAccount]);
      

    return(
        <Box style={{marginLeft:'10px'}} > 
            <Heading>
                <HeadingStyle>PRICE DETAILS</HeadingStyle>
            </Heading>
            <Container>
                <Typography>Price ({cartItems?.length} item)
                    <Price component='span'> ₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component='span'> -₹{discount}</Price>
                </Typography>
                <Typography style={{ borderBottom:'3px dotted #f0f0f0',paddingBottom:'20px'}}>Delivery Charges
                    <Price component='span'> ₹40</Price>
                </Typography>
                <Typography style={{ borderBottom:'3px dotted #f0f0f0',paddingBottom:'20px',fontWeight:'600'}}>Total Amount
                    <Price component='span'> ₹{price-discount+40}</Price>
                </Typography>
                <Typography style={{color:'#4caf50'}}>You will save ₹{discount- 40} on this order</Typography>
                
            </Container>
            <Typography style={{color:'#616161',marginTop:'14px',display:'flex',alignItems:'center',fontSize:'14px'}}><VerifiedUserIcon style={{fontSize: "1.6rem",marginRight:'8px'}}/>Safe and Secure Payments.Easy returns.100% Authentic products.</Typography>
           

        </Box>
    )
}

export default TotalBalance