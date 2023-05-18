import { addStudent, getStudents } from "../../data/students";
import fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Get all students
    const students = getStudents();
    res.status(200).json(students);
  } else if (req.method === "POST") {
    // Add a new student
    const { fname, lname, grade, phone, email, address, gender, age, bio } = req.body;
    const newStudent = { id: Date.now(), fname, lname, grade, phone, email, address, gender, age, bio };
    addStudent(newStudent);

    // Save the updated student list to students.json file
    fs.writeFileSync("data/students.json", JSON.stringify(getStudents()), "utf-8");

    res.status(201).json(newStudent);
  } else if (req.method === "PUT") {
    // Update a student
    const { id, fname, lname, grade, phone, email, address, gender, age, bio } = req.body;
    const studentIndex = students.findIndex((student) => student.id === id);
    if (studentIndex !== -1) {
      students[studentIndex] = { id, fname, lname, grade, phone, email, address, gender, age, bio };

      // Save the updated student list to students.json file
      fs.writeFileSync("data/students.json", JSON.stringify(getStudents()), "utf-8");

      res.status(200).json({ message: "Student updated successfully" });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } else if (req.method === "DELETE") {
    // Delete a student
    const { id } = req.body;
    const studentIndex = students.findIndex((student) => student.id === id);
    if (studentIndex !== -1) {
      students.splice(studentIndex, 1);

      // Save the updated student list to students.json file
      fs.writeFileSync("data/students.json", JSON.stringify(getStudents()), "utf-8");

      res.status(200).json({ message: "Student deleted successfully" });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  }
}
