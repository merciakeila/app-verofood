import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'constants/index';
import styles from './styles';
import { SimpleLineIcons } from '@expo/vector-icons';

interface ICardStatistics {
    children: any,
    title?: string,
    icon: any
}

const CardStatistics = ({ children, title, icon }: ICardStatistics) => {
    return (
        <View style={styles.box}>
            <View style={styles.left}>
            <SimpleLineIcons name={icon} size={28} color={Colors.primary} />
            </View>
            <View style={styles.right}>
            <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{children}</Text>
            </View>
        </View>
    )
}

export default CardStatistics;