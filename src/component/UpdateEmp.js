import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as employeeAction from '../redux/Employee/employeeActions'
import * as employeeReducer from '../redux/Employee/employeeReducer'
import { updateInput } from '../redux/Employee/employeeActions';

let UpdateEmp = () => {
    let history = useNavigate();
    let employeeId = useParams().id;
    let dispatch = useDispatch();

    let employeeInfo = useSelector((state) => {
        return state[employeeReducer.employeeFeatureKey]
    })

    let { selectedEmployee } = employeeInfo

    useEffect(() => {
        dispatch(employeeAction.getSelectedEmployeeDetails(employeeId))
    }, [employeeId])

    let submitEmployee = (event) => {
        event.preventDefault();
        dispatch(employeeAction.updateEmployeeDetails(employeeId, selectedEmployee, history))
    }

    let updateInputValue = (event) => {
        dispatch(updateInput(event.target.name, event.target.value))
    }

    return (
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <pre>{JSON.stringify(selectedEmployee)}</pre>
                    <div className='col'>
                        <h2>Update an Employee Details</h2>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus, laboriosam recusandae eos eligendi cupiditate animi quas qui, nulla et porro repudiandae iure quod nam aspernatur veritatis repellat voluptas provident!</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='card'>
                            <div className='card-header bg-dark text-white'>
                                <h4>Update Employee</h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={submitEmployee}>
                                    <div className='form-group'>
                                        <input className='form-control' value={selectedEmployee.name} name="name" onChange={updateInputValue} type="text" placeholder="Enter name" />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' value={selectedEmployee.age} name="age" onChange={updateInputValue} type="text" placeholder="Enter age" />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' value={selectedEmployee.designation} name="designation" onChange={updateInputValue} type="text" placeholder="Enter designation" />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' value={selectedEmployee.phone} name="phone" onChange={updateInputValue} type="text" placeholder="Enter phone" />
                                    </div>
                                    <div>
                                        <input type="submit" value="submit" className='btn btn-sm btn-primary' />
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

export default UpdateEmp