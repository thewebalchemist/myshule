const fs = require('fs');
const path = require('path');

const studentsFilePath = path.join(__dirname, 'students.json');

const readStudentsFromFile = () => {
  try {
    const fileData = fs.readFileSync(studentsFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading students file:', error);
    return [];
  }
};

const writeStudentsToFile = (students) => {
  try {
    const fileData = JSON.stringify(students, null, 2);
    fs.writeFileSync(studentsFilePath, fileData, 'utf8');
  } catch (error) {
    console.error('Error writing students file:', error);
  }
};

let students = readStudentsFromFile();

export const addStudent = (student) => {
  const newStudent = { ...student, id: Date.now() };
  students.push(newStudent);
  writeStudentsToFile(students);
};

export const getStudents = () => {
  return students;
};

export const updateStudent = (updatedStudent) => {
  students = students.map((student) => {
    if (student.id === updatedStudent.id) {
      return { ...student, ...updatedStudent };
    }
    return student;
  });
  writeStudentsToFile(students);
};

export const deleteStudent = (studentId) => {
  students = students.filter((student) => student.id !== studentId);
  writeStudentsToFile(students);
};
