import { Box, Button, Typography, styled } from "@mui/material"
import { addEllipsis } from "../../utils/commonutils"
import BtnGroup from "./ButtonGroup"
import { removeFromCart } from "../../redux/actions/cartActions"
import { useDispatch } from "react-redux"
const Component = styled (Box)({
    borderTop:'2px solid #f0f0f0',
    display:'flex',
    backgroundColor:'white'
})

const LeftComponent = styled(Box)({
    margin:'20px',
    display:'flex',
    flexDirection:'column'
})

const SellerText = styled(Typography)({
    color:'#878787',
    fontSize:'14px',
    marginTop:'8px'
})

const RemoveBtn = styled(Button)({
    marginTop:'20px',
    fontSize:'16px',
    color:'black',
    fontWeight:'600'
})

 const DeliveryDate = styled(Typography)(({theme})=>({
    fontSize:'14px',
    marginLeft:'190px',
   
    [theme.breakpoints.down('md')]:{
        display:'none'
    }

})) 




const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime()+(5*24*60*60*1000))
    const dispatch= useDispatch()
    const  removeItemFromCart =(id) =>{
        dispatch(removeFromCart(id))
    }

    return(
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{height:'110px', width:'110px'}}/>
                <BtnGroup/>
            </LeftComponent>
            <Box style={{margin:'20px'}}>
                
                    <Typography >{addEllipsis( item.title.longTitle)}
                    <DeliveryDate component='span' >Delivery by {date.toDateString()} | ₹40</DeliveryDate>
                    </Typography>
                
                <SellerText style={{display:'flex'}} >Seller: Retailet
                <Box component='span' > <img src={fassured} alt="logo" style={{ width: '70px', marginLeft: '10px'}} /> </Box>
                </SellerText>
                <Typography style={{ margin: '8px 0px' }}>
                <Box component='span' style={{ fontSize: '20px', fontWeight: '600' }}>&#8377;{item.price.cost}&#160;</Box>
                <Box component='span' style={{fontSize: '14px', color: '#878787', fontWeight: '550' }}><strike>&#8377;{item.price.mrp} </strike> &#160;</Box>
                <Box component='span' style={{fontSize: '14px', color: '#388e3c', fontWeight: '550' }}>{item.price.discount}&#160;Off 1 coupon and 1 offer applied</Box>
            </Typography>
            <RemoveBtn onClick={()=> removeItemFromCart(item.id)}> remove </RemoveBtn>
            <RemoveBtn> save for later </RemoveBtn>
            </Box>
        </Component>
    )
}

 export default CartItem