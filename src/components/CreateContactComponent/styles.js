import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        flex: 1
    },
    image: {
        borderRadius: 100,
        alignSelf: 'center',
    },
    chooseText: {
        color: colors.primary,
        textAlign: 'center',
    },
    favourite: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
    },
    favouriteText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
})