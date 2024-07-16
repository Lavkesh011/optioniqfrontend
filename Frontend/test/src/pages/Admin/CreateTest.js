import AdminMenu from "../../components/Layout/AdminMenu";
import BgVideo from "../../img/bgkkk.mp4";
import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import { toast } from "react-toastify";

 


 

const {Option}=Select

const CreateTest = () => {
  const [tests,steTests] =useState([])
  const [subjects,steSubjects] =useState([])
  const[number,setNumber]=useState("")
   const[name,setName]=useState("")
  const[subject,setSubject]=useState("")
 const[subjectname,setSubjectname]=useState("")
 
//get all subjects
 const getAllSubject = async ()=>{
  try{
   const {data} =await axios.get('https://optioniqbackend.onrender.com/api/v1/subject/getallsubject')
   if(data?.success){
    steSubjects(data?.subject)
   }
  }catch(error){
    console.log(error)
    toast.error("Somethin went wrong in getting subjects")
  }
 };
 useEffect(()=>{
  getAllSubject();
 },[])

//  get all Tests
 const getAllTest = async ()=>{
  try{
   const {data} =await axios.get('https://optioniqbackend.onrender.com/api/v1/test/getalltest')
   if(data.success){
    steTests(data.tests)
   }
  }catch(error){
    console.log(error)
    toast.error("Somethin went wrong in getting subjects")
  }
 };
 useEffect(()=>{
  getAllTest();
 },[])

 

//Create test function
const handleCreate= async(e)=>{
  e.preventDefault()
try  { 
    const res = await axios.post('https://optioniqbackend.onrender.com/api/v1/test/create-test',
    { name,
    number,
    subjectname,
   subject })
    if(res.data.success){
      toast.success(res.data.message)
       
      console.log(res.data)
      getAllTest(); 
    }else {
       
      toast.error(res.data.message)
    }
     
}catch(error){
  
   console.log(error)
   toast.error("Something went wrong");

}
}


//  //delete question by test  id  
//  const hendleDeleteQu =async(_id)=>{
 
//   try{
//   const {data}=await  axios.delete(`/api/v1/questions/deleteQuestions/${_id} `) 
//   if(data.success){
//     toast.success( `${name} is delete`)
//    getAllTest(); 
//   }else(
//     toast.error(data.message)
//   )
//   }catch(error){
//     toast.error("Somthing went wrong in update in subject")
//   }
//  }

  //delete Tests
 const hendleDelete =async(_id)=>{
 
  try{
   
  const {data}=await  axios.delete(`https://optioniqbackend.onrender.com/api/v1/test/deletetest/${_id} `)
  if(data.success){
    toast.success( `${name} is delete`)
   getAllTest(); 
   
  }else(
    toast.error(data.message)
  )
  }catch(error){
    toast.error("Somthing went wrong in update in subject")
  }
 }

  return (
    <Layout>
      <video autoPlay loop muted className="bg-video">
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="subjectpage1">
      <div className="m-0 p-3 " > 
   <div className="container-fluid m-3 p-3">
    <div className="row">
      <div className="col-md-3">
        <AdminMenu/>
      </div>
      <div className="col-md-7 subjectpage">
        <h1> Manage Test</h1>
        <div className="m-1 w-75">
          <Select bordereq ={false} placeholder="Sectect a subject" 
          size="large"
           showSearch className="form-select mb-3 " 
          onChange={(value)=>{setSubject(value)} }>
                {subjects?.map((s)=>(
                  <Option key={s._id} value={s._id}  >{s.name}</Option>
                  
                ))}
          </Select>
        
        </div>
        <div className="m-1 w-75">
          <Select bordereq ={false} placeholder="Sectect a subject Name" 
          size="large"
           showSearch className="form-select mb-3"
          onChange={(value)=>{setSubjectname(value)}  }>
                {subjects?.map((s)=>(
                  <Option key={s._id} value={s.name}  >{s.name}</Option>
                  
                ))}
          </Select>
        
        </div>
          
         <div className="m-2 w-75">
          <input type="number" placeholder="Write the test number  in the subject "
          className="form-control"
          onChange={(e)=>setNumber(e.target.value)}/> 
        </div>
         <div className="m-2 w-75">
          <input  
          type="text" placeholder="Write the test title name"
          className="form-control"
          onChange={(e)=>setName(e.target.value)}/> 
        </div>
         <div className="mb-3 " >
          <button className="btn btn-primary"onClick={handleCreate}>CREATE TEST</button>
         </div>  
                          
                       <div className="w-75">
           <div className="scrollable-container"> 
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col"> Subject</th>
                      <th scope="col"> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tests?.map(t=>(
                     
                    <>
                    <tr>
                    <td key={t._id}>{t.name}</td>
                    <td key={t._id}> {t.subjectname} </td>
                   
                    <td> 
                      <button className="btn btn-danger ms-2"
                      onClick={()=>{
                        
                      hendleDelete(t._id) }}>Delete</button>
                      </td>
                    </tr>
                    </>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
              </div>
               </div>
    </div>
   </div></div> 
        
    </Layout>
  )
}

export default CreateTest




 