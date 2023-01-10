import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'constants/index';
import styles from './styles';
import { SimpleLineIcons } from '@expo/vector-icons';

interface IButtonProfile {
    onPress?: () => void,
    children: string,
    title: string
}

const ButtonProfile = ({ onPress, children, title }: IButtonProfile) => {
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <View style={styles.left}>
                <Text style={styles.title}>{title}</Text>
                <Text>{children}</Text>
            </View>
            <View style={styles.right}>
                <SimpleLineIcons name="arrow-right" size={18} color={Colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

export default ButtonProfile;