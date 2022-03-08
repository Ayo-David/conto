import React from 'react';
import { Alert, Image, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import { CONTACT_LIST, SETTINGS } from '../../constants/routeNames';
import styles from './styles'
import logout from '../../context/actions/auth/logout';
import Icon from '../../components/common/Icon';



const SideMenuu = ({ navigation, dispatch }) => {

    const menuItems = [
        {
            icon: <Icon type='entypo' name='users' size={17} />,
            name: "My Contacts",
            onPress: () => { navigation.navigate(CONTACT_LIST) },
        },
        {
            icon: <Icon type='ant' name='setting' size={17} />,
            name: "My Friends",
            onPress: () => { navigation.navigate(CONTACT_LIST) },
        },
        {
            icon: <Icon type='ant' name='setting' size={17} />,
            name: "Settings",
            onPress: () => { navigation.navigate(SETTINGS) },
        },
        {
            icon: <Icon type='material' name='logout' size={17} />,
            name: "Logout",
            onPress: () => {
                Alert.alert(
                    'Alert',
                    "Do you want to log out?",
                    [{
                        text: "No",
                        onPress: () => { },
                    },
                    {
                        text: "Yes",
                        onPress: () => { logout()(dispatch) }
                    },
                    ]
                )
            },
        },

    ]
    return (
        <SafeAreaView style={styles.wrapper}>
            <Container>

                <Image
                    source={require("../../assets/images/logo.png")}
                    style={styles.logo}
                />
                {
                    menuItems.map(({ icon, name, onPress }) => {
                        return <TouchableOpacity
                            style={styles.links}
                            key={name}
                            onPress={onPress}
                        >
                            {icon}
                            <Text style={styles.itemName}>{name}</Text>
                        </TouchableOpacity>
                    })
                }


            </Container>
        </SafeAreaView>
    );
}

export default SideMenuu;
