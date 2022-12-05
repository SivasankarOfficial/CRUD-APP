import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';

import {useNavigate} from 'react-router-dom'

import {useState} from "react"


const InfoForm = (props) =>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [city,setCity]=useState('');
    const navi=useNavigate()

//     const infoChange=(event)=>{
// setName(event.target.value);
// setAge(event.target.value);
// setCity(event.target.value)


//     }
const infoSubmit=(event)=>{

    event.preventDefault();
    const data={
        Name:name,
        Age:age,
        City:city
    }
    props.mydata(data)
navi("/Tabledata")

    // console.log(name);
setName("")
setAge("")

}
const navigate = () =>{
    navi("/Tabledata")
}
return (
    <>
<Container sx={{textAlign:"center", backgroundColor:"lightskyblue",padding:"50px"}}>
<h3>FormPage</h3>

<form  onSubmit={infoSubmit}>
<TextField id="outlined-basic" autoComplete='off' onChange={(event)=>setName(event.target.value)} name="Name" value={name}  type="text" label="enter name" variant="outlined"
 sx={{marginTop:"10px",color:'white',outline:"none"}} /><br></br><br></br>
<TextField id="outlined-basic" autoComplete='off'  onChange={(event)=>setAge(event.target.value)} name="Age" value={age}  type="number" label="enter Age" variant="outlined" /><br></br><br></br>
<TextField id="outlined-basic" autoComplete='off'  onChange={(event)=>setCity(event.target.value)} name="City" value={city}  type="text" label="enter City" variant="outlined" /><br></br><br></br>
<Button variant="contained" type='submit'  startIcon={<SendIcon></SendIcon>}>Submit</Button>
</form><br></br>
<Button onClick={navigate} >UserData</Button>


</Container>
    </> 
    );
}
 
export default InfoForm;