import {
    CLEAR_AUTH_STATE,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESSFUL,

} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import AsyncStorage from '@react-native-async-storage/async-storage';




export const clearAuthState = () => (dispatch) => {
    dispatch({ type: CLEAR_AUTH_STATE })
}

export default ({
    email,
    password,
    username,
    firstname: first_name,
    lastname: last_name,
}) => (dispatch) => (onSuccess) => {
    dispatch({
        type: REGISTER_LOADING,
    });
    axiosInstance
        .post('/auth/register', {
            email,
            password,
            username,
            first_name,
            last_name,
        })
        .then((res) => {
            //console.log("Register data", res.data)
            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: res.data,
            });
            onSuccess(res.data)


        })
        .catch((err) => {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response
                    ? err.response.data
                    : { error: 'Something went wrong, try agin' },
            });
        });
};