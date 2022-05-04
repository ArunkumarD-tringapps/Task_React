import React from "react";
import './App.css';
import { useForm } from "react-hook-form";

function App() {
 const { register, handleSubmit, formState: { errors }} = useForm();
  return (
    <>
    <h1>Register Here</h1>
    <div className="container ">
    <form onSubmit={handleSubmit(console.log)}>
     <label>FirstName:</label>
      <input  {...register("firstName", {
          required: true,
          maxLength: 16,
          pattern: /^[A-Za-z]+$/i
        })}   placeholder="Enter Your FirstName..." /><br />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && ( <p>Firstname cannot exceed 16 characters</p>)}
      {errors?.firstName?.type === "pattern" && (<p>Alphabetical characters only</p> )} 
      <label>LastName:</label>
      <input {...register("lastName", {required:true, pattern: /^[A-Za-z]+$/i })}placeholder="Enter Your LastName..." /> <br />
       {errors?.lastName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "pattern" && (<p>Alphabetical characters only</p>)}
      <label>Gender : </label> 
      <input {...register("radio")} type="radio" value="male" />
      <label>Male</label>
      <input {...register("radio")} type="radio" value="female" />
      <label>Female</label><br></br>
      <label>Age:</label>
     <input {...register("age",{ required:true, min: 18 })} type="number" placeholder="Enter Your Age..." />
 <br />
      {errors?.age?.type==="required" && <p>This field is required</p>}
      {errors?.age?.type==="min" && (<p>You Must be older than 18</p>)}
      <label>Mobile No:</label>
      <input {...register("mobileno",{
          required: true,
          maxLength: 10,
          pattern: /\d+/gi})}  placeholder="Enter Your MobileNo..." /> <br />
         {errors?.mobileno?.type === "required" && <p>This field is required</p>}
         {errors?.mobileno?.type === "maxLength" && ( <p>mobileno must minimum 10 digit</p>)}
         {errors?.mobileno?.type === "pattern" && (<p>Number only allowed</p> )} 
     <input type="submit"  value="submit"/>
    </form>
    </div>
    </>
  );
}

export default App;

