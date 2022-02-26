import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import useDataLayer from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';



const AppNavContainer = (props) => {



    const { authState: { isLoggedIn } } = useDataLayer()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    //console.log('login', isLoggedIn)
    const getUser = async () => {
        let user, token
        try {
            user = await AsyncStorage.getItem("user")
            token = await AsyncStorage.getItem("token")
            console.log("Get AsyncUser", user)
            console.log("Get AsyncToken", token)
            if (user) {
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }
        } catch (error) {
            console.log('Async get error', error)
        }
        //return user
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <NavigationContainer>
            {isLoggedIn || isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavContainer;
