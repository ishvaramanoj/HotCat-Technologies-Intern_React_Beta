import * as React from 'react';
import './Login.css'
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login=()=> {

const navigate = useNavigate()

const lognow=()=>{
  let Username =  document.getElementById("txtusername").value;
  let Password =  document.getElementById("txtpassword").value;
  if(Username=='customer'&&Password=='123'){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login Success",
      showConfirmButton: false,
      timer: 1500
    });
    navigate('/Dashboard');
  }else{
    Swal.fire({
      icon: "error",
      title: "Invalid login",
      text: "Please check the Username and Password entered",
      footer: '<a href="#">Check whether the capslock is on</a>'
    });
  }
  
}

  return (
<>

<div className='mainlogintop'>

<div className='title'>
Sign Into Your C.M.S
</div>

</div>

<div id='body'>
 <div className='leftbody'>
  
 </div>

 <div className='rightbody'>

 <input id='txtusername' type='text' className='username'  placeholder= 'Username' ></input><br></br>
 <input id='txtpassword' type='password' className='password' placeholder='Password'></input><br></br>
 <p className='forgot'><a href=''>Forgot Password</a></p>

 <Button id='loginbutton' variant="contained" onClick={()=>{lognow()}}>LOGIN</Button>

 </div>

</div>





</>
  )

}
export default Login;
