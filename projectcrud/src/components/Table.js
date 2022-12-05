import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {useNavigate} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const InfoTable = (props) => {
    
let navigate=useNavigate()
    let getdata=props.getdata
   return ( 
    <>
     <Container>
      <Table sx={{width:'600px',margin:"50px 350px ",backgroundColor:"lightBlue"}}>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >City</TableCell>
            <TableCell >Edit</TableCell>
            <TableCell >Delete</TableCell>
        </TableRow>
    </TableHead>
   {
    getdata.length >0? (getdata.map((gd,index)=>(
    <TableBody key={index}>
    <TableRow >
             <TableCell>{gd.Name}</TableCell>
             <TableCell >{gd.Age}</TableCell>
             <TableCell >{gd.City}</TableCell>
             <TableCell ><Button onClick={()=>props.setdata(gd._id)} variant="outlined"><EditIcon/></Button></TableCell>
             <TableCell ><Button onClick={()=>props.delete(gd._id)} variant="outlined"><DeleteIcon/></Button></TableCell>
    </TableRow> 
    </TableBody>
    ))):
    <TableBody>
         <TableRow>
        <TableCell><h2>No Data Found</h2></TableCell>
    </TableRow> 
    </TableBody>
    }
    </Table>
      </Container>
      <Button onClick={()=>navigate("/")} variant="outlined" startIcon={<ArrowLeftIcon/>}>previous</Button>
  </> 
    );
}
 
export default InfoTable;