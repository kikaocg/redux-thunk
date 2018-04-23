const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ip = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            return {
                data: [],
                isFetching: true,
                error: false
            }
        case 'LOAD_DATA_SUCCESS':
            return {
                data: action.data,
                isFetching: false,
                error: false
            }
        case 'LOAD_DATA_ERROR':
            return {
                data: [],
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

export default ip