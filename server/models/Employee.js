const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

let Employee = mongoose.model('employee', EmployeeSchema)

module.exports = Employee