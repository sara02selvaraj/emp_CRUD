import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as employeeAction from '../redux/Employee/employeeActions'
import * as employeeReducer from '../redux/Employee/employeeReducer'
import { Link } from 'react-router-dom';

let Employees = () => {
    let dispatch = useDispatch();

    let employeeInfo = useSelector((state) => {
        return state[employeeReducer.employeeFeatureKey]
    })

    useEffect(() => {
        dispatch(employeeAction.getEmployeeDetails())
    }, [])

    let deleteEmployee = (employeeId) => {
        dispatch(employeeAction.deleteEmployeeDetails(employeeId))
    }
    let { employees } = employeeInfo
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className='row'>
                    <div className='col'>
                        <h2>Employees Details</h2>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus, laboriosam recusandae eos eligendi cupiditate animi quas qui, nulla et porro repudiandae iure quod nam aspernatur veritatis repellat voluptas provident!</p>
                        <Link to="/employees/create" className="btn btn-success btn-sm px-3">Create employee record</Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-hover table-striped table-dark text-center">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Emp Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Designation</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.length > 0 ?
                                    <React.Fragment>
                                        {employees.map(employee => {
                                            return (
                                                <tr key={employee._id}>
                                                    <td>{employee._id.substr(employee._id.length - 4)}</td>
                                                    <td>{employee.name}</td>
                                                    <td>{employee.age}</td>
                                                    <td>{employee.designation}</td>
                                                    <td>{employee.phone}</td>
                                                    <td><Link to={`/employees/${employee._id}`} className="btn btn-warning btn-sm px-3 mr-2">Update</Link>/<button onClick={deleteEmployee.bind(this, employee._id)} className='btn btn-danger btn-sm px-3'>Delete</button></td>
                                                </tr>
                                            )
                                        })}
                                    </React.Fragment> : null}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Employees