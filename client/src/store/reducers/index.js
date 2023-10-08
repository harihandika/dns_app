import { SET_FILTER, SET_LOADING, SET_RECRUITMENT_LIST, SET_ERROR, SET_TOKEN, SET_DETAIL, CLEAR_DATA, ADD_RECRUITMENT_LIST } from "../actionType/actionType"


const initialState = {
    isLoading: false,
    recruitmentDetail: {},
    recruitments: [],
    token: '',
    filter: {},
    error: ''
}

const reducers = (state= initialState, action) => {
    if (action.type === SET_LOADING) {
        return {...state, isLoading: action.payload}
    } else if (action.type === SET_ERROR) {
        return {...state, error: action.payload}
    } else if (action.type === SET_RECRUITMENT_LIST) {
        return {...state, recruitments: action.payload}
    } else if (action.type === SET_DETAIL){
        return {...state, recruitmentDetail: action.payload}
    } else if(action.type === SET_TOKEN) {
        return {...state, token: action.payload}
    } else if(action.type === SET_FILTER) {
        return {...state, filter: action.payload}
    } else if(action.type === ADD_RECRUITMENT_LIST) {
        return {...state, recruitments: [...state.recruitments, ...action.payload]}
    }  else if(action.type === CLEAR_DATA) {
        return initialState
    }
    return state
}

export default reducers