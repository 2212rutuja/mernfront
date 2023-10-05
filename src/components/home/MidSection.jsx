import { Grid,styled } from "@mui/material"
import { imageURL } from "../../constants/data.js"

/* const Component = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    
}) */

/* const MidImage = styled('img')({
    width:'33.33%',
    marginRight:'10px'
}) */

const Wrapper  = styled(Grid)({
    marginTop:'10px',
    justifyContent:'space-between'
})

const MidBanImg = styled('img')(({ theme }) => ({
    width: '100%',
    height: '250px',
    marginTop: '10px',
    [theme.breakpoints.down('md')]:{ //applies to screen below medium size
        objectFit :'cover',
        heigh:'150px'

    }
  }));

const MidSection = ()=>{
    const midbannerUrl = 'https://flashsaletricks.com/wp-content/uploads/2016/07/cab8463b683d93c0111bf43f234f6b6a2474810436442088768.jpg'

    return(
        <>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map((image) =>(
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={image} alt="banner"  style={{width:'100%'}} />
                    </Grid>
                ))
            }

        </Wrapper>
        <MidBanImg src={midbannerUrl} alt="midbanner" />
        </>
    )
}

export default MidSection