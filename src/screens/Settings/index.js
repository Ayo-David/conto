import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {
    const [email, setEmail] = useState(null)
    const [sortBy, setSortBy] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const getSettings = async () => {

        const preference = await AsyncStorage.getItem('sortBy')
        setSortBy(preference)

        //instead of asyn and await you can use this
        AsyncStorage.getItem('user')
            .then((val) => {
                // let email = val.email
                setEmail(JSON.parse(val).email)
            })
    }
    const saveSettings = async (key, value) => {
        await AsyncStorage.setItem(key, value)
        setSortBy(value)
    }


    const settingsOptions = [
        { title: 'My Info', subTitle: 'Setup your profile', onPress: () => { } },
        { title: 'Accounts', subTitle: null, onPress: () => { } },
        {
            title: 'Default account for new contacts',
            subTitle: email,
            onPress: () => { },
        },
        { title: 'Contacts to display', subTitle: 'All contacts', onPress: () => { } },
        {
            title: 'Sort by',
            subTitle: sortBy,
            onPress: () => {
                setModalVisible(true);
            },
        },
        { title: 'Name format', subTitle: 'First name first', onPress: () => { } },
        { title: 'Import', subTitle: null, onPress: () => { } },
        { title: 'Export', subTitle: null, onPress: () => { } },
        { title: 'Blocked numbers', subTitle: null, onPress: () => { } },
        { title: 'About RNContacts', subTitle: null, onPress: () => { } },

    ]

    const preference = [
        {
            name: 'First Name', onPress: () => {
                saveSettings('sortBy', 'First Name')
                setModalVisible(false)
            },
            selected: sortBy === 'First Name',
        },
        {
            name: 'Last Name', onPress: () => {
                saveSettings('sortBy', 'Last Name')
                setModalVisible(false)
            },
            selected: sortBy === 'Last Name',
        }
    ]

    useEffect(() => {
        getSettings()
    }, [])

    return (
        <SettingsComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            settingsOptions={settingsOptions}
            preference={preference}
        />
    )
}

export default Settings;
