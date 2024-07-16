 import React from 'react'
 import { Link } from 'react-router-dom'
 
 const Footer = () => {
   return (
     <div className="footer">
      <h1 className="text-center">  OPTIONIQ </h1>
        {/* &copy; */}
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>
      </p>
    </div>
   )
 }
 
 export default Footer