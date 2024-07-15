import AdminMenu from "../../components/Layout/AdminMenu";
import BgVideo from "../../img/bgkkk.mp4";
import Layout from "../../components/Layout/Layout";
import React from "react";

const Users = () => {
  return (
     <Layout>
      <video autoPlay loop muted className="bg-video">
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
     
      <div> 
   <div className="container-fluid m-3 p-3">
    <div className="row">
      <div className="col-md-3">
        <AdminMenu/>
      </div>
      <div className="col-md-9">
        <h1> Manage User</h1>
      </div>
    </div>
   </div>
        </div>
    </Layout>
  )
}

export default Users
