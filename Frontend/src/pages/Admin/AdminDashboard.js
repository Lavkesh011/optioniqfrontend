import AdminMenu from "../../components/Layout/AdminMenu";
import BgVideo from "../../img/bgkkk.mp4";
import Layout from "./../../components/Layout/Layout";
import React from "react";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <video autoPlay loop muted className="bg-video">
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="subjectpage1">
      <div className="m-0 p-3 " >
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-md-3">
         <AdminMenu />
          </div>
          <div className="col-md-9">
  
            <div className="card w-75 p-3  bg-success">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div> 
        </div>
      </div> 
      </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
