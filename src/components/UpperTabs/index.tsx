import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'constants/index';
import styles from './styles';

interface IUpperTabs {
    children: any
}

const UpperTabs = ({ children }: IUpperTabs) => {
    return (
        <LinearGradient colors={[Colors.background, Colors.white]} style={styles.container}>
            {children}
        </LinearGradient>
    );
}

export default UpperTabs;