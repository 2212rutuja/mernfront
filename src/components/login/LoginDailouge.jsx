import React from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { useState , useContext} from 'react'
import { authenticateUser,authenticateLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvide'


const Component = styled(Box)({
  height: '70vh',
  width: '90vh',
  background: '#fff',
  overflow: 'hidden',
})

const Leftimage = styled(Box)({
  background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)no-repeat center 70%',
  color: '#f1f3f6',
  padding: '45px 35px;',
  width: '30%',
  height: '100%'
})

const RightWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 35px;',
  flex: '1',
  '& > div, & > button, & > p': {
    marginTop: '20px'
  },
  
  


})

const LoginBtn = styled(Button)({
  textTransform: 'none',
  background: '#fb641b',
  color: '#fff',
  fontFamily: 'Roboto,Arial,sans-serif',
  width: '100%',
  height: '48px',
  fontSize: '15px',
  borderRadius: '2px',
  cursor: 'pointer',
  fontWeight: '500',
  padding: '10px 20px',
  ":hover": {
    background: '#fb641b',
    color: '#fff',
  }
})

const OtpBtn = styled(Button)({
  textTransform: 'none',
  background: '#fff',
  color: '#2874f0',
  fontFamily: 'Roboto,Arial,sans-serif',
  width: '100%',
  height: '48px',
  fontSize: '15px',
  borderRadius: '2px',
  cursor: 'pointer',
  fontWeight: '500',
  padding: '10px 20px',
  ":hover": {
    background: '#fff',
    color: '#2874f0',
  },
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.2);'
})

const FontStyle = styled(Typography)({
  color: '#878787',
  fontSize: '12px',
  fontWeight: '400px'
})

const CreateAccount = styled(Typography)({
  color: '#2874f0',
  fontWeight: '500px',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: '14px'
})

const accountInitialValues = {
  login:{
    view:'login',
    heading:"Login",
    subheading:"Get access to your Orders, Wishlist and Recommendations"
  },
  signup:{
    view:'signup',
    heading:"Looks like you're new here!",
    subheading:"Sign up with your mobile number to get started"
  }
}

const Error = styled(Typography)({
  fontSize :'10px',
  color:'#ff6161',
  lineHeight:'0',
  marginTop:'10px',
  fontWeight:'600px'
})



const signupInitialValues ={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  mobileno:''

}

const loginInitialValues = {
  username:'',
  password:''
}

export default function LoginDailouge({ open, setOpen }) {

  const [account,toggleAccount] = useState(accountInitialValues.login)
  const [signup,setSignUp] = useState(signupInitialValues)
  const { setAccount} = useContext(DataContext)
  const [login, setLogin] = useState(loginInitialValues)
  const [error, setError] = useState(false)

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false)
  }

  const onInputChange = (e)=>{
    setSignUp({...signup,[e.target.name]:e.target.value})
    
  }

  const onValueChange = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
  }

  const signupUser =async ()=>{
      let response = await authenticateUser(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.firstname);
  }

  const loginUser =async ()=>{
    let response = await authenticateLogin(login);
    console.log(response)
    if(response.status === 200){
      handleClose();
      setAccount(response.data.data.firstname)
    }
    else{
        setError(true)
    }
    
}

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset', maxHeight: 'unset' } }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Leftimage>
            <Typography variant='h5' >{account.heading}</Typography>
            <Typography style={{ lineHeight: '1.6', marginTop: '20px' }}> {account.subheading}</Typography>
          </Leftimage>
          {
            account.view === 'login' ?
              <RightWrapper>
                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="username" label="Enter Email/ Username" />
                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password" label="Enter Password" />
                {error && <Error Error>Please enter valid Username or password </Error>}
                <FontStyle>By continuing, you agree to Flipkart's
                  <Box component="span" style={{ color: '#2874f0', cursor: 'pointer' }}> Terms of Use</Box> and
                  <Box component="span" style={{ color: '#2874f0', cursor: 'pointer' }}> Privacy Policy</Box>.
                </FontStyle>
                <LoginBtn onClick={()=> loginUser()}>Login</LoginBtn>
                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                <OtpBtn>Request OTP</OtpBtn>
                <CreateAccount onClick={()=>toggleAccount(accountInitialValues.signup)}>New to Flipkart? Create an account </CreateAccount>
              </RightWrapper>
              :
              <>
              
              <RightWrapper>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="Enter Firstname" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Lastname" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="email" label="Enter Email" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="mobileno" label="Enter Mobile number" />
                <LoginBtn onClick={()=>signupUser()}>Continue</LoginBtn>

              </RightWrapper>
              </>
          }
        </Box>
      </Component>

    </Dialog>
  )
}

