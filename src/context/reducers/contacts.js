import React from 'react'
import {
    CREATE_CONTACT_FAIL,
    CREATE_CONTACT_LOADING,
    CREATE_CONTACT_SUCCESSFUL,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESSFUL
} from '../../constants/actionTypes'

const contactsReducer = (prevState, { type, payload }) => {
    switch (type) {
        case CREATE_CONTACT_LOADING:
            return ({
                ...prevState,
                createContact: {
                    ...prevState.createContact,
                    error: null,
                    loading: true,
                }
            })
        case CREATE_CONTACT_SUCCESSFUL:
            return ({
                ...prevState,
                createContact: {
                    ...prevState.createContact,
                    error: null,
                    loading: false,
                    data: payload
                }
            })
        case CREATE_CONTACT_FAIL:
            return ({
                ...prevState,
                createContact: {
                    ...prevState.createContact,
                    error: payload,
                    loading: false,
                }
            })
        case GET_CONTACTS_LOADING:
            return (
                {
                    ...prevState,
                    getContacts: {
                        ...prevState.getContacts,
                        error: null,
                        loading: true,
                        data: []
                    }
                }
            )

        case GET_CONTACTS_FAIL:
            return (
                {
                    ...prevState,
                    getContacts: {
                        ...prevState.getContacts,
                        error: payload,
                        loading: false,
                        data: []
                    }
                }
            )
        case GET_CONTACTS_SUCCESSFUL:
            return (
                {
                    ...prevState,
                    getContacts: {
                        ...prevState.getContacts,
                        error: null,
                        loading: false,
                        data: payload
                    }
                }
            )
        default:
            return prevState
    }
}

export default contactsReducer