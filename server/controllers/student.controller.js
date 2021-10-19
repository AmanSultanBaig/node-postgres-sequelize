const db = require("../models")
const Student = db.students

exports.AddStudent = async (req, res) => {
    const { name, email, age } = req.body
    try {
        await Student.create({ name: name, email: email, age: age });
        await res.status(200).json({ message: "student added successfully", success: true })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message,
            success: false
        })
    }
}

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        await res.status(200).json({
            message: "students fetched successfully",
            data: students,
            success: true
        })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message,
            success: false
        })
    }
}