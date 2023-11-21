import * as React from 'react';
import './Login.css'
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';


const Login=()=> {


  return (
<>

<div className='mainlogintop'>

<div className='title'>
Sign Into Your C.M.
</div>

</div>

<div id='body'>
 <div className='leftbody'>
  
 </div>

 <div className='rightbody'>

 <input  type='text' className='username'  placeholder= 'Username' ></input><br></br>
 <input type='password' className='password' placeholder='Password'></input><br></br>
 <p className='forgot'><a href=''>Forgot Password</a></p>

 <Button id='loginbutton' variant="contained">LOGIN</Button>

 </div>

</div>





</>
  )

}
export default Login;
