import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useRef, useState, useEffect } from 'react';
import { Alert, View, TouchableOpacity } from 'react-native';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import useDataLayer from '../../context/Provider';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';

const ContactDetails = () => {
    const { params: item } = useRoute();
    const {
        contactsDispatch,
        contactsState: {
            deleteContact: { loading },
        },
    } = useDataLayer();
    const { setOptions, navigate } = useNavigation();
    const sheetRef = useRef(null);
    const [localFile, setLocalFile] = useState(null);
    const [updatingImage, setUpdatingImage] = useState(false);
    const [uploadSucceeded, setUploadSucceeded] = useState(false);

    useEffect(() => {
        if (item) {
            setOptions({
                title: item.first_name + ' ' + item.last_name,
                headerRight: () => {
                    return (
                        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                            <TouchableOpacity>
                                <Icon
                                    size={21}
                                    color={colors.grey}
                                    name={item.is_favorite ? 'star' : 'star-border'}
                                    type="material"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    Alert.alert(
                                        'Delete!',
                                        'Are you sure you want to remove ' + item.first_name,
                                        [
                                            {
                                                text: 'Cancel',
                                                onPress: () => { },
                                            },

                                            {
                                                text: 'OK',
                                                onPress: () => {
                                                    deleteContact(item.id)(contactsDispatch)(() => {
                                                        navigate(CONTACT_LIST);
                                                    });
                                                },
                                            },
                                        ],
                                    );
                                }}
                                style={{ paddingLeft: 10 }}>
                                {loading ? (
                                    <ActivityIndicator size="small" color={colors.primary} />
                                ) : (
                                    <Icon
                                        color={colors.grey}
                                        size={21}
                                        name="delete"
                                        type="material"
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    );
                },
            });
        }
    }, [item, loading]);

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };
    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    };

    const onFileSelected = (image) => {
        closeSheet();
        setLocalFile(image);
        setUpdatingImage(true);
        uploadImage(image)((url) => {
            const {
                first_name,
                last_name,
                phone_number,
                is_favorite,
                country_code

            } = item;
            editContact(
                {
                    first_name,
                    last_name,
                    phone_number,
                    is_favorite,
                    country_code,
                    contact_picture: url,
                },
                item.id,
            )(contactsDispatch)((item) => {
                setUpdatingImage(false);
                setUploadSucceeded(true);
                // navigate(CONTACT_DETAIL, {item});
            });
        })((err) => {
            console.log('err :>> ', err);
            setUpdatingImage(false);
        });
    };

    return (
        <ContactDetailsComponent
            sheetRef={sheetRef}
            onFileSelected={onFileSelected}
            openSheet={openSheet}
            contact={item}
            localFile={localFile}
            uploadSucceeded={uploadSucceeded}
            updatingImage={updatingImage}
        />
    );
};

export default ContactDetails;

