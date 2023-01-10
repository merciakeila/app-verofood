import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'constants/index';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import { FormatCpf } from 'utils/helper';

interface ICustomHeader {
    children: any
}

const GradientHeader = ({ children }: ICustomHeader) => {
    return (
        <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </LinearGradient>
    );
}

export default GradientHeader;