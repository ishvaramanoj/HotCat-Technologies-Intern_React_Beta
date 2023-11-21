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

<div className='lb'>
<Box className='nameid'>
<TextField className='txtbox' id="age" label="Age" variant="outlined" />
</Box>
<Box className='nameid'>
<TextField className='txtbox' id="country" label="Country" variant="outlined" />
</Box>
</div>

<div className='lb'>
<Box className='nameid'>
<TextField className='txtbox' id="provincestate" label="Province/State" variant="outlined" />
</Box>
<Box className='nameid'>
<TextField className='txtbox' id="zipcode" label="Zip code" variant="outlined" />
</Box>
</div>

<div className='lb'>
<Box className='nameid'>
<TextField className='txtbox' id="telephone" label="Phone" variant="outlined" />
</Box>
<Box className='nameid'>
<TextField className='txtbox' id="nationality" label="Nationality" variant="outlined" />
</Box>
</div>

<div className='lb'>
<Box className='nameid'>
<TextField className='txtbox' id="nic" label="N.I.C" variant="outlined" />
</Box>
<Box className='nameid'>
<TextField className='txtbox' id="division" label="Divisional Secretariat" variant="outlined" />
</Box>
</div>

<div className='lb'>
<Box className='nameid'>
<TextField className='txtbox' id="email" label="E-Mail" variant="outlined" />
</Box>
<Box className='nameid'>
<TextField className='txtbox' id="loyality" label="Loyality Number" variant="outlined" />
</Box>
</div>

</div>

<div className='regbdright'>
<div className='lr'>
LOGIN DATA
</div>
</div>


</div>

</div>

</>

  )


}

export default Registration;


