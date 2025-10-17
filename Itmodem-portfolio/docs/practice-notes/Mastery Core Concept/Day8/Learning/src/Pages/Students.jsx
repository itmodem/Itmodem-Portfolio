import React from 'react'

const Students = () => {
    const student = ["Ravi", "Radha", "Krishna", "Balram"];
  return (
    <div>
     <h2>Students List</h2>
     {student.map((name,i) => (
        <li key={i}>{name}</li>
     ))}
    </div>
  )
}

export default Students
