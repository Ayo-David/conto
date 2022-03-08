import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import useDataLayer from '../../context/Provider';

const Contacts = () => {
    const { setOptions, navigate, toggleDrawer } = useNavigation()
    const { contactsState: {
        getContacts: { data, loading } },
        contactsDispatch } = useDataLayer()

    // console.log('contact_data', data)
    // console.log('loading', loading)
    const [sortBy, setSortBy] = useState(null)

    const getSettings = async () => {
        const preference = await AsyncStorage.getItem('sortBy')
        setSortBy(preference)
    }

    useEffect(() => {
        setOptions({
            headerLeft: () => {
                return (
                    <TouchableOpacity onPress={() => toggleDrawer()}>
                        <Icon type='materialCommunity' name='menu' size={20} color={colors.primary} />
                    </TouchableOpacity>
                )
            },
        })
        getContacts()(contactsDispatch)
    }, [])


    useFocusEffect(
        useCallback(() => {
            getSettings()
        }, [])
        // return ()=>{}
    )


    return (
        <ContactsComponent
            data={data}
            loading={loading}
            navigate={navigate}
            sortBy={sortBy}
        />


    )
}

export default Contacts;
