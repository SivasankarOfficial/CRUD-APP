import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import {useState , useEffect} from "react"
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'



const Edit = (props) => {
    const navi=useNavigate()
    const {id}=useParams()
    
    // const [id,setId]=useState(0)
    const [Name,setname]=useState('');
    const [Age,setage]=useState('');
    const [City,setcity]=useState('')


const [state,setState]=useState([])
// const filter=state.filter(state=>state._id===id)

    useEffect(()=>{
         axios.get(`http://localhost:5000/info/${id}`).then((res)=>{
            console.log(res.data);
            setState(res.data)
        //    navi("/Tabledata")
    })},[id])
       

  
    const edit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/info/update/${id}`,{
            Name:Name,
            Age:Age,
            City:City
       
    })
    .then(()=>{
        console.log('updated');
        navi("/Tabledata")

    });
}

     return (
    <>
<h2>Edit Data</h2>
{/* <p>{state[0].Name}</p>
<p>{state[0].Age}</p>
<p>{state[0].City}</p> */}

<Container sx={{textAlign:"center"}}>

<form onSubmit={edit} >


<div>   
<TextField id="outlined-basic" autoComplete='off' value={Name} placeholder={state.Name} onChange={(e)=>setname(e.target.value)} type="text" label="enter name" variant="outlined" 
sx={{marginTop:"10px",color:'white',outline:"none"}} /><br></br><br></br>
<TextField id="outlined-basic" autoComplete='off' value={Age} placeholder={state.Age} onChange={(e)=>setage(e.target.value)} type="number" label="enter Age" variant="outlined" /><br></br><br></br>
<TextField id="outlined-basic" autoComplete='off' placeholder={state.City} onChange={(e)=>setcity(e.target.value)}  type="text" label="enter City" variant="outlined" /><br></br><br></br>
<Button variant="contained" type='submit' value={City}  endIcon={<SendIcon></SendIcon>}>Submit</Button>
</div>


</form> 

</Container>

    </> 
    );
}
 
export default Edit;