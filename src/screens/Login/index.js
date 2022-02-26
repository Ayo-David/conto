import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import LoginComponent from '../../components/Login';
import login from '../../context/actions/auth/login';
import useDataLayer from '../../context/Provider';

const Login = () => {
    const { params } = useRoute()
    const [form, setForm] = useState({})
    const [justSignedIn, setJustSignedIn] = useState(false)

    const { authDispatch, authState } = useDataLayer()

    //console.log("Logind error", authState)

    const onChange = ({ name, val }) => {
        setForm({ ...form, [name]: val })
    }
    const onSubmitHandler = () => {
        if (form.username && form.password) {
            login(form)(authDispatch)
        }
    }

    useEffect(() => {
        if (params) {
            //console.log("Params", params)
            setForm({ ...form, username: params.data.username })
            setJustSignedIn(true)
        }
    }, [params])
    return (
        <LoginComponent
            form={form}
            onSubmit={onSubmitHandler}
            onChange={onChange}
            error={authState.error}
            loading={authState.loading}
            justSignedIn={justSignedIn}
        />
    )
}

export default Login;
