import Layout from "../../components/Layout/Layout";
import axios from "axios";

 
import{useNavigate} from "react-router-dom"
 import React,{useState} from 'react'
 import {toast} from 'react-toastify'
 const Register = () => {
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [phone,setPhone]=useState('')
   const [address,setAddress]=useState('')   
   const [answer,setAnswer]=useState('')
   const navigate =useNavigate();   
    const navigate1= useNavigate();
//form function
const hendleSubmit= async(e)=>{
  e.preventDefault()
try  { 
    const res = await axios.post('https://optioniqbackend.onrender.com/api/v1/auth/register',
    {name,email,password,phone,answer,address})
    if(res.data.success){
      toast.success(res.data.message)
      navigate("/login")
      console.log(res.data)
    }else {
       
      toast.error(res.data.message)
    }
     
}catch(error){
  
   console.log(error)
   toast.error("Something went wrong");

}
}

   return (
     <Layout> 
  
      <div className="form-container" style={{ minHeight: "78vh" }} 
      >
       
       <form onSubmit={hendleSubmit}>
         <h4 className="title">REGISTER FORM</h4>
  <div className="mb-3">
    
    <input type="text" 
    className="form-control"
    value={name}
    onChange={(e)=>setName(e.target.value)}
     id="exampleInputName"
     placeholder="Enter Your name"
        required/>
   </div>
     <div className="mb-3">
     
    <input type="email" 
    className="form-control"
    value={email}
      onChange={(e)=>setEmail(e.target.value)}
     id="exampleInputEmail"
      placeholder="Enter email"
        required/>
   </div>
   <div className="mb-3">
     
    <input type="password"
    value={password} 
      onChange={(e)=>setPassword(e.target.value)}
    className="form-control" 
    id="exampleInputPassword1" 
     placeholder="Enter password"
     required/>
  </div>
    <div className="mb-3">
    <input type="text" 
    value={phone}
      onChange={(e)=>setPhone(e.target.value)}
    className="form-control"
     id="exampleInputphone"
      placeholder="Enter phone number"
        required/>
   </div>
   <div className="mb-3">
    
    <input type="text" 
    value={address}
      onChange={(e)=>setAddress(e.target.value)}
    className="form-control"
     id="exampleInputaddr"
     placeholder="Enter your address"
     required
        />
   </div>

   <div className="mb-3">
     
    <input type="text" 
    value={answer}
      onChange={(e)=>setAnswer(e.target.value)}
    className="form-control"
     id="exampleInputAns"
     placeholder="Enter your favorite sport name"
       required />
   </div>

  <button type="submit" className="btn btn-primary">Submit</button>
<br></br><br></br>
  <button type="submit" className="btn btn-primary" onClick={()=>navigate1("/login")}>Go To The Login</button>
      </form>   

      </div>
      
     </Layout>
   )
 }
 
 export default Register