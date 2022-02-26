import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from '../screens/Login';
import Signup from '../screens/Register';


const AuthStack = createNativeStackNavigator()

const AuthNavigator = (props) => {

    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={LOGIN}>
            <AuthStack.Screen name={REGISTER} component={Signup} />
            <AuthStack.Screen name={LOGIN} component={Login} />
        </AuthStack.Navigator>

    );
}

export default AuthNavigator;
