import Footer from "./Footer.js";
import React from "react";
import { ToastContainer } from "react-toastify";

 import Header from './Header.js'
 const Layout = ({children}) => {
   return (
     <div>
        <Header/>
        <main style={{minHeight:'78vh',backgroundColor:'linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%);'}}>
         <ToastContainer />
        { children}

        </main><h1> </h1>
        <Footer/>
        </div>
   )
 }
 
 export default Layout