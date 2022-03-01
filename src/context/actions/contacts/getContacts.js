import {
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESSFUL
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"

export default () => (dispatch) => {
    dispatch({
        type: GET_CONTACTS_LOADING,
    })
    axiosInstance.get('/contacts/')
        .then((res) => {
            console.log("Contacts", res.data)
            dispatch({
                type: GET_CONTACTS_SUCCESSFUL,
                payload: res.data
            })
        })
        .catch((error) => {
            console.log('Get Contacts', error)
            dispatch({
                type: GET_CONTACTS_FAIL,
                payload: error.response
                    ? error.response.data
                    : { error: 'Something went wrong' }
            })
        })
}