import React  from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const TestModal = ({ visible, onCancel, tests }) => {


  return (
    <Modal
      onCancel={onCancel}
      footer={null}
      visible={visible}
      style={{ minWidth: "800px", maxWidth: "1000px",
       minHeight: "500px", maxHeight: "600px" }}
      bodyStyle={{ padding: 0 }} 
    >
      <form className="subject-by-test" style={{ padding: "10px" ,  overflowY: "auto" ,
       maxWidth: "750px", }}>
        <div className="scrollable-container" style={{ maxHeight: "400px",
         overflowY: "auto", maxWidth: "700px", }}>
          <table className="table table-container" style={{ width: "100%", 
          borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#f2f2f2", textAlign: "left",
                 padding: "12px", textAlignLast:"center"  ,border: "2px solid  " }}>Test Name</th>
                <th style={{ backgroundColor: "#f2f2f2", textAlign: "left", 
                padding: "12px",textAlignLast:"center"  , border: "2px solid  " }}>Subject</th>
                <th style={{ backgroundColor: "#f2f2f2", textAlign: "left",
                 padding: "12px", textAlignLast:"center"  ,border: "2px solid  " }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tests?.map((t) => (
                <tr key={t._id}>
                  <td style={{ padding: "12px",textAlignLast:"center"  , border: "2px solid " }}>{t.name}</td>
                  <td style={{ padding: "12px", textAlignLast:"center"  ,border: "2px solid  " }}>{t.subjectname}</td>
                  <td style={{ padding: "12px", textAlignLast:"center"  ,border: "2px solid  " }}>
                    <Link to={`/starttest/${t.slug}`}>
                    <button className="btn btn-primary ms-2"
                 style={{ backgroundColor: "#007bff", 
                 color: "#fff",
                  border: "none", padding: "8px 16px",
                      borderRadius: "4px" }}>Test Start</button>
                   </Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
     </Modal>
  );
};

export default TestModal;

 


 