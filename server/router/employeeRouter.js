const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee')

/* GET all employees
URL : http://127.0.0.1:5000/api/employees
 */

router.get('/employees', async (request, response) => {
    try {
        let employees = await Employee.find()
        response.status(200).json(employees)
    }
    catch (error) {
        console.error(error)
        response.status(500).json({
            error: error.message
        })
    }
})

/* GET a single employee
URL : http://127.0.0.1:5000/api/employees/:id
 */

router.get('/employees/:id', async (request, response) => {
    let employeeId = request.params.id;
    try {
        let employee = await Employee.findById(employeeId)
        response.status(200).json(employee)
    }
    catch (error) {
        console.error(error)
        response.status(500).json({
            error: error.message
        })
    }
})

/* create a employee record 
URL : http://127.0.0.1:5000/api/employees
*/

router.post('/employees', async (request, response) => {
    let newEmployee = {
        name: request.body.name,
        age: request.body.age,
        designation: request.body.designation,
        phone: request.body.phone
    }
    try {
        let employee = await Employee.findOne({ name: newEmployee.name })
        if (employee) {
            return response.status(401).json({
                msg: 'Employee Already Exist'
            })
        }
        employee = new Employee(newEmployee)
        employee = await employee.save()
        response.status(200).json({
            result: "Employee created successfully",
            employee: employee
        })
    }
    catch (error) {
        console.error(error)
        response.status(500).json({
            error: error.message
        })
    }
})

/* update a employee record 
URL : http://127.0.0.1:5000/api/employees/:id
*/

router.put('/employees/:id', async (request, response) => {
    let employeeId = request.params.id;
    let updatedEmployee = {
        name: request.body.name,
        age: request.body.age,
        designation: request.body.designation,
        phone: request.body.phone
    }
    try {
        let employee = await Employee.findById(employeeId);
        if (!employee) {
            return response.status(401).json({
                msg: 'Employee Doesnot Exist'
            })
        }
        employee = await Employee.findByIdAndUpdate(employeeId, {
            $set: updatedEmployee
        }, { new: true })
        response.status(200).json({
            result: "Employee updated successfully",
            employee: employee
        })
    }
    catch (error) {
        console.error(error)
        response.status(500).json({
            error: error.message
        })
    }
})


/* Delete a employee record 
URL : http://127.0.0.1:5000/api/employees/:id
*/

router.delete('/employees/:id', async (request, response) => {
    let employeeId = request.params.id;
    try {
        let employee = await Employee.findById(employeeId)
        if (!employee) {
            return response.status(401).json({
                msg: 'Employee Doesnt Exist'
            })
        }
        employee = await Employee.findByIdAndDelete(employeeId)
        response.status(200).json({
            result: "Employee deleted successfully",
            employee: employee
        })
    }
    catch (error) {
        console.error(error)
        response.status(500).json({
            error: error.message
        })
    }
})
module.exports = router; 