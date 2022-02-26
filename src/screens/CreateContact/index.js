import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import useDataLayer from '../../context/Provider';

const CreateContact = () => {
    const { navigate } = useNavigation()
    const { contactsState: {
        createContact: { error, loading } },
        contactsDispatch
    } = useDataLayer()
    const [form, setForm] = useState({})
    const onChangeHandler = ({ name, val }) => {
        setForm({
            ...form,
            [name]: val
        })
    }
    const submitForm = () => {
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST)
        })
    }
    return (

        <CreateContactComponent
            onChangeHandler={onChangeHandler}
            submitForm={submitForm}
            error={error}
            loading={loading}
            setForm={setForm}
            form={form}
        />

    )
}

export default CreateContact;
