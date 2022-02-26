import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CommonButton from '../common/CommonButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeNames'
import Message from '../common/Message';
import Icon from '../common/Icon';



const LoginComponent = ({ form,
    onSubmit,
    onChange,
    error,
    loading,
    justSignedIn,
}) => {
    const { navigate } = useNavigation()
    const [secureEntry, setSecureEntry] = useState(true)


    return (
        <Container >
            <Image source={require("../../assets/images/logo.png")} style={styles.logoImage} />
            <View style={styles.titleWrapper}>
                <Text style={styles.textWelcome}>Welcome to Conto</Text>
                <Text style={styles.textSubtitle}>Please Login here</Text>
            </View>
            {
                justSignedIn &&
                <Message success dismiss={() => { }} message="Successfully Registered!" />
            }

            {error && !error?.error &&
                <Message danger dismiss={() => { }} message="Invalid Credential" />
            }

            {error?.error &&
                <Message danger dismiss={() => { }} message={error?.error} />
            }
            <Input style={{ padding: 10 }}
                label='Username'
                placeholder='Enter Username'
                value={form?.username}
                onChangeText={(val) => onChange({ name: "username", val })}
            />

            <Input style={{ padding: 10 }}
                label='Password'
                icon={
                    <TouchableOpacity onPress={() => {
                        setSecureEntry(prev => !prev)
                    }}>
                        {secureEntry
                            ?
                            <Icon
                                type='materialCommunity'
                                name='eye-settings'
                                size={20}
                            />
                            :
                            <Icon
                                type='materialCommunity'
                                name='eye-settings-outline'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                }
                iconPosition="right"
                secureTextEntry={secureEntry}
                placeholder='Enter Password'
                onChangeText={(val) => onChange({ name: "password", val })}
            />
            <CommonButton
                primary
                title="Submit"
                loading={loading}
                onPress={onSubmit}
                disabled={loading}
            />
            <View style={styles.createSection}>
                <Text style={styles.textSection}>Need a new account?</Text>
                <TouchableOpacity onPress={() => navigate(REGISTER)}>
                    <Text style={styles.textRegister}>Register</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default LoginComponent;
