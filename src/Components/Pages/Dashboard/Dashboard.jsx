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
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 100 },
    {
      id: 'age',
      label: 'Age',
      minWidth: 170,
      align: 'right',
    },

    {
      id: 'nic',
      label: 'N.I.C(v)',
      minWidth: 170,
      align: 'right',
    },

    {
      id: 'telephone',
      label: 'Telephone',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'update',
      label: 'Update',
      minWidth: 20,
      align: 'right',
    },
    {
      id: 'del',
      label: 'Delete',
      minWidth: 20,
      align: 'right',
    },
  ];
  
  function createData(name, address, age, nic,telephone,update,del) {
    
    return { name, address, age, nic,telephone,update,del};
  }
  
  const rows = [
    createData('David', 'Buckingham,England', 25, 942343000,94768968561, <IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Aaron', 'Auckland,NewZealand', 35, 985012083,61768348531,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Jonathan', 'Dublin,Ireland', 40, 874562345,34768348765,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Peter', 'Texas,USA', 33, 768975555,11768349855,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Stalin', 'Moscow,Russia', 29, 875642000,25768341000,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Ballack', 'Berlin,Germany', 36, 745674000,98768343400,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Xang', 'Beijing,China', 37, 987651000,34768343433,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Sammy', 'Oslo,Norway', 39, 765643000,44768342222,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Escobar', 'Medellin,Colombia', 28,765643000,81768342456,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),

    createData('Takeshi', 'Tokyo,Japan', 45, 875643999,51768342675,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><UpdateIcon />
    </IconButton>,<IconButton onClick={()=>{alert()}} aria-label="delete" size="large"><DeleteIcon />
    </IconButton>),
  ];



const Dashboard=()=> {


const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);



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
      <TextField id="telephone" label="Telephone" variant="outlined" />

      <Button id='addcustomerbtn' variant="contained">Add Customer</Button>

    </Box>

          </Typography>
        </Box>
      </Modal>





<div className='topleft'>C.M.S DASHBOARD</div>

<div className='topright'>
<Button id='cstviewbtn' variant="contained" startIcon={<GroupIcon />} onClick={handleOpen}>Add Customer</Button> 
</div>

<div className='topright2'>
<Button id='cstactionbtn' variant="contained" startIcon={<LogoutIcon />} onClick={()=>{logout()}}>Logout</Button> 
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
            {rows
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