import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'constants/index';
import { Text } from 'react-native';
import styles from './styles';

interface ICustomHeader {
    children: any
}

const GradientHeader = ({ children }: ICustomHeader) => {
    return (
        <LinearGradient colors={[Colors.background, Colors.white]} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </LinearGradient>
    );
}

export default GradientHeader;