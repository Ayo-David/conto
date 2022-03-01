import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
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


    return (


        <ContactsComponent
            data={data}
            loading={loading}
            navigate={navigate}
        />


    )
}

export default Contacts;
