import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { Box, Button, Divider, Typography, styled} from "@mui/material"
import Countdown from 'react-countdown';
import Card from '@mui/material/Card';
import './styles.css'
import { Link } from "react-router-dom";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
}

const Component = styled (Box)({
    marginTop:'10px',
    backgroundColor:'#ffffff'

})

const Deal = styled (Box)({
    padding:'15px 20px;',
    display:'flex'
})

const Timer = styled(Box)({
    display:'flex',
    marginLeft:'7px',
    alignItems:'center',
    color:'#7f7f7f'
})

const DealText = styled (Typography)({
    fontSize:'18px',
    fontWeight:'550',
    marginRight:'8px',
    lineHeight:'32px'
})

const ViewAllBtn = styled(Button)({
    marginLeft:'auto',
    backgroundColor:'#2874f0',
    borderRadius:'2px',
    fontSize:'13px',
    fontWeight:'600px'
})

const Image = styled('img')({
    width:'auto',
    height:'150px'
})



const Slide = ({ products ,title, timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer =({hours,minutes,seconds})=>{
        return <Box variant ="span">{hours}:{minutes}:{seconds}  Left</Box> 

    }
    return (
        <Component>
            <Deal>
                <DealText >{title}</DealText>
                {
                    timer &&
                 <Timer>
                    <img src={timerURL} alt="timer" style={{width:'24px'}}/>
                    <Countdown date={(Date.now() + 5.04e+7)} renderer={renderer}/>
                </Timer> 
                }
                <ViewAllBtn variant = "contained" color="primary"> View All</ViewAllBtn>
            </Deal>
            <Divider/>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                shouldAutoScroll={true}
            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                        <Card className="product-card">
                        <Box textAlign="center" style={{padding:"25px 15px"}}>
                        <Image src={product.url} alt="slider products"  />
                        <Typography textAlign="center" style={{marginTop:'5px', color:'black'}}>{product.title.shortTitle}</Typography>
                        <Typography fontWeight="600">From &#8377;{product.price.cost} </Typography>
                        </Box>
                        </Card>
                        </Link>
                        
                    ))
                }
            </Carousel>
        </Component>
    )

}

export default Slide