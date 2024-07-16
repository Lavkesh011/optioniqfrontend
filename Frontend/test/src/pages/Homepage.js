import BgVideo from "../img/bgkkk.mp4";
import Layout from "../components/Layout/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

 

  
 const Homepage = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();

  

  return (
  <Layout>
    <div className="homepage-container">
      <video autoPlay loop muted className="bg-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1 className="m-4 p-4"></h1>
              <h1 className="m-4 p-4"></h1>
              <h1
                className="title container-fluid-t m-4 p-4"
                style={{
                  fontSize: '70px',
                  fontFamily: 'Arial Rounded MT Bold, Castellar, sans-serif',
                  color: "#000608",
                }}
              >
                Welcome to the OptionIQ
              </h1>
            </div>
          </div>
          <div className="buttontosubject">
            <button
              className="button1"
              onClick={() =>
                navigate(
                  `${
                    auth?.user?.role === 0 || auth?.user?.role === 1
                      ? "/subject"
                      : "/register"
                  }`
                )
              }
            >
              FIND TEST
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

};

export default Homepage;
 