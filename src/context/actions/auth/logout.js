import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGOUT } from "../../../constants/actionTypes"

const logout = () => (dispatch) => {

    try {
        AsyncStorage.removeItem("user")
    } catch (error) {
        console.log(error)
    }
    dispatch({
        type: LOGOUT,
    })
}

export default logout