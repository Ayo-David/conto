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
    }
})