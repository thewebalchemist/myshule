import { addTeacher, getTeachers } from "../../data/teachers";
import fs from "fs";

export default function handler(req, res) {
    if (req.method === "GET") {
        // Get all students
        const teachers = getTeachers();
        res.status(200).json(teachers);
    } else if (req.method === "POST") {
        // Add a new student
        const { fname, lname, grade, phone, email, subjects, qualifications, experience, gender, bio } = req.body;
        const newTeacher = { id: Date.now(), fname, lname, grade, phone, email, subjects, qualifications, experience, gender, bio };
        addTeacher(newTeacher);

        // Save the updated student list to students.json file
        fs.writeFileSync("data/teachers.json", JSON.stringify(getTeachers()), "utf-8");

    res.status(201).json(newTeacher);
    } else if (req.method === "PUT") {
        // Update a student
        const { id, fname, lname, grade, phone, email, subjects, qualifications, experience, gender, bio } = req.body;
        const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);
        if (teacherIndex !== -1) {
            teachers[teacherIndex] = { id, fname, lname, grade, phone, email, subjects, qualifications, experience, gender, bio };

        // Save the updated student list to students.json file
        fs.writeFileSync("data/teachers.json", JSON.stringify(getTeachers()), "utf-8");

        res.status(200).json({ message: "Teacher updated successfully" });
        } else {
        res.status(404).json({ message: "Teacher not found" });
        }
    } else if (req.method === "DELETE") {
        // Delete a student
        const { id } = req.body;
        const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);
        if (teacherIndex !== -1) {
            teachers.splice(teacherIndex, 1);

        // Save the updated student list to students.json file
        fs.writeFileSync("data/teachers.json", JSON.stringify(getTeachers()), "utf-8");

        res.status(200).json({ message: "Teacher deleted successfully" });
        } else {
        res.status(404).json({ message: "Teacher not found" });
        }
    }
}
