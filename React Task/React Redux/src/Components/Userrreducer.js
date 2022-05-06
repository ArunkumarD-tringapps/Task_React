import{createSlice}from '@reduxjs/toolkit';
export const Userreducer=createSlice({
   name:'user',
   initialState:{
    myname:'Arun Kumar'
   },
   reducers:{
     Submitting:(state,action)=>
     {
       state.myname=action.payload.name
     }
   }
  })
  export const{Submitting}=Userreducer.actions
  export default Userreducer.reducer