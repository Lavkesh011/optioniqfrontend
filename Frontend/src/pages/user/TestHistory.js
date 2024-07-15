import  BgVideo  from "../../img/bgkkk.mp4";
import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";

 
const TestHistory = () => {
  const [auth] = useAuth();
  const [testHistory, setTestHistory] = useState([]);

  const getHistoryByUser = async () => {
    try {
      const userData = auth?.user;
      const id = userData?._id;
      const { data } = await axios.get(`https://optioniqbackend.onrender.com/api/v1/histoy/gethistorybyuser/${id}`);
      if (data?.success) {
        setTestHistory(data?.testhistories);
        console.log(data?.testhistories);
      } else {
        toast.error("No questions found for this test");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting questions");
    }
  };

  useEffect(() => {
    getHistoryByUser()
  }, []);

  return (
    <Layout>
       <video autoPlay loop muted className="bg-video">
          <source src={ BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="testHistory1">
        <div className="testtext"><h1>ALL TESTS RESULT</h1></div>
        <div className="testdata-container">
      <div className="scrollable-container">
        <table className="table table-container-1">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Test Name</th>
              <th scope="col">Marks</th>
              <th scope="col">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {testHistory?.map((history, index) => (
              <tr key={history._id}>
                <td>{index + 1}</td>
                 <td>{history.test.charAt(0).toUpperCase() + history.test.slice(1)}</td>
                <td>{history.marks}</td>
                <td>{history.totalmarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default TestHistory;
