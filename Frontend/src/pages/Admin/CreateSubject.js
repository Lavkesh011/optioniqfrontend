import AdminMenu from "../../components/Layout/AdminMenu";
import BgVideo from "../../img/bgkkk.mp4";
import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import Subjectform from "../../components/From/Subjectform";
import axios from "axios";
import { Modal } from "antd";
import { toast } from "react-toastify";

const CreateSubject = () => {
 const[subjects,steSubjects]=useState([]);
 const [name,setName]=useState([]);
 const [visible,setVisible]=useState( false );
const[ selected,setSelected]=useState(null);
const[updateName,setUpdateName]=useState("")
 const [photo, setPhoto] = useState("");
// hendle Form Create subject
 const hendleSubmit =async (e)=>{      
  e.preventDefault()
  try{
         const subjectData = new FormData();
      subjectData.append("name", name);
      subjectData.append("photo", photo);
      
    
    const {data} =await axios.post("https://optioniqbackend.onrender.com/api/v1/subject/create-subject",subjectData)
    if(data?.success){
      toast.success(`${name} subject is created`)
      getAllSubject();
    }else{
      toast.error(data.message);
    }
  }catch(error){
    console.log(error)
    toast.error('Somthin went wrong in input form')
  }
 }
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

 //update Subject
 const hendleUpdate=async(e)=>{
  e.preventDefault()
  try{
  const {data}=await  axios.put(`https://optioniqbackend.onrender.com/api/v1/subject/update-subject/${selected._id} `,{name:updateName})
  if(data.success){
    toast.success( `${updateName} is updated`)
    setSelected(null);
    setUpdateName("");
    setVisible(false);
    getAllSubject();
  }else(
    toast.error(data.message)
  )
  }catch(error){
    toast.error("Somthing went wrong in update in subject")
  }
 }

  //delete Subject
 const hendleDelete =async(_id)=>{
 
  try{
  const {data}=await  axios.delete(`https://optioniqbackend.onrender.com/api/v1/subject/deletesubject/${_id}`)
  if(data.success){
    toast.success( `Subject is deleted`)
   getAllSubject();
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
      <div className="Createsubjectpage1">
      <div className="m-0 p-3 " > 
         <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu/>
            </div>
            <div className="col-md-4 subjectpage">
              <h1> Create Subject</h1>
              <div className="p-3 w-50"><div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file" 
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              
              
              </div>
               <div className="mb-3 bg-success">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
                <Subjectform hendleSubmit={hendleSubmit} value={name} setValue={setName}/>
              </div>
              
              
              
               <Modal onCancel={()=>setVisible(false)}   
              footer={null} visible={visible}
                >
                  <Subjectform value={updateName} setValue={setUpdateName} hendleSubmit={hendleUpdate}/>
                </Modal>
            </div>
           <div className="col-md-4 subjectpage">
              <div className="w-85">
                
                    <div className="scrollable-container"> 
                <table className="table table-container-1">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col"> Action</th>
                    </tr>
                  </thead>
            
                  <tbody  >
                 {subjects?.map(s=>(
                    <tr  >
                    <td key={s._id}>{s.name}</td>
                    <td> 
                      <button className="btn btn-primary ms-2"
                       onClick={()=> {setVisible(true) ;setUpdateName(s.name)
                      setSelected(s.name)}}
                       >Edit</button>
                      <button className="btn btn-danger ms-2"
                      onClick={()=>{hendleDelete(s._id)}}>Delete</button>
                      </td>
                    </tr>
                    
                    ))}
                     
                  </tbody> 
            
                </table> 
                    </div>
              </div>
              </div>
           </div>
          </div>
         </div>
         </div>
        
    </Layout>   
  )
}

export default CreateSubject




