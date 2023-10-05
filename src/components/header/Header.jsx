//import React, { Component } from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Typography, styled } from '@mui/material'
import {Box, IconButton, Drawer, List,ListItem} from '@mui/material'
import SearchBar from './SearchBar'
import CustomButton from './CustomButton'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'


const MyNavbar = styled(AppBar)({
    background: '#2874f0',
    width: '100%',
    height: '56px',
    cursor: 'pointer'

})

const Wrapper = styled(Link)({
  marginLeft: '12%',
  lineHeight : '0',
  textDecoration:'none',
  color:'inherit'
})

const SubHeading = styled(Typography)({
    fontSize: '11px',
    fontStyle: 'italic',
    marginTop: '-1px',
    cursor: 'pointer',
    ":hover":{
      textDecoration:'underline'
    }
    
    
})

const PlusLogo = styled('img')({
  width:'10px',
  height:'12px',
})

const CustomWrapper = styled(Box)(({theme})=>({
  margin:'0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
      display:'none'
  }
}))

const MenuBtn = styled(IconButton)(({theme})=>({
  display:'none',
  [theme.breakpoints.down('md')]:{
      display:'block',
      color:'white'
  }

}))

export default function Header() {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  const [open, setOpen] = useState(false)

  const handleOpen = ()=>{
      setOpen(true)
  }

  const handleClose = ()=>{
      setOpen(false)
  }

  const list = () => {
    return (
      <Box style={{width:'200px'}} onClick={handleClose}>
        <List>
          <ListItem button>
            <CustomButton/>
          </ListItem>
        </List>
      </Box>
    );
  }

  return (
    
      <MyNavbar>
        <Toolbar style={{minHeight:55}}>
        <MenuBtn onClick={handleOpen}>
          <MenuIcon />
        </MenuBtn>
        <Drawer open={open} onClose={handleClose}>
            {list()}
        </Drawer>
          
          <Wrapper to={`/`}>
            <img src={logoURL} alt="logo" style={{width:75}} />
            <Box display={'flex'}>
              <SubHeading>
                Explore
                  <Box component="span" style={{color:'#ffe500'}}> Plus&nbsp;</Box>
                  
              </SubHeading>  
              <PlusLogo src={subURL} alt="sublogo" />
              
            </Box>
          </Wrapper>
          
           <SearchBar/> 
           <CustomWrapper>
            <CustomButton/>
           </CustomWrapper>
        </Toolbar>
      </MyNavbar>
      
    
  )
}
