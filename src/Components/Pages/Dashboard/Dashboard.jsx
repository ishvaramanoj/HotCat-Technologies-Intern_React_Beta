import * as React from 'react';
import './Dashboard.css'
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const Dashboard=()=> {


  return (
<>

<div className='maindashboardtop'>
<div className='topleft'>C.M.S DASHBOARD</div>

<div className='topright'>
<Button id='cstviewbtn' variant="contained" startIcon={<GroupIcon />}>Customer View</Button> 
</div>

<div className='topright2'>
<Button id='cstactionbtn' variant="contained" startIcon={<AddReactionIcon />}>Customer Action</Button> 
</div>

</div>

<div className='maindashboardbottom'>
bottom
</div>

</>

  )


}
export default Dashboard;