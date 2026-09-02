import React, { useState, useEffect } from "react";

function App() {
    const [students, setStudents] = useState([
        { id: 1, name: "Kalpana", present: false },
        { id: 2, name: "Priya", present: false },
        { id: 3, name: "Rahul", present: false }
    ]);

    useEffect(() => {
        console.log("Attendance updated");
    }, [students]);

    const markAttendance = (id) => {
        setStudents(
            students.map((student) =>
                student.id === id
                    ? { ...student, present: !student.present }
                    : student
            )
        );
    };

    return (
        <div>
            <h1>Student Attendance Tracker</h1>

            {students.map((student) => (
                <div key={student.id}>
                    <span>{student.name} - </span>

                    <button onClick={() => markAttendance(student.id)}>
                        {student.present ? "Present" : "Absent"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;