import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course) {
      alert("Please enter student name and course");
      return;
    }

    if (editingId !== null) {
      setStudents(
        students.map((student) =>
          student.id === editingId
            ? { ...student, name, course }
            : student
        )
      );
      setEditingId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name: name,
        course: course,
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setCourse("");
  };

  const handleEdit = (student) => {
    setName(student.name);
    setCourse(student.course);
    setEditingId(student.id);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student CRUD Application</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">
          {editingId !== null ? "Update Student" : "Add Student"}
        </button>
      </form>

      <h2>Student Records</h2>

      {students.length === 0 ? (
        <p>No student records found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button onClick={() => handleEdit(student)}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;