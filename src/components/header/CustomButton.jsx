import React from 'react'
import { Badge, Box, Typography } from '@mui/material';
import {Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material';
import { useState, useContext } from 'react';
import LoginDailouge from '../login/LoginDailouge';
import { DataContext } from '../../context/DataProvide';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    margin: '0% 3% 0% auto',
    '& > button, & > p, & > div':{
        marginRight:'40px',
        fontSize:'16px'

    },
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Container = styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'white',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const LognBtn = styled(Button)({
    color:'#2874f0',
    background:'#fff',
    textTransform:'none',
    padding: '5px 40px',
    borderRadius:'2px',
    boxShadow:'none',
    height:'32px',
    fontWeight:'8px',
    ":hover":{
    background:'#fff',
    color:'#2874f0'
}
       
    
})

export default function CustomButton() {
    const [open, setOpen] = useState(false);
    const {account,setAccount} = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart)

    const openDialog = ()=>{
        setOpen(true);
    }

  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount}/>:
                <LognBtn variant="contained" onClick={()=>openDialog()}>Login</LognBtn>
        }
        
        <Typography style={{marginTop:3, width:135}}> Become a Seller</Typography>
        <Typography style={{marginTop:3}}> More </Typography>
        <Container to='/cart'>
            <Badge badgeContent = {cartItems?.length} color="error">
            <ShoppingCartIcon />
            </Badge>
            <Typography style={{marginLeft:'10px'}}>Cart</Typography>
        </Container>
        <LoginDailouge open={open} setOpen={setOpen}/>
           
    </Wrapper>
  )
}
