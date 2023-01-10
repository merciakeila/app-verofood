import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Colors } from 'constants/index';

const BottomLoading = () => (
    <View style={styles.loading}>
        <Text style={styles.text}>Carregando...</Text>
        <ActivityIndicator size="large" color={Colors.primary}/>
    </View>
);

export default BottomLoading;