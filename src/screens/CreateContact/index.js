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
        console.log('form:', form)
        createContact(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST)
        })
    }
    const toggleSwitch = () => {
        setForm({ ...form, 'is_favorite': !form.is_favorite })
    }
    return (

        <CreateContactComponent
            onChangeHandler={onChangeHandler}
            submitForm={submitForm}
            error={error}
            loading={loading}
            setForm={setForm}
            form={form}
            toggleSwitch={toggleSwitch}
        />

    )
}

export default CreateContact;
