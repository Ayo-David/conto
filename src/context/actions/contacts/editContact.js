import {
    EDIT_CONTACT_FAIL,
    EDIT_CONTACT_LOADING,
    EDIT_CONTACT_SUCCESSFUL
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"


export default (form, id) => (dispatch) => (onSuccess) => {

    const requestPayload = {
        first_name: form.first_name || '',
        last_name: form.last_name || '',
        phone_number: form.phone_number || '',
        country_code: form.country_code || '',
        contact_picture: form.contact_picture || null,
        is_favorite: form.is_favorite || '',
    }
    console.log("Edit this:", requestPayload)
    dispatch({
        type: EDIT_CONTACT_LOADING,
    })
    axiosInstance.put(`/contacts/${id}`, requestPayload)
        .then((res) => {
            //console.log("new contact res", res.data)
            dispatch({
                type: EDIT_CONTACT_SUCCESSFUL,
                payload: res.data
            })
            onSuccess(res.data)
        }).catch((error) => {
            console.log("Edit contact error", error)
            dispatch({
                type: EDIT_CONTACT_FAIL,
                payload: error.response
                    ? error.response.data
                    : { error: 'Something went wrong!' }
            })
        })
}