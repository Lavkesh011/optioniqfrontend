import AdminMenu from "../../components/Layout/AdminMenu";
import BgVideo from "../../img/bgkkk.mp4";
import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import { toast } from "react-toastify";

const {Option}=Select


const CreateQuestion = () => {
const [tests,steTests] =useState([])
const [test,steTest] =useState("")
const [question_no,steQueNumber] =useState("") 
const [question ,steQuestion] =useState("")  
const [description ,steDescription] =useState("") 
const [options, setOptions] = useState(['', '', '', '']);
const [correct_ans_index,steCorrAnId] =useState("1")
 
                                  
//  question_no, question, description, options, test, correct_ans_index
//  get all Testss
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


 
//Create Question function
const handleCreateq = async(e)=>{
  e.preventDefault()
try  { 
    const res =await axios.post('https://optioniqbackend.onrender.com/api/v1/questions/create-question',
    {  question_no, 
       question, 
       description, 
       options, 
       test,
        correct_ans_index
       })
    if(res.data.success){
      toast.success(res.data.message)
       
      console.log(res.data)
    }else {
       
      toast.error(res.data.message)
    }
     
}catch(error){
  
   console.log(error)
   toast.error("Something went wrong");
  
}
}

 const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value; 
    setOptions(newOptions);
  };

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
        <h1> Manage Question</h1>
        <div className="m-1 w-75">
          <Select bordereq ={false} placeholder="Sectect a test" 
          size="large"
           showSearch className="form-select mb-3"
          onChange={(value)=>{steTest(value)}}>
                {tests?.map((s)=>(
                  <Option key={s._id} value={s._id}>{s.name}</Option>
                ))}
          </Select>
          </div>
          <div className="m-2 w-75">
          <input type="number" placeholder="Write the question number in the test "
          className="form-control"
          onChange={(e)=>steQueNumber(e.target.value)}/> 
        </div>
         <div className="m-2 w-75">
          <input type="text" placeholder="Write the question "
          className="form-control"
          onChange={(e)=>steQuestion(e.target.value)}/> 
        </div>
       
        {options.map((option, index) => (
          <div  className="m-2 w-75" key={index}>
            <label htmlFor={`option${index + 1}`}>Option {index + 1}:</label><br />
            <input type="text" id={`option${index + 1}`} value={option} onChange={e => handleOptionChange(index, e.target.value)} /><br />
          </div>
        ))}
        <div>
        
        <label htmlFor="correctOption">Correct Option:</label><br />
        <select    size="large" id="correctOption" value={correct_ans_index} onChange={e => steCorrAnId(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={String(index + 1)}> Option {index + 1}</option>
          ))}
        </select>
       </div>
         <div className="m-2 w-75">
          <input type="text" placeholder="Write the question Solution "
          className="form-control"
          onChange={(e)=>steDescription(e.target.value)}/> 
        </div>
        
        <div className="mb-3 " >
          <button className="btn btn-primary"onClick={handleCreateq}>CREATE  QUESTION</button>
         </div>
      </div>
    </div>
   </div>
      </div>  
      </div> 
    </Layout>
  )
}

export default CreateQuestion