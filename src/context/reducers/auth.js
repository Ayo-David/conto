import React from 'react'
import {
    CLEAR_AUTH_STATE,
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESSFUL,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESSFUL
} from '../../constants/actionTypes'

const auth = (prevState, { type, payload }) => {
    switch (type) {
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            //console.log('authstate', prevState)
            return {
                ...prevState,
                loading: true
            };
        case REGISTER_SUCCESSFUL:

            return {
                ...prevState,
                loading: false,
                // isLoggedIn: true,
                data: payload,
            };
        case LOGIN_SUCCESSFUL:
            return {
                ...prevState,
                loading: false,
                isLoggedIn: true,
                data: payload
            }

        case REGISTER_FAIL:
        case LOGIN_FAIL:
            //console.log('authstate', prevState)
            return {
                ...prevState,
                loading: false,
                error: payload,
            };
        case CLEAR_AUTH_STATE:
            return {
                ...prevState,
                loading: false,
                error: payload,
                data: null,
                error: null
            };
        case LOGOUT:
            return {
                ...prevState,
                loading: false,
                data: null,
                error: null,
                isLoggedIn: false
            }
        default:
            return prevState
    }
}

export default auth