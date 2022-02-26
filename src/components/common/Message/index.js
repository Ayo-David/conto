import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
    message,
    secondary,
    primary,
    success,
    info,
    danger,
    dismiss,
}) => {
    const [dismissed, setDismissed] = useState(false)
    const getBackground = () => {

        if (secondary) {
            return colors.secondary
        } else if (primary) {
            return colors.primary
        } else if (info) {
            return colors.secondary
        } else if (danger) {
            return colors.danger
        } else if (success) {
            return colors.success
        } else {
            return colors.grey
        }
    }
    return (
        <>
            {
                dismissed ? null :
                    <View>
                        <TouchableOpacity style={[styles.wrapper, { backgroundColor: getBackground() }]}>
                            <View style={styles.messageSection}>
                                {message && <Text style={{ color: colors.white }}>
                                    {message}</Text>}
                                {typeof dismiss === "function" &&

                                    <TouchableOpacity onPress={() => {
                                        setDismissed(true)
                                        dismiss()
                                    }
                                    }>
                                        <Text style={{ color: colors.white }} >X</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
            }
        </>
    );
}

export default Message;
