const express = require("express");
const router = express.Router()

const studentController = require("../controllers/student.controller")

router.get("/add_student", studentController.AddStudent)
router.get("/get_students", studentController.getStudents)

module.exports = router