import axios from 'axios'

export const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST'
    }
}
export const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data
    }
}
export const loadUAError = () => {
    return {
        type: 'LOAD_UA_ERROR'
    }
}
export const loadUA = (axios) => {
    return dispatch => {
        dispatch(loadUARequest())
        axios
            .get('http://httpbin.org/user-agent')
            .then(({data}) => dispatch(loadUASuccess(data)))
            .catch(() => dispatch(loadUAError()))
    }
}
export default  {
    loadUA: loadUA.bind(null, axios)
}