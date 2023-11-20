import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Home.css'
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallIcon from '@mui/icons-material/Call';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Avatar from '@mui/material/Avatar';
import company2 from '../../../assets/company2.png'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Home=()=> {

const logs=()=>{
  Swal.fire("SweetAlert2 is working!");
}

 


  return (
    <>

<div className='mainhome'>


<div className='topheader'>

<div className='topheaderleft'>
<Avatar id='avatar'alt="COMPANY" src={company2}/>
<Button id='leftheaderbtns' variant="outlined">ABOUT<InfoIcon/></Button>
<Button id='leftheaderbtns' variant="outlined">PRICING<AttachMoneyIcon/></Button>
<Button id='leftheaderbtns' variant="outlined">CONTACT<CallIcon/></Button>
<Button id='leftheaderbtns' variant="outlined">SUPPORT<SupportAgentIcon/></Button>
</div>



<div className='topheaderright'>
    
<Button id='loginbtn' variant="outlined" onClick={()=>{logs()}}>LOGIN</Button>
<Button id='registerbtn' variant="outlined">REGISTER</Button>

</div>

</div>

<div className='mainbody'>

<div className='mainbodyleft'>

  <div className='mbltop'>
    <p className='toppara'>The Customer Management System your team will<br></br>love to use.</p>
    <p className='botpara'><i>A simple yet powerful CMS for<br></br>businesses selling B2B</i></p>
  </div>

  <div className='mblbottom'>
  <Button id='mblbtn1' variant="contained">TRY IT FOR FREE</Button>
  <Button id='mblbtn2' variant="outlined">BOOK A DEMO</Button>
  </div>

</div>

<div className='mainbodyright'>
  <div className='homepic'></div>

</div>

</div>



</div>

    </>
  )

}

export default Home;
