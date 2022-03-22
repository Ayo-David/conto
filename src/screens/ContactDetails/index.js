import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import useDataLayer from '../../context/Provider';

const ContactDetails = () => {

    const { params } = useRoute()
    const { navigate } = useNavigation()
    const { contactsDispatch } = useDataLayer()

    const sheetRef = useRef(null)
    const [localFile, setLocalFile] = useState(null)

    const openSheet = () => {
        if (sheetRef.current)
            sheetRef.current.open()
    }

    const closeSheet = () => {
        if (sheetRef.current)
            sheetRef.current.close()
    }

    const onFileSelected = (image) => {
        closeSheet()
        setLocalFile(image)
    }

    const deleteContactFunc = () => {
        Alert.alert(
            'Delete!',
            `Do you want to delete ${params.first_name}?`,
            [{
                text: "No",
                onPress: () => { },
            },
            {
                text: "Yes",
                onPress: () => {
                    deleteContact(params.id)(contactsDispatch)(() => {
                        navigate(CONTACT_LIST)
                    })
                }
            },
            ]
        )
    }

    return (
        <ContactDetailsComponent
            contact={params}
            sheetRef={sheetRef}
            openSheet={openSheet}
            closeSheet={closeSheet}
            onFileSelected={onFileSelected}
            localFile={localFile}
            deleteContactFunc={deleteContactFunc}
        />
    )
}

export default ContactDetails;
