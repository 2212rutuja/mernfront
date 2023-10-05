import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom"// to extract something from url
import { getProductDetails } from "../../redux/actions/produtActions"
import { Box,  styled, Grid} from "@mui/material"
import ActionItem from "./ActionItem"

import ProductDetail from "./ProductDetail"

const Component = styled(Box)({
    background:'#f2f2f2',
    marginTop:'55px'
})

const Container = styled(Grid)(({theme})=>({
    backgroundColor:'#ffffff',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:'0px'
    }
}))

const RightContainer = styled(Grid)({
    marginTop:'55px'
})


const DetailView = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const {  loading,product } = useSelector(state => state.getProductDetails);
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch,id,product,loading])
 
    console.log(product)
    


    return (
        
        <Component>
            
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product={product}/>
                    </RightContainer>
                </Container>


            }
        </Component>
    )
}
export default DetailView