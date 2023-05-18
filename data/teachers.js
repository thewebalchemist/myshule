const fs = require('fs');
const path = require('path');

const teachersFilePath = path.join(__dirname, 'teachers.json');

const readTeachersFromFile = () => {
    try {
        const fileData = fs.readFileSync(teachersFilePath, 'utf8');
        return JSON.parse(fileData);
    } catch (error) {
        console.error('Error reading teachers file:', error);
        return [];
    }
    };

    const writeTeachersToFile = (teachers) => {
    try {
        const fileData = JSON.stringify(teachers, null, 2);
        fs.writeFileSync(teachersFilePath, fileData, 'utf8');
    } catch (error) {
        console.error('Error writing teachers file:', error);
    }
    };

let teachers = readTeachersFromFile();

export const addTeacher = (teacher) => {
    const newTeacher = { ...teacher, id: Date.now() };
    teachers.push(newTeacher);
    writeTeachersToFile(teachers);
};

export const getTeachers = () => {
    return teachers;
    };

export const updateTeacher = (updatedTeacher) => {
    teachers = teachers.map((teacher) => {
    if (teacher.id === updatedTeacher.id) {
        return { ...teacher, ...updatedTeacher };
    }
    return teacher;
    });
    writeTeachersToFile(teachers);
    };

export const deleteTeacher = (teacherId) => {
    teachers = teachers.filter((teacher) => teacher.id !== teacherId);
  writeTeachersToFile(teachers);
};
