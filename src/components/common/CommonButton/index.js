import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CommonButton = ({
    title,
    secondary,
    primary,
    danger,
    loading,
    disabled,
    ...props
}) => {
    const getBackground = () => {
        if (disabled) {
            return colors.grey
        }
        if (secondary) {
            return colors.secondary
        } else if (primary) {
            return colors.primary
        } else if (danger) {
            return colors.danger
        } else {
            return colors.grey
        }
    }
    return (
        <View>
            <TouchableOpacity style={[styles.wrapper, { backgroundColor: getBackground() }]} {...props}>
                <View style={styles.loadingSection}>
                    {loading && <ActivityIndicator color={disabled ? "black" : colors.white} style={{ paddingRight: 5 }} />}
                    {title && <Text style={{ color: disabled ? "black" : colors.white }}>{loading ? 'Processing' : title}</Text>}
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CommonButton;
