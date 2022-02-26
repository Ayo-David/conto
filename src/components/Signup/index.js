import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CommonButton from '../common/CommonButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames'
import Message from '../common/Message';




const RegisterComponent = ({
    onChange,
    onSubmit,
    form,
    errors,
    loading,
    error
}) => {
    const { navigate } = useNavigation()
    const [secureEntry, setSecureEntry] = useState(true)

    useEffect(() => {
        //console.log('error', errors)
    }, [])

    return (
        <Container >
            <Image source={require("../../assets/images/logo.png")} style={styles.logoImage} />
            <View style={styles.titleWrapper}>
                <Text style={styles.textWelcome}>Welcome to Conto</Text>
                <Text style={styles.textSubtitle}>Please Create an account</Text>
            </View>
            <View style={styles.form}>

                {/* {console.log(error)} */}
                {error?.error &&
                    <Message
                        danger
                        dismiss={() => { }}
                        message={error.error}
                    />}

                <Input style={{ padding: 10 }}
                    label='Username'
                    placeholder='Enter Username'
                    error={errors.username || error?.username?.[0]}
                    onChangeText={(val) => onChange({ name: "username", val })}

                />
                <Input style={{ padding: 10 }}
                    label='First Name'
                    placeholder='Enter First Name'
                    error={errors.firstname || error?.first_name?.[0]}
                    onChangeText={(val) => onChange({ name: "firstname", val })}
                />
                <Input style={{ padding: 10 }}
                    label='Last Name'
                    placeholder='Enter Last Name'
                    error={errors.lastname || error?.last_name?.[0]}
                    onChangeText={(val) => onChange({ name: "lastname", val })}
                />
                <Input style={{ padding: 10 }}
                    label='Email'
                    placeholder='Enter Email'
                    error={errors.email || error?.email?.[0]}
                    onChangeText={(val) => onChange({ name: "email", val })}
                />

                <Input style={{ padding: 10 }}
                    label='Password'
                    icon={
                        <TouchableOpacity onPress={() => {
                            setSecureEntry((prev) => !prev)
                        }}>
                            <Text>{secureEntry ? "SHOW" : "HIDE"}</Text>
                        </TouchableOpacity>
                    }

                    secureTextEntry={secureEntry}
                    iconPosition="right"

                    placeholder='Enter Password'
                    error={errors.password || error?.password?.[0]}
                    onChangeText={(val) => onChange({ name: "password", val })}
                />
            </View>
            <CommonButton
                onPress={onSubmit}
                primary title="Submit"
                loading={false}
                disabled={loading}
            />
            <View style={styles.createSection}>
                <Text style={styles.textSection}>Have an account?</Text>
                <TouchableOpacity onPress={() => navigate(LOGIN)}>
                    <Text style={styles.textRegister}>Login</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default RegisterComponent;
