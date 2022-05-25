import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native'
import useDataLayer from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from './SideMenu/RootNavigator';



const AppNavContainer = (props) => {



    const { authState: { isLoggedIn } } = useDataLayer()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authLoaded, setAuthLoaded] = useState(false)

    //console.log('login', isLoggedIn)
    const getUser = async () => {
        let user, token
        try {
            user = await AsyncStorage.getItem("user")
            token = await AsyncStorage.getItem("token")
            //console.log("Get AsyncUser", user)
            //console.log("Get AsyncToken", token)
            if (user) {
                setAuthLoaded(true)
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
                setAuthLoaded(true)
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
        <>
            {authLoaded ?
                <NavigationContainer ref={navigationRef}>
                    {isLoggedIn || isAuthenticated ?
                        <DrawerNavigator />
                        :
                        <AuthNavigator />
                    }
                </NavigationContainer>
                :
                <ActivityIndicator size='large' style={styles.loading} />
            }
        </>
    );
}


const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default AppNavContainer;
