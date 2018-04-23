const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_UA_REQUEST':
            return {
                data: [],
                isFetching: true,
                error: false
            }
        case 'LOAD_UA_SUCCESS':
            return {
                data: action.data,
                isFetching: false,
                error: false
            }
        case 'LOAD_UA_ERROR':
            return {
                data: [],
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

export default ua