import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "./DashBoard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import StudentForm from "./Components/StudentDetails";
import AdminPage from "./Components/AdminPage";
import ViewStudents from "./Components/ViewStudents";

function App() {
  const [studentList, setStudentList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (studentData) => {
    setStudentList([...studentList, studentData]);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = studentList.filter(
      (student, index) => index !== indexToDelete
    );
    setStudentList(updatedList);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route
            path="/studentdetails"
            element={
              <StudentForm
                handleInputChange={handleInputChange}
                editIndex={editIndex}
              />
            }
          />
          <Route
            path="/viewstudents"
            element={
              <ViewStudents
                studentList={studentList}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
