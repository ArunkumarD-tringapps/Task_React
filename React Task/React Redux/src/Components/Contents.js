
import React,{useState} from 'react';
import {Submitting} from './Userrreducer';
import{useDispatch} from 'react-redux';
 function Contents() { 
    const[name,setName]=useState()
   const dispatch=useDispatch()
  return (
    <div className="content">
        <label>Name:</label>
        <input type='text' onChange={(event)=>setName(event.target.value)}></input><br /><br />
       <button onClick={()=>dispatch( Submitting({name}))}>Submit</button> 
    </div>
  )
}
export default Contents;