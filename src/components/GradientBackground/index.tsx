import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'constants/index';
import styles from './styles';

export default function GradientBackground({ children }: { children: any }) {
    return <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} start={[0, 0]} end={[1, 0]} style={styles.container}>{children}</LinearGradient>;
}