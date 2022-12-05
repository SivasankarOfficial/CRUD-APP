import './App.css';
import Form from './components/Form'
import PageNotFound from './components/PageNotFound'

import Table from './components/Table'
import  {useEffect,useState}  from 'react';
import axios from 'axios'
import {Routes,Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Edit from './components/Edit'



function App() {

  const navi=useNavigate()

  const [data,setData]=useState([])
  // const [name,setName]=useState('')
  // const [age,setAge]=useState('')
  // const [city,setCity]=useState('')
  // const [id,setId]=useState("")
  // const navi=useNavigate()
  const create=(data)=>{
    axios.post("http://localhost:5000/info",data).then(res=>{
      // console.log(res);
      axios.get("http://localhost:5000/info").then(res=>{
      // console.log(res.data)
      setData(res.data)
    })
    })
// console.log(data);
  }
  const update=(id)=>{
    
navi(`/Edit/${id}`)
    // console.log({data1,data2,data3});
  }
 
  const del=async(id)=>{
   await axios.delete(`http://localhost:5000/info/delete/${id}`).then(res=>{
      // console.log(res.data)
      // setData(res.data)
    console.log("Deleted SuccessFully");
   } ) }

   useEffect(()=>{
    axios.get("http://localhost:5000/info").then(res=>{
      // console.log(res.data)
      setData(res.data)
    })
},[data])
 // const getAllData=()=>{
    //   }
  return (
    <div className="App">
      <div className='form'>
      
      </div>
      <div className='table'>
      </div>
      
      
      <Routes>
        <Route exact path='/' element={<Form mydata={create}/>}/>
        <Route exact path='/Edit/:id' element={<Edit/>}/>
        <Route exact path='/Tabledata' element={<Table getdata={data} setdata={update} delete={del}/>}>
        <Route path="*" element={<PageNotFound/>}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
