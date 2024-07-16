import Layout from "../../components/Layout/Layout";
import React, { useState } from "react";
import axios from "axios";

 
 const DeleteQu = () => {

    const [categoryId, setCategoryId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://optioniqbackend.onrender.com/api/products/category/${categoryId}`);
      alert(response.data.message);
    } catch (error) {
      alert(`Error deleting products: ${error.message}`);
    }}
   return (
     <>
     <Layout>
          <div>
      <input type="text" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
      <button onClick={handleDelete}>Delete Products</button>
    </div>
     </Layout>
       
     </>
   )
 }
 
 export default DeleteQu
 