import React from "react";
import "../Style/AdminPage.css";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className="container">
      <h1 className="title">Admin Page</h1>
      <div className="add-student">
        <h3 className="student-txt">Add to new Student</h3>
        <p className="student-txt">Click here to add a new student</p>
        <Link to="/studentdetails">
          <button type="submit" className="add-btn">
            ADD
          </button>
        </Link>
      </div>

      <div className="view-student">
        <h3 className="student-txt"> View Student details </h3>
        <p className="student-txt">Click here to view student details</p>
        <Link to="/viewstudents">
          <button type="submit" className="view-btn">
            VIEW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;
