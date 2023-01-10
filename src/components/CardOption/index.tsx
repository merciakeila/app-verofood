import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'constants/index';
import styles from './styles';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

interface ICardOption {
    children: any,
    title?: string,
    icon: any,
    onPress?: () => void,
    active?: boolean
}

const CardOption = ({ children, title, icon, onPress, active }: ICardOption) => {
    let backgroundColor = Colors.primary;
    let textColor = Colors.white;
    let iconColor = Colors.white;
    if(!active){
        backgroundColor = Colors.white;
        textColor = Colors.black;
        iconColor = Colors.primary;
    }
    return (
        <TouchableOpacity onPress={onPress} style={[styles.box, {backgroundColor}]}>
            <View style={styles.left}>
                <FontAwesome name={icon} size={32} color={iconColor} />
            </View>
            <View style={styles.middle}>
            <Text style={[styles.title, {color: textColor}]}>{title}</Text>
                <Text style={[styles.description, {color: textColor}]}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardOption;