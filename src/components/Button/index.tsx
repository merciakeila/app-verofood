import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from 'constants/index';
import styles from './styles';

interface IButton {
    onPress?: () => void,
    color?: string,
    children: string,
    marginBottom?: any
}

const Button = ({ onPress, color, children, marginBottom }: IButton) => {

    let backgroundColor = Colors.white;
    let textColor = Colors.primary;

    switch (color) {
        case 'primary':
            backgroundColor = Colors.white;
            textColor = Colors.primary;
            break;
        case 'secondary':
            backgroundColor = Colors.primary;
            textColor = Colors.white;
            break;
        default:
            backgroundColor = Colors.white;
            textColor = Colors.primary;
            break;
    }

    return (
        <TouchableOpacity style={[styles.roundBtn, { backgroundColor }, marginBottom ? {marginBottom} : {}]} onPress={onPress}>
            <Text style={[styles.roundBtnText, { color: textColor }]}>{children}</Text>
        </TouchableOpacity>
    );
}

export default Button;