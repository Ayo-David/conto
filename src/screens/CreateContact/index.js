import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import { CONTACT_DETAILS, CONTACT_LIST } from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import editContact from '../../context/actions/contacts/editContact';
import useDataLayer from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';
import countryCode from '../../utils/countryCode';

const CreateContact = () => {
    const { navigate } = useNavigation()
    const { contactsState: {
        createContact: { error, loading } },
        contactsDispatch
    } = useDataLayer()

    const { params } = useRoute()

    const [form, setForm] = useState({})
    const sheetRef = useRef(null)
    const [localFile, setLocalFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);


    const onChangeHandler = ({ name, val }) => {
        setForm({
            ...form,
            [name]: val
        })
    }
    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    };
    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };
    const onFileSelected = (image) => {
        closeSheet();
        setLocalFile(image);
    };

    useEffect(() => {
        if (params?.contact) {
            const {
                contact_picture,
                first_name,
                last_name,
                phone_number,
                is_favorite,
                country_code
            } = params.contact

            setForm(prev => {
                return {
                    ...prev,
                    first_name,
                    last_name,
                    phone_number,
                    is_favorite,
                    contact_picture,
                }
            })
            if (params?.contact?.contact_picture)
                setLocalFile(contact_picture)

            if (params?.contact?.country_code) {
                const country = countryCode.find(item => {
                    return item.value.replace("+", '') === country_code
                })
                if (country) {
                    setForm(prev => {
                        return {
                            ...prev,
                            phone_code: country.key.toUpperCase()
                        }
                    })
                }
            }

        }

    }, [])


    const submitForm = () => {
        //console.log('form:', form)
        if (params?.contact) {
            if (localFile?.size) {
                setIsUploading(true)
                uploadImage(localFile)((url) => {
                    setIsUploading(false)
                    editContact({ ...form, contact_picture: url }, params?.contact.id)(contactsDispatch)((item) => {
                        navigate(CONTACT_DETAILS, { item })
                    })
                })(error => {
                    console.log('error with image upload ', error)
                    setIsUploading(false)
                })
            } else {
                editContact(form, params?.contact.id)(contactsDispatch)((item) => {
                    navigate(CONTACT_DETAILS, { item })
                })
            }

        } else {

            if (localFile?.size) {
                setIsUploading(true)
                uploadImage(localFile)((url) => {
                    setIsUploading(false)
                    createContact({ ...form, contact_picture: url })(contactsDispatch)(() => {
                        navigate(CONTACT_LIST)
                    })
                })(error => {
                    console.log('error with image upload ', error)
                    setIsUploading(false)
                })
            } else {
                createContact(form)(contactsDispatch)(() => {
                    navigate(CONTACT_LIST)
                })
            }
        }
    }
    const toggleSwitch = () => {
        setForm({ ...form, 'is_favorite': !form.is_favorite })
    }
    return (

        <CreateContactComponent
            onChangeHandler={onChangeHandler}
            submitForm={submitForm}
            error={error}
            loading={isUploading}
            setForm={setForm}
            form={form}
            toggleSwitch={toggleSwitch}
            sheetRef={sheetRef}
            closeSheet={closeSheet}
            openSheet={openSheet}
            localFile={localFile}
            onFileSelected={onFileSelected}
        />

    )
}

export default CreateContact;
