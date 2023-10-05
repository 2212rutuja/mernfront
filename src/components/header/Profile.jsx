import { Typography,Box, Divider } from '@mui/material'
import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import styled from '@emotion/styled'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



const UserBtn = styled(Box)({
    width:'240px'
})

const Icon = styled(Typography)({
  fontSize:'16px',
  marginLeft:'12px'
})

export default function Profile({account, setAccount}) {
    const [open, setOpen] = useState(false)
    const handleClick = (event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose = ()=>{
        setOpen(false)
    }

    const logoutUser = ()=>{
        setAccount('');
    }

  return (
    <>
    <Box onClick={handleClick}><Typography style = {{margin:2}}>{account} </Typography> </Box>
    <Menu
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <UserBtn>
        <MenuItem onClick={handleClose}><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg" alt="" style={{width:18,height:18}} /><Icon>My Profile</Icon></MenuItem><Divider/>
        <MenuItem onClick={handleClose}><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="" style={{width:18,height:18}}/><Icon>Flipkart Plus</Icon></MenuItem><Divider/>
        <MenuItem onClick={handleClose}><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg' alt='order' style={{width:18,height:18}}/><Icon>Orders</Icon></MenuItem><Divider/>
        <MenuItem onClick={handleClose}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" style={{width:18,height:18}}/><Icon>Wishlist</Icon></MenuItem><Divider/>
        <MenuItem onClick={handleClose}><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" alt="" style={{width:18,height:18}}/><Icon>Rewards</Icon></MenuItem><Divider/>
        <MenuItem onClick={handleClose}><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="" style={{width:18,height:18}}/><Icon>Gift Cards</Icon></MenuItem><Divider/>
        <MenuItem onClick={()=>{handleClose(); logoutUser();}}> <PowerSettingsNewIcon style={{width:18, height:18}}/> <Icon>Logout</Icon></MenuItem>
        </UserBtn>
      </Menu>
    </>
  )
}
