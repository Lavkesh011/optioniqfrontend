import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center ">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-subject"
            className="list-group-item list-group-item-action  "  
          >
            Create Subject
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-test"
            className="list-group-item list-group-item-action  "
          >
            Create Test
          </NavLink>
          
          <NavLink
            to="/dashboard/admin/create-question"
            className="list-group-item list-group-item-action "
          >
           Create Question
          </NavLink>

          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action "
          >
            Users
          </NavLink> */}
           {/* <NavLink
            to="/dashboard/admin/deletqus"
            className="list-group-item list-group-item-action  "
          >
            questionsdeletebytest
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;