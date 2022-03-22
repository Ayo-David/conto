import { useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';

const ContactDetails = () => {

    const { params } = useRoute()

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
    return (
        <ContactDetailsComponent
            contact={params}
            sheetRef={sheetRef}
            openSheet={openSheet}
            closeSheet={closeSheet}
            onFileSelected={onFileSelected}
            localFile={localFile}
        />
    )
}

export default ContactDetails;
