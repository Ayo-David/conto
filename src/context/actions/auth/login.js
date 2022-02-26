import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESSFUL } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";

export default ({ username, password }) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    })
    axiosInstance.post("/auth/login", { username, password })
        .then((response) => {
            console.log("login_data", response.data)

            const setAsync = async () => {

                try {
                    await AsyncStorage.setItem("user", JSON.stringify(response.data.user))
                    await AsyncStorage.setItem("token", response.data.token)
                } catch (error) {
                    console.log('asyn error', error)
                }
            }
            setAsync()


            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log("error", error)
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response ? error.response.data : { error: "Something is wrong" }
            })
        })
}