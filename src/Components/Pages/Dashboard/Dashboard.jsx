import * as React from 'react';
import './Dashboard.css'
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import Swal from 'sweetalert2'
import {useEffect} from 'react';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const columns = [
   { id: 'id',
   label:<b>Customer Id</b>,
   minWidth: 80 
   },
    { id: 'name',
     label:<b>Name</b>,
     minWidth: 170 
    },
   
    { 
      id: 'address',
       label:<b>Address</b>,
      minWidth: 100 
    },

    {
      id:'age',
      label: <b>Age</b>,
      minWidth: 170,
      align: 'right',
    },

    {
      id: 'nic',
      label: <b>N.I.C(v)</b>,
      minWidth: 170,
      align: 'right',
    },

    {
      id: 'telephone',
      label: <b>Telephone</b>,
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'update',
      label:<b>Update</b>,
      minWidth: 20,
      align: 'right',
    },
    {
      id: 'del',
      label: <b>Delete</b>,
      minWidth: 20,
      align: 'right',
    },
  ];
  

 
  
  const rows = [];



const Dashboard=()=> {

const [customers, setCustomers] = useState([])
const [stores,setStores] = useState([])
const [display,setDisplay]= useState()

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [update, setUpdate] = React.useState(false);
const updateOpen = (gt) => setUpdate(true);
const updateClose = () => setUpdate(false);

const [address, setAddress] = React.useState(false);
const addressOpen = () => setAddress(true);
const addressClose = () => setAddress(false);

const [view, setView] = React.useState(false);
const viewOpen = () => setView(true);
const viewClose = () => setView(false);



const navigate = useNavigate()

const logout=()=>{
  navigate('/');
}
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };


const AddCustomer = () =>{

let Customer_Id = document.getElementById('customer_id').value;
let Name = document.getElementById('name').value;
let Address = document.getElementById('address').value;
let Age = document.getElementById('age').value;
let Nic = document.getElementById('nic').value;
let Telephone = document.getElementById('telephone').value;

var obj={
  customer_id:Customer_Id,
  name:Name,
  address:Address,
  age:Age,
  nic:Nic,
  telephone:Telephone,
}
fetch("http://127.0.0.1:8000/api/customer/add",{
  method:"POST",
  headers:{
  'Content-type': 'application/json'
          },
  body:JSON.stringify(obj)
  }).then((response) => response.json())
  .then((json) => console.log(json));
  handleClose();
}


const insertAddress =()=>{

let C_id = document.getElementById('c_id').value;
let Address_one = document.getElementById('address_one').value;

var ad = {address:Address_one}
fetch("http://127.0.0.1:8000/api/customer/insert/"+C_id,{
  method:"POST",
  headers:{
  'Content-type': 'application/json'
          },
  body:JSON.stringify(ad)
  }).then((response) => response.json())
  .then((json) => console.log(json));
  addressClose();
}



const updateCustomer =()=>{
   
  let Updatecustomer_Id = document.getElementById('upcustomer_id').value;
  let Updatename = document.getElementById('upname').value;
  let Updateaddress = document.getElementById('upaddress').value;
  let Updateage = document.getElementById('upage').value;
  let Updatenic = document.getElementById('upnic').value;
  let Updatetelephone = document.getElementById('uptelephone').value;

  var upd={
    customer_id:Updatecustomer_Id,
    name:Updatename,
    address:Updateaddress,
    age:Updateage,
    nic:Updatenic,
    telephone:Updatetelephone,
  }
  updateClose();
  Swal.fire({
    title: "Are you sure?",
    text: "You will change customer data",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, update it!"
  }).then((result) => {
    if (result.isConfirmed) {    
  fetch("http://127.0.0.1:8000/api/customer/update/"+Updatecustomer_Id, {
  method: 'PUT',
  headers:{
    'Content-type': 'application/json'
            },
    body:JSON.stringify(upd)
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
  

Swal.fire({
      title: "Updated!",
      text: "Customer has been updated.",
      icon: "success"
      });
    }
  });
 
  
  }


const getCustomers = ()=>{

  fetch('http://127.0.0.1:8000/api/customer', {
    method: 'Get',
    headers: {
      'Accept': 'application/json',
    }
  })
  .then(response => response.json())
  .then((response)=> {
  console.log(response);
  const array = [];
  console.log(response);
  response.forEach((val)=>{
  array.push({
    id:val.id,         
    address:[<Button id='addbtn' variant="contained" onClick={addressOpen}>ADD</Button>,<Button id='viewbtn' variant="contained"  onClick={()=>{customerAddresses(val.id)}}>VIEW</Button>],
    name:val.name,
    age:val.age,
    nic:val.nic,
    telephone:val.telephone,
    update:<IconButton onClick={()=>{updateOpen()}} aria-label="delete" size="large"><UpdateIcon/></IconButton>,
    del:<IconButton onClick={()=>{deleteCustomer(val.id)}} aria-label="delete" size="large"><DeleteIcon/></IconButton>,
              })
          })
          setCustomers(array);
          console.log('yees');
          console.log(array);
      })
      .catch(function (error){
          console.log(error)
      })
  
}

const event = (ev)=>{
// viewOpen(true);
setDisplay(ev);

}

const customerAddresses = (iq_id)=>{
  let ctad= iq_id;
  console.log(ctad);
  fetch('http://127.0.0.1:8000/api/customer/get/'+ctad, {
    method: 'Get',
    headers: {
    'Accept': 'application/json',
    }
  })
  .then(response => response.json())
  .then((response)=> {
  console.log(response);
  setStores(response);
      })
      .catch(function (error){
          console.log(error)
      })
      viewOpen(true);
    }



const deleteCustomer =(cus_id)=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {    
console.log(cus_id);
let customer_row_id = cus_id;
fetch("http://127.0.0.1:8000/api/customer/delete/"+customer_row_id, {
method: 'DELETE',
});
Swal.fire({
      title: "Deleted!",
      text: "Customer has been deleted.",
      icon: "success"
      });
    }
  });
}



  return (
<>

<div className='maindashboardtop'>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='modalbox'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='popuptitle'>
            Add a Customer here
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='popupbody'>
            
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="customer_id" label="Customer Id" variant="outlined" />
      <TextField id="name" label="Name" variant="outlined" />
      <TextField id="address" label="Address" variant="outlined" />
      <TextField id="age" label="Age" variant="outlined" />
      <TextField id="nic" label="NIC" variant="outlined" />
      <TextField id="telephone" label="Telephone" variant="outlined" />
      

      <Button id='addcustomerbtn' variant="contained" onClick={()=>{AddCustomer()}}>Add Customer</Button>

    </Box>

          </Typography>
        </Box>
      </Modal>



      <Modal
        open={update}
        onClose={updateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='modalbox'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='popuptitle'>
            Customer Update
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='popupbody'>
            
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="upcustomer_id" label="Customer Id" variant="outlined" />
      <TextField id="upname" label="Name" variant="outlined" />
      <TextField id="upaddress" label="Address" variant="outlined" />
      <TextField id="upage" label="Age" variant="outlined" />
      <TextField id="upnic" label="NIC" variant="outlined" />
      <TextField id="uptelephone" label="Telephone" variant="outlined" />

      <Button id='addcustomerbtn' variant="contained" onClick={()=>{updateCustomer()}}>Update Customer</Button>

    </Box>

          </Typography>
        </Box>
      </Modal>


      <Modal
        open={address}
        onClose={addressClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='addressbox'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='addresstitle'>
            Enter Addresses
          </Typography>
          <Typography id="modal-modal-descriptio" sx={{ mt: 2 }} className='addressbody'>
            
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="c_id" label="Customer Id" variant="outlined" />
      <TextField id="address_one" label="Enter Address" variant="outlined" />
      

      <Button id='addaddressbtn' variant="contained" onClick={()=>{insertAddress()}}>Insert Address</Button>

    </Box>

          </Typography>
        </Box>
      </Modal>


      <Modal
        open={view}
        onClose={viewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='addressbox'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='addresstitle'>
            Customer Addresses
          </Typography>
          <Typography id="modal-modal-descriptio" sx={{ mt: 2 }} className ='viewbody'>
            
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <table border={0} className="customermaintable">
            <tr className="cstbl">
             {/* <th>Customer Address </th> */}
            </tr>
            {stores.map(store => (
              <tr key={store.id} class="subtopics">
                <th>{store.address}</th>
              </tr>
            ))}  
          </table> 
    </Box>

          </Typography>
        </Box>
      </Modal>






<div className='topleft'>C.M.S DASHBOARD</div>

<div className='topright'>
<Button id='cstviewbtn' variant="contained" startIcon={<GroupIcon />} onClick={handleOpen}>Add Customer</Button> 

</div>
<div className='topright2'>
<Button id='cstactionbtn' variant="contained" startIcon={<LogoutIcon />} onClick={()=>{getCustomers()}}>View Customers</Button> 
</div>

</div>

<div className='maindashboardbottom'>

<div className='table'>




<Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

</div>

</div>

</>

  )


}
export default Dashboard;