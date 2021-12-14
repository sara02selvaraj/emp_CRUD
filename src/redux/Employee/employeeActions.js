import Axios from 'axios'

export const GET_EMP_REQUEST = 'GET_EMP_REQUEST'
export const GET_EMP_SUCCESS = 'GET_EMP_SUCCESS'
export const GET_EMP_FAILURE = 'GET_EMP_FAILURE'

export const CREATE_EMP_REQUEST = 'CREATE_EMP_REQUEST'
export const CREATE_EMP_SUCCESS = 'CREATE_EMP_SUCCESS'
export const CREATE_EMP_FAILURE = 'CREATE_EMP_FAILURE'

export const GET_SELECTEDEMP_REQUEST = 'GET_SELECTEDEMP_REQUEST'
export const GET_SELECTEDEMP_SUCCESS = 'GET_SELECTEDEMP_SUCCESS'
export const GET_SELECTEDEMP_FAILURE = 'GET_SELECTEDEMP_FAILURE'

export const UPDATE_EMP_REQUEST = 'UPDATE_EMP_REQUEST'
export const UPDATE_EMP_SUCCESS = 'UPDATE_EMP_SUCCESS'
export const UPDATE_EMP_FAILURE = 'UPDATE_EMP_FAILURE'

export const UPDATE_INPUT = 'UPDATE_INPUT'

export const DELETE_EMP_REQUEST = 'DELETE_EMP_REQUEST'
export const DELETE_EMP_SUCCESS = 'DELETE_EMP_SUCCESS'
export const DELETE_EMP_FAILURE = 'DELETE_EMP_FAILURE'


export const getEmployeeDetails = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_EMP_REQUEST })
            let dataURL = `http://127.0.0.1:5000/api/employees`
            let response = await Axios.get(dataURL)
            dispatch({ type: GET_EMP_SUCCESS, payload: response.data })
        }
        catch (error) {
            console.error(error)
            dispatch({ type: GET_EMP_FAILURE, payload: error })
        }
    }
}

export const createEmployeeDetails = (employee, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CREATE_EMP_REQUEST })
            let dataURL = `http://127.0.0.1:5000/api/employees/`
            let response = await Axios.post(dataURL, employee)
            dispatch({ type: CREATE_EMP_SUCCESS, payload: response.data })
            history('/employees')
        }
        catch (error) {
            console.error(error)
            dispatch({ type: CREATE_EMP_FAILURE, payload: error })
        }
    }
}

export const getSelectedEmployeeDetails = (employeeId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_SELECTEDEMP_REQUEST })
            let dataURL = `http://127.0.0.1:5000/api/employees/${employeeId}`
            let response = await Axios.get(dataURL)
            dispatch({ type: GET_SELECTEDEMP_SUCCESS, payload: response.data })
        }
        catch (error) {
            console.error(error)
            dispatch({ type: GET_SELECTEDEMP_FAILURE, payload: error })
        }
    }
}

export const updateEmployeeDetails = (selectedEmployee, employeeId, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_EMP_REQUEST })
            let dataURL = `http://127.0.0.1:5000/api/employees/${employeeId}`
            let response = await Axios.put(dataURL, selectedEmployee)
            dispatch({ type: UPDATE_EMP_SUCCESS, payload: response.data })
            history('/employees')
        }
        catch (error) {
            console.error(error.response.data)
            dispatch({ type: UPDATE_EMP_FAILURE, payload: error })
        }
    }
}

export const updateInput = (key, value) => {
    return {
        type: UPDATE_INPUT,
        payload: { key, value }
    }
}

export const deleteEmployeeDetails = (employeeId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_EMP_REQUEST })
            let dataURL = `http://127.0.0.1:5000/api/employees/${employeeId}`
            let response = await Axios.delete(dataURL)
            dispatch({ type: DELETE_EMP_SUCCESS, payload: response.data })
            dispatch(getEmployeeDetails())
        }
        catch (error) {
            console.error(error.response.data)
            dispatch({ type: DELETE_EMP_FAILURE, payload: error })
        }
    }
}