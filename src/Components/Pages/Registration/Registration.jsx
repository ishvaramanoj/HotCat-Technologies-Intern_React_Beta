import * as React from 'react';
import './Registration.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Registration=()=> {


  return (

<>

 <div className='regbody'>
<div className='regbodytop'>
<p className='regt'>Create Your C.M.S Account</p>
</div>

<div className='regbodybottom'>
<div className='regbdleft'>

<div className='lt'>
PERSONAL DATA
</div>

<div className='lb'>
<Box className='nameid'>
<TextField className='txtbox' id="name" label="Name" variant="outlined" />
</Box>
<Box className='nameid'>
<TextField className='txtbox' id="address" label="Address" variant="outlined" />
</Box>
</div>

</div>

<div className='regbdright'>
RIGHT
</div>


</div>

</div>

</>

  )


}

export default Registration;


