import * as employeeActions from './employeeActions'

export const employeeFeatureKey = 'employee'

let initialState = {
    loading: false,
    employees: [],
    selectedEmployee: {},
    errorMessage: ''
}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case employeeActions.GET_EMP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case employeeActions.GET_EMP_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: payload
            };
        case employeeActions.GET_EMP_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case employeeActions.CREATE_EMP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case employeeActions.CREATE_EMP_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case employeeActions.CREATE_EMP_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case employeeActions.GET_SELECTEDEMP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case employeeActions.GET_SELECTEDEMP_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedEmployee: payload
            };
        case employeeActions.GET_SELECTEDEMP_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case employeeActions.UPDATE_EMP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case employeeActions.UPDATE_EMP_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case employeeActions.UPDATE_EMP_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case employeeActions.UPDATE_INPUT:
            return {
                ...state,
                selectedEmployee: {
                    ...state.selectedEmployee,
                    [payload.key]: payload.value
                }
            };
        case employeeActions.DELETE_EMP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case employeeActions.DELETE_EMP_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case employeeActions.DELETE_EMP_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default:
            return state
    }
}