import React from 'react';
import { Text, Pressable } from 'react-native';
import { Colors } from 'constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

interface IBoxButton {
    onPress?: () => void,
    color?: string,
    children: string,
    icon: any
}

const BoxButton = ({children, icon, onPress, color}: IBoxButton) => {
    let backgroundColor = Colors.white;
    let textColor = Colors.primary;
    let gradient1 = Colors.white;
    let gradient2 = Colors.background;
    if(color=='secondary'){
        backgroundColor = Colors.primary;
        textColor = Colors.white;
        gradient1 = Colors.gradient1;
        gradient2 = Colors.gradient2;
    }
    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <LinearGradient colors={[gradient1, gradient2]} start={[0, 0]} end={[1, 0]} style={[styles.box, {backgroundColor}]}>
                <FontAwesome name={icon} size={50} color={textColor} />
                <Text style={[styles.text, {color: textColor}]}>{children}</Text>
            </LinearGradient>
        </Pressable>
    );
    
}

export default BoxButton;