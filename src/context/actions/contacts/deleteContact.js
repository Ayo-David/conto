import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESSFUL
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"


export default (id) => (dispatch) => (onSuccess) => {

  dispatch({
    type: DELETE_CONTACT_LOADING,
  })
  axiosInstance.delete(`/contacts/${id}`)
    .then(() => {
      //console.log("new contact res", res.data)
      dispatch({
        type: DELETE_CONTACT_SUCCESSFUL,
        payload: id
      })
      onSuccess()
    }).catch((error) => {
      console.log("DELETE contact error", error)
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: error.response
          ? error.response.data
          : { error: 'Something went wrong!' }
      })
    })
}