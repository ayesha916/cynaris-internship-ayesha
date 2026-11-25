// ES6+ JavaScript

const studentName = "Ayesha";
const course = "BCA";

// Arrow function
const greetStudent = (name) => {
    return `Hello ${name}! Welcome to JavaScript ES6+.`;
};

// Display output
console.log(greetStudent(studentName));
console.log(`Course: ${course}`);

// Student dataset
const students = [
    { name: "Ayesha", marks: 85 },
    { name: "Rahul", marks: 65 },
    { name: "Priya", marks: 90 },
    { name: "Arun", marks: 45 },
    { name: "Sneha", marks: 75 }
];

// 1. filter() - Get students who scored above 70
const passedStudents = students.filter(student => student.marks > 70);

// 2. map() - Get only student names
const studentNames = students.map(student => student.name);

// 3. reduce() - Calculate total marks
const totalMarks = students.reduce((total, student) => total + student.marks, 0);

console.log("Students scoring above 70:", passedStudents);
console.log("Student names:", studentNames);
console.log("Total marks:", totalMarks);

// Object Destructuring
const student = {
    name: "Ayesha",
    age: 21,
    courses: "BCA"
};

const { name, age, courses } = student;

console.log("Student Name:", name);
console.log("Age:", age);
console.log("Course:", courses);


// Array Destructuring
const subjects = ["JavaScript", "HTML", "CSS"];

const [first, second, third] = subjects;

console.log("First Subject:", first);
console.log("Second Subject:", second);
console.log("Third Subject:", third);

// Interactive Click Counter

let count = 0;

const countDisplay = document.getElementById("count");
const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");

// Click event listener
countButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

// Reset event listener
resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});