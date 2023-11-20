import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Home.css'
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallIcon from '@mui/icons-material/Call';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Avatar from '@mui/material/Avatar';

const Home=()=> {


  return (
    <>

<div className='mainhome'>


<div className='topheader'>

<div className='topheaderleft'>
<Avatar id='avatar'alt="COMPANY"/>
<Button id='aboutbtn' variant="outlined">ABOUT<InfoIcon/></Button>
<Button id='pricingbtn' variant="outlined">PRICING<AttachMoneyIcon/></Button>
<Button id='contactbtn' variant="outlined">CONTACT<CallIcon/></Button>
<Button id='supportbtn' variant="outlined">SUPPORT<SupportAgentIcon/></Button>
</div>



<div className='topheaderright'>
    
<Button id='loginbtn' variant="outlined">LOGIN</Button>
<Button id='registerbtn' variant="outlined">REGISTER</Button>

</div>

</div>

    
</div>

    </>
  )

}

export default Home;
