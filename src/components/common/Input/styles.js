
import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";


export default StyleSheet.create({
    inputContainer: {
        paddingVertical: 12,
    },
    
    wrapper: {
        height: 40,
        borderRadius: 5,
        borderColor: colors.grey,
        borderWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 5,
        alignItems: "center",
        marginTop: 5,
    },
    textInput: {
        flex: 1,
    },
    error: {
        color: colors.danger,
        paddingTop: 5,
        fontSize: 12
    },
});