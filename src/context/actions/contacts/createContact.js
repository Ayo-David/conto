import { CREATE_CONTACT_FAIL, CREATE_CONTACT_LOADING, CREATE_CONTACT_SUCCESSFUL } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"


export default ({
    first_name,
    last_name,
    phone_number,
    country_code,
    contact_picture,
    is_favorite }) => (dispatch) => (onSuccess) => {


        dispatch({
            type: CREATE_CONTACT_LOADING,
        })
        axiosInstance.post('/contacts/', {
            country_code,
            first_name,
            last_name,
            phone_number,
            contact_picture,
            is_favorite
        })
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