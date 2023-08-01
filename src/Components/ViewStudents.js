// ViewStudents.js
import React from "react";
import "../Style/ViewStudents.css";

function ViewStudents({ studentList, onEdit, onDelete }) {
  const handleEdit = (index) => {
    onEdit(index);
  };

  return (
    <div>
      <h1>View Students</h1>
      {studentList.length > 0 ? (
        studentList.map((student, index) => (
          <div key={index} className="view-box">
            <p>
              <span className="default">First Name: </span>
              {student.firstName}
            </p>
            <p>
              <span className="default">Last Name: </span> {student.lastName}
            </p>
            <p>
              <span className="default">Age: </span> {student.age}
            </p>
            <p>
              <span className="default">Roll No: </span>
              {student.rollNo}
            </p>
            <p>
              <span className="default">Class Section: </span>
              {student.classSection}
            </p>
            <p>
              <span className="default">Blood Group: </span>{" "}
              {student.bloodGroup}
            </p>
            <p>
              <span className="default">Father Name: </span>
              {student.fatherName}
            </p>
            <p>
              <span className="default">Mother Name: </span>{" "}
              {student.motherName}
            </p>
            <p>
              <span className="default">City: </span>
              {student.city}
            </p>
            <button onClick={() => handleEdit(index)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => onDelete(index)} className="delete-btn">
              Delete
            </button>
            <hr />
          </div>
        ))
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}

export default ViewStudents;
