import React, { createContext, useContext, useReducer } from 'react'
import authInitialState from './initialStates/authInitialState'
import contactsInitialState from './initialStates/contactsInitialState'
import authReducer from './reducers/auth'
import contactsReducer from './reducers/contacts'


const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState)
    const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialState)
    return (
        <GlobalContext.Provider value={{ authState, authDispatch, contactsState, contactsDispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useDataLayer = () => useContext(GlobalContext)

export default useDataLayer