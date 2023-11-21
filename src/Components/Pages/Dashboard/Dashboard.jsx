import * as React from 'react';
import './Dashboard.css'
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


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
  ];
  
  function createData(name, address, age, nic,telephone) {
    
    return { name, address, age, nic,telephone};
  }
  
  const rows = [
    createData('David', 'Buckingham,England', 25, 942343000,94768968561),
    createData('Aaron', 'Auckland,NewZealand', 35, 985012083,61768348531),
    createData('Jonathan', 'Dublin,Ireland', 40, 874562345,34768348765),
    createData('Peter', 'Texas,USA', 33, 768975555,11768349855),
    createData('Stalin', 'Moscow,Russia', 29, 875642000,25768341000),
    createData('Ballack', 'Berlin,Germany', 36, 745674000,98768343400),
    createData('Xang', 'Beijing,China', 37, 987651000,34768343433),
    createData('Sammy', 'Oslo,Norway', 39, 765643000,44768342222),
    createData('Escobar', 'Medellin,Colombia', 28,765643000,81768342456),
    createData('Takeshi', 'Tokyo,Japan', 45, 875643999,51768342675),
  ];



const Dashboard=()=> {


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
<div className='topleft'>C.M.S DASHBOARD</div>

<div className='topright'>
<Button id='cstviewbtn' variant="contained" startIcon={<GroupIcon />}>Customer View</Button> 
</div>

<div className='topright2'>
<Button id='cstactionbtn' variant="contained" startIcon={<AddReactionIcon />}>Customer Action</Button> 
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