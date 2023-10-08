import axios from "axios"
import { addRecruitmentList, setLoading, setRecruitmentDetail, setRecruitmentList } from "../actionCreators/actionCreator"
import { addParameter } from "../../helpers/url"
const baseUrl ="http://localhost:3001"

export const login = (payload, cb) => {
    return(dispatch, getState) => {
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: `${baseUrl}/login`,
            data: payload
        })
        .then((response) => {
            localStorage.setItem('accessToken', response.data.access_token);
            cb()
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export const getRecruitmentList = (payload, addPage = false) => {
    return(dispatch, getState) => {
        dispatch(setLoading(true))
        const accessToken = localStorage.getItem('accessToken');
        const url = addParameter(`${baseUrl}/getJob`, payload)
        axios({
            method: 'GET',
            url: `${url}`,
            headers: {
                access_token: accessToken
              }
        })
        .then((response) => {
            if(addPage) {
                dispatch(addRecruitmentList(response.data))
            } else {
                dispatch(setRecruitmentList(response.data))
            }
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export const getRecruitmentDetail = (payload) => {
    return(dispatch, getState) => {
        dispatch(setLoading(true))
        const accessToken = localStorage.getItem('accessToken');
        axios({
            method: 'GET',
            url: `${baseUrl}/getDetail/${payload}`,
            headers: {
                access_token: accessToken
              }
        })
        .then((response) => {
            dispatch(setRecruitmentDetail(response.data))
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}