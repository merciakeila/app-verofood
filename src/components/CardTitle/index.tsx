import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'constants/index';
import styles from './styles';
import { SimpleLineIcons } from '@expo/vector-icons';

interface ICardTitle {
    children: any,
    icon: any
}

const CardTitle = ({ children, icon }: ICardTitle) => {
    return (
        <View style={styles.box}>
            <SimpleLineIcons name={icon} size={22} color={Colors.white} />
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default CardTitle;