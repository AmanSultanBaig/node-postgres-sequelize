const express = require("express");
const router = express.Router()

const studentController = require("../controllers/student.controller")

router.post("/add_student", studentController.AddStudent)
router.get("/get_students", studentController.getStudents)

module.exports = router