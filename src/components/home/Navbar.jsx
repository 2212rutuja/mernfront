import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../constants/data'

const WrapperImage = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '55px 130px 0 130px',
    justifyContent:'space-between',
    alignItems:'center',
    textAlign:'center',
    overflow:'hidden',
    [theme.breakpoints.down('lg')]:{
      margin:'0px'
    }
    
    
  }))

const IndividualImage= styled(Box)({
    padding:'12px 8px;'
})
  
const TextHeight = styled(Typography)({
    fontSize:'14px;',
    fontWeight:'600',
    cursor:'pointer',
    ":hover":{
        color:'#2874f0'
    },
    fontFamily:'inherit'
})

export default function Navbar() {
  return (
 <Box style={{backgroundColor:'white'}}>
<WrapperImage>
  {navData.map((data, index) => (
    <IndividualImage key={index}>
      <img src={data.url} alt="" style={{width:80}}/>
      <TextHeight>{data.text}</TextHeight>
    </IndividualImage> 
  ))}
</WrapperImage>
</Box> 
  )
}
