import { Box, Typography,styled, Table, TableBody, TableRow, TableCell } from "@mui/material"
//import StarRateIcon from '@mui/icons-material/StarRate'
import SellIcon from '@mui/icons-material/Sell';
import { Chip } from '@mui/material';

const AvaliableOffer = styled(Typography)({
    marginTop:'8px',
     fontSize:'14px',
     display: 'flex', 
     alignItems: 'center'

})

const TabelComponent = styled(TableRow)({
    fontSize:'14px',
    verticalAlign:'baseline',
    marginTop:'10px',
    '& > td' :{
        border:'none'
    }
    
})

const RightDetail = styled(Typography)({
    marginLeft:'10px'
})




const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const addUrl = 'https://rukminim1.flixcart.com/lockin/400/185/images/CCO__PP_2019-07-14.png?q=50'
    const date = new Date(new Date().getTime()+(5*24*60*60*1000))
    return (
        <>
        <RightDetail>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ color: '#388e3c', marginTop: '4px', fontSize: '14px', fontWeight: '600' }}> Special price</Typography>
            <Typography style={{ marginTop: '4px' }}>
                <Box component='span' style={{ fontSize: '30px', fontWeight: '600' }}>&#8377;{product.price.cost}&#160;</Box>
                <Box component='span' style={{ color: '#878787', fontWeight: '550' }}><strike>&#8377;{product.price.mrp} </strike> &#160;</Box>
                <Box component='span' style={{ color: '#388e3c', fontWeight: '550' }}>{product.price.discount}&#160;off</Box>
            </Typography>

            <Typography style={{ marginTop: '4px', color: '#878787', fontSize: '16px', fontWeight: '500',display:'flex',alignItems:'center' }}>
                
                <Chip label="4.2 ★" size="small" style={{marginRight: '8px',backgroundColor:'#388e3c',color:'white'}} />
                    118 Ratings & 56 Reviews
                <Box component='span'> <img src={fassured} alt="logo" style={{ width: '70px', marginLeft: '10px'}} /> </Box>
            </Typography>
         
            <Typography style={{marginTop:'15px',fontWeight:'500'}}>Avaliable Offers</Typography>
            <Box>
                <AvaliableOffer >
                    <SellIcon style={{color:'#4caf50',marginRight:'10px',height:'20px'}}/>Special PriceGet extra 20% off (price inclusive of cashback/coupon)T&C
                </AvaliableOffer>
                <AvaliableOffer >
                    <SellIcon style={{color:'#4caf50',marginRight:'10px',height:'20px'}}/>Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C
                </AvaliableOffer>
                <AvaliableOffer >
                    <SellIcon style={{color:'#4caf50',marginRight:'10px',height:'20px'}}/>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C
                </AvaliableOffer>
                <AvaliableOffer>
                    <SellIcon style={{color:'#4caf50',marginRight:'10px',height:'20px'}}/>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More
                </AvaliableOffer>
                <AvaliableOffer >
                    <SellIcon style={{color:'#4caf50',marginRight:'10px',height:'20px'}}/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
                </AvaliableOffer>  
            </Box>
            </RightDetail>
            <Table style={{marginTop:'10px'}}>
                <TableBody>
                    <TabelComponent >
                        <TableCell style={{color:'#878787'}}> Delivery </TableCell>
                        <TableCell style={{fontWeight:'600'}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TabelComponent>
                    <TabelComponent>
                        <TableCell style={{color:'#878787'}}> Warranty</TableCell>
                        <TableCell>1-Year warranty is non-transferable and valid for 1 year from the original date of purchase.</TableCell>
                    </TabelComponent>
                    <TabelComponent>
                        <TableCell style={{color:'#878787'}}> Services</TableCell>
                        <TableCell> <Chip label="₹" size="small" style={{marginRight: '8px',backgroundColor:'#2979ff',color:'white'}} />Cash on Delivery available</TableCell>
                    </TabelComponent>
                    <TabelComponent>
                        <TableCell style={{color:'#878787'}}> Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{color:'#2874f0'}}>RetailNet </Box>
                            <Chip label="4.8 ★" size="small" style={{marginLeft: '6px',backgroundColor:'#2979ff',color:'white'}} />
                            <Typography style={{fontSize:'14px'}}>•&nbsp; 7 Days Service Center Replacement/Repair</Typography>
                            <Typography style={{fontSize:'14px'}}>•&nbsp; GST invoice available</Typography>   
                        </TableCell>
                    </TabelComponent>
                    <TabelComponent >
                        <TableCell style={{color:'#878787'}}> Specification </TableCell>
                        <TableCell >{product.description}</TableCell>
                    </TabelComponent>
                    <TabelComponent>
                        <TableCell colSpan={2}>
                            <img src={addUrl} style={{width:'390'}} alt="supercoin" /></TableCell>   
                    </TabelComponent>
                </TableBody>
            </Table>

        </>
    )
}

export default ProductDetail