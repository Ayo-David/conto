import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import ContactDetails from '../screens/ContactDetails';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';


const HomeStack = createNativeStackNavigator()

const HomeNavigator = (props) => {

    return (
        <HomeStack.Navigator
            initialRouteName={CONTACT_LIST}
        // screenOptions={{
        //     headerShown: true,
        // }}
        >
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
            <HomeStack.Screen name={SETTINGS} component={Settings} />
        </HomeStack.Navigator>

    );
}

export default HomeNavigator;
