import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as employeeAction from '../redux/Employee/employeeActions'
import * as employeeReducer from '../redux/Employee/employeeReducer'

let CreateEmp = () => {

    let dispatch = useDispatch();
    let history = useNavigate();

    let [employee, setEmployee] = useState({
        name: '',
        age: '',
        designation: '',
        phone: ''
    })

    let updateFormInput = (event) => {
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        })
    }

    let submitEmployee = (event) => {
        event.preventDefault();
        dispatch(employeeAction.createEmployeeDetails(employee, history))
    }
    return (
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <h2>Create an Employee Details</h2>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus, laboriosam recusandae eos eligendi cupiditate animi quas qui, nulla et porro repudiandae iure quod nam aspernatur veritatis repellat voluptas provident!</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='card'>
                            <div className='card-header bg-dark text-white'>
                                <h4>Create Employee</h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={submitEmployee}>
                                    <div className='form-group'>
                                        <input className='form-control' value={employee.name} onChange={updateFormInput} name="name" type="text" placeholder="Enter name" />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' value={employee.age} onChange={updateFormInput} name="age" type="text" placeholder="Enter age" />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' value={employee.designation} onChange={updateFormInput} name="designation" type="text" placeholder="Enter designation" />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' value={employee.phone} onChange={updateFormInput} name="phone" type="text" placeholder="Enter phone" />
                                    </div>
                                    <div>
                                        <input type="Submit" value="Create" className='btn btn-sm btn-primary' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateEmp