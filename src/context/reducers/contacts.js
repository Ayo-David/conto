import React from 'react'
import {
    CREATE_CONTACT_FAIL,
    CREATE_CONTACT_LOADING,
    CREATE_CONTACT_SUCCESSFUL,
    EDIT_CONTACT_FAIL,
    EDIT_CONTACT_LOADING,
    EDIT_CONTACT_SUCCESSFUL,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESSFUL,
    DELETE_CONTACT_FAIL,
    DELETE_CONTACT_LOADING,
    DELETE_CONTACT_SUCCESSFUL,
} from '../../constants/actionTypes'
import getContacts from '../actions/contacts/getContacts'

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
                },
                //this automactically add the new contact to the listed contacts
                getContacts: {
                    ...prevState.getContacts,
                    loading: false,
                    data: [payload, ...prevState.getContacts.data],
                    error: null,
                },
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

        case EDIT_CONTACT_LOADING:
            return (
                {
                    ...prevState,
                    createContact: {
                        ...prevState.createContact,
                        error: null,
                        loading: true,
                        data: []
                    }
                }
            )

        case EDIT_CONTACT_FAIL:
            return (
                {
                    ...prevState,
                    createContact: {
                        ...prevState.createContact,
                        error: payload,
                        loading: false,
                        data: []
                    }
                }
            )
        case EDIT_CONTACT_SUCCESSFUL:
            return (
                {
                    ...prevState,
                    createContact: {
                        ...prevState.createContact,
                        error: null,
                        loading: false,
                        data: payload
                    },

                    getContacts: {
                        ...prevState.getContacts,
                        error: null,
                        loading: false,
                        data: prevState.getContacts.data.map((item) => {
                            if (item.id === payload.id) {
                                return payload;
                            } else {
                                return item;
                            }
                        }),
                    }
                }
            )
        case DELETE_CONTACT_LOADING:
            return (
                {
                    ...prevState,
                    deleteContact: {
                        ...prevState.deleteContact,
                        error: null,
                        loading: true,
                        data: []
                    }
                }
            )

        case DELETE_CONTACT_FAIL:
            return (
                {
                    ...prevState,
                    deleteContact: {
                        ...prevState.deleteContact,
                        error: payload,
                        loading: false,
                        data: []
                    }
                }
            )
        case DELETE_CONTACT_SUCCESSFUL:
            return (
                {
                    ...prevState,
                    deleteContact: {
                        ...prevState.deleteContact,
                        error: null,
                        loading: false,
                        data: payload
                    },
                    getContacts: {
                        ...prevState.getContacts,
                        error: null,
                        loading: false,
                        data: prevState.getContacts.data.filter((item) => item.id !== payload)
                    }
                }
            )
        default:
            return prevState
    }
}

export default contactsReducer