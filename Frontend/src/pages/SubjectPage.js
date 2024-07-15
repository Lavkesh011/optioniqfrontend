import  BgVideo  from "../img/bgkkk.mp4";
import Layout from "../components/Layout/Layout.js";
import React, { useEffect, useState } from "react";
import TestModal from "../components/From/TestModal.js";
import axios from "axios";
import { ColorFormat } from "antd/es/color-picker/interface.js";
import { toast } from "react-toastify";

 
 
 
const SubjectPage = () => {
  const [subject, setSubjects] = useState([]);
  const [visible, setVisible] = useState(false);
  const [test, setTest] = useState([]);

  // Get all subjects
  const getAllSubject = async () => {
    try {
      const { data } = await axios.get("https://optioniqbackend.onrender.com/api/v1/subject/getallsubject");
      if (data?.success) {
        setSubjects(data?.subject);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting subjects");
    }
  };
  useEffect(() => {
    getAllSubject();
  }, []);

  // Get all test by subject
  const getAllTestBySubject = async (slug) => {
    try {
      const { data } = await axios.get(`https://optioniqbackend.onrender.com/api/v1/test/gettestbysubject/${slug}`);
      if (data?.success) {
        setTest(data?.test);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting test");
    }
  };
  useEffect(() => {
    getAllTestBySubject();
  }, []);

  return (
    <Layout>
      <video autoPlay loop muted className="bg-video">
          <source src={ BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="col-6">  
      <h1 className="text-center1"  style={{backgroundColor: ' #00ffae' }}> 
       SUBJECTS</h1></div>
      <div className="subjectpage1">
        <div className="col-md-24">
         

          <div className="table-container">
            <div className="d-flex flex-wrap">
              {subject?.map((s) => (
                <div
                  key={s._id}
                  onClick={() => {
                    setVisible(true);
                    getAllTestBySubject(s.slug);
                  }}
                  className="card text-bg-warning mb-0 m-5 mr3"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="w-2px h-5px">
                    <img src={`https://optioniqbackend.onrender.com/api/v1/subject/subject-photo/${s._id}`} className="card-img-top" alt="" />
                </div>
                   
                  <div className="w-2px h-5px">
                    <h3 className="card-title text-center"> {s.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <TestModal visible={visible} onCancel={() => setVisible(false)} tests={test} />
        </div>
      </div>
    </Layout>
  );
};

export default SubjectPage;
