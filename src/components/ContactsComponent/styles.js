import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        flex: 1,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flatlist: {
        paddingVertical: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addContact: {

        width: 55,
        height: 55,
        borderRadius: 100,
        backgroundColor: colors.danger,
        position: 'absolute',
        bottom: 45,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addIcon: {
        color: colors.white,
        fontWeight: 'bold'
    },
    avatar: {
        flexDirection: 'row',
        borderRadius: 100,
        backgroundColor: colors.grey,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAvatar: {
        color: colors.white,
        fontSize: 20
    },
    nameView: {
        flexDirection: 'row',
        paddingBottom: 5
    },

    textName: {
        fontSize: 17,
    },
    textLastName: {
        paddingLeft: 2,
        fontSize: 17,
    },
    phone__number: {
        fontSize: 14,
        opacity: 0.5,
    },

})