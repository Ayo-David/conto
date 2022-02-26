import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import { CREATE_CONTACT } from '../../constants/routeNames';
import Icon from '../common/Icon';
import Message from '../common/Message'
import styles from './styles';

const ContactsComponent = ({ data, loading, navigate }) => {

    const ListEmptyComponent = () => {
        return (
            <View style={styles.wrapper}>
                <Message message='No Contact Found!' info />
            </View>
        )
    }
    const renderItem = ({ item }) => {
        console.log("Item from contacts", item)
        const { contact_picture, first_name, last_name, phone_number, country_code } = item
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.itemContainer}>

                    {contact_picture
                        ? <Image width={50} height={50} source={{ uri: contact_picture }} />
                        : <View style={styles.avatar}>
                            <Text style={styles.textAvatar}>{first_name[0]}{last_name[0]}</Text>
                        </View>
                    }
                    <View style={{ paddingLeft: 10 }}>

                        <View style={styles.nameView}>
                            <Text style={styles.textName}>{first_name}</Text>
                            <Text style={styles.textLastName}>{last_name}</Text>
                        </View>

                        <Text style={styles.phone__number}>{`${country_code} ${phone_number}`}</Text>

                    </View>
                </View>

                <Icon name='right' type='ant' size={18} color={colors.grey} />

            </TouchableOpacity>
        )
    }
    return (
        <>

            <View style={{ backgroundColor: 'white' }}>

                {!loading
                    ?
                    <View style={styles.flatlist}>
                        <FlatList
                            data={data}
                            ListEmptyComponent={ListEmptyComponent}
                            keyExtractor={(item) => { String(item.id) }}
                            ItemSeparatorComponent={() => (

                                <View style={{ height: 0.5, backgroundColor: colors.grey }}></View>
                            )
                            }
                            renderItem={renderItem}
                            ListFooterComponent={<View style={{ height: 150 }}></View>}
                        />
                    </View>
                    : <ActivityIndicator size='large' style={styles.wrapper} />
                }



            </View>
            <View style={styles.addContact}>
                <TouchableOpacity onPress={() => { navigate(CREATE_CONTACT) }}>
                    <Icon type='ant' name='plus' size={30} style={styles.addIcon} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default ContactsComponent;
