// routes/studentRoutes.js
// Modular routing for all Student CRUD APIs

const express = require("express");
const router = express.Router();
const students = require("../data/students");

// Helper: generate next unique ID
function getNextId() {
  return students.length > 0
    ? Math.max(...students.map((s) => s.id)) + 1
    : 1;
}

// Helper: basic validation of student payload
function isValidStudent(body) {
  return (
    body &&
    typeof body.name === "string" &&
    body.name.trim().length > 0 &&
    typeof body.course === "string" &&
    body.course.trim().length > 0
  );
}

// GET /students -> get all students
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });
});

// GET /students/:id -> get a single student by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student id. It must be a number.",
    });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  res.status(200).json({ success: true, data: student });
});

// POST /students -> create a new student
router.post("/", (req, res) => {
  const { name, course } = req.body;

  if (!isValidStudent(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Both 'name' and 'course' are required and must be non-empty strings.",
    });
  }

  const newStudent = {
    id: getNextId(),
    name: name.trim(),
    course: course.trim(),
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student created successfully.",
    data: newStudent,
  });
});

// PUT /students/:id -> update an existing student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student id. It must be a number.",
    });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  const { name, course } = req.body;

  if (!isValidStudent(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Both 'name' and 'course' are required and must be non-empty strings.",
    });
  }

  student.name = name.trim();
  student.course = course.trim();

  res.status(200).json({
    success: true,
    message: "Student updated successfully.",
    data: student,
  });
});

// DELETE /students/:id -> delete a student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid student id. It must be a number.",
    });
  }

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: "Student deleted successfully.",
    data: deletedStudent,
  });
});

module.exports = router;
