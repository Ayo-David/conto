import { CREATE_CONTACT_FAIL, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESSFUL } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"


export default (form) => (dispatch) => (onSuccess) => {

    const requestPayload = {
        first_name: form.first_name || '',
        last_name: form.last_name || '',
        phone_number: form.phone_number || '',
        country_code: form.country_code || '',
        contact_picture: form.contact_picture || null,
        is_favorite: form.is_favorite || '',
    }
    dispatch({
        type: CREATE_CONTACT_LOADING,
    })
    axiosInstance.post('/contacts/', requestPayload)
        .then((res) => {
            //console.log("new contact res", res.data)
            dispatch({
                type: CREATE_CONTACT_SUCCESSFUL,
                payload: res.data
            })
            onSuccess()
        }).catch((error) => {
            console.log("create contact error", error)
            dispatch({
                type: CREATE_CONTACT_FAIL,
                payload: error.response
                    ? error.response
                    : { error: 'Something went wrong!' }
            })
        })
}