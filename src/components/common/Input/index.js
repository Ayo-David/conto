import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';




const Input = ({
    style,
    label,
    icon,
    value,
    iconPosition,
    error,
    ...prop
}) => {

    const [focused, setFocused] = useState(false)

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === "left") {
                return "row"
            } else {
                return "row-reverse"
            }
        } else {
            return "row"
        }
    }

    const getBorderColor = () => {
        if (error) {
            return colors.danger
        }
        if (focused) {
            return colors.primary
        }
        else {
            return colors.grey
        }
    }

    return (

        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, { flexDirection: getFlexDirection(), borderColor: getBorderColor() }]}>
                {icon && <View>{icon}</View>}
                <TextInput style={[styles.textInput, style]}
                    value={value}
                    onFocus={() => { setFocused(true) }}
                    onBlur={() => { setFocused(false) }}
                    {...prop}
                />
            </View>
            {error && <View><Text style={styles.error}>{error}</Text></View>}
        </View>
    );
}

export default Input;


