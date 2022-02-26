import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import RegisterComponent from '../../components/Signup';
import { REGISTER_LOADING } from '../../constants/actionTypes';
import { LOGIN } from '../../constants/routeNames';
import register, { clearAuthState } from '../../context/actions/auth/register';
import useDataLayer from '../../context/Provider'


const Signup = ({ navigation }) => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const { authState: { error, data, loading }, authDispatch } = useDataLayer()


    const onChange = ({ name, val }) => {
        setForm({ ...form, [name]: val })
        if (val !== "") {
            if (name === 'password') {
                if (val.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'Password needs 5 characters' }
                    })
                } else {
                    setErrors((prev) => { return { ...prev, [name]: null } })
                }
            } else {

                setErrors((prev) => { return { ...prev, [name]: null } })
            }

        } else {

            setErrors((prev) => { return { ...prev, [name]: 'This field is required' } })
        }

    }


    const onSubmitHandler = () => {
        if (!form.username) {
            setErrors((prev) => { return { ...prev, username: "Please enter Username" } })
        }
        if (!form.firstname) {
            setErrors((prev) => { return { ...prev, firstname: "Please enter First Name" } })
        }
        if (!form.lastname) {
            setErrors((prev) => { return { ...prev, lastname: "Please enter Last Name" } })
        }
        if (!form.email) {
            setErrors((prev) => { return { ...prev, email: "Please enter Email" } })
        }
        if (!form.password) {
            setErrors((prev) => { return { ...prev, password: "Please enter Password" } })
        }

        if (Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim().length > 0) &&
            Object.values(errors).every(item => !item)
        ) {
            //console.log('authStat', error, data, loading)
            register(form)(authDispatch)((response) => {
                navigation.navigate(LOGIN, { data: response })
            })

        }
    }


    // useEffect(() => {
    //     if (data) {
    //         navigation.navigate(LOGIN)
    //     }
    // }, [data])

    useFocusEffect(
        useCallback(() => {
            //this will only be call when the screen goes out of focus
            //it is called cleanup function
            return () => {
                if (data || error) {
                    clearAuthState()(authDispatch)
                }
            }
        }, [data, error])
    )


    return (
        <RegisterComponent
            onSubmit={onSubmitHandler}
            form={form}
            errors={errors}
            onChange={onChange}
            loading={loading}
            error={error}
        />
    )
}

export default Signup;
