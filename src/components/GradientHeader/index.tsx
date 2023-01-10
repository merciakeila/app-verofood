import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'constants/index';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import { FormatCpf } from 'utils/helper';

interface IGradientHeader {
    name: string,
    email: string,
    cpf: string,
    data1: any,
    data2: any,
}

const GradientHeader = ({ name, email, cpf, data1, data2 }: IGradientHeader) => {
    return (
        <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.imageFrame}>
                    <Image source={require('images/icon-white.png')} style={styles.img} />
                </View>
            </View>
            <View style={styles.personBox}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.emailText}>{email}</Text>
                <Text style={styles.cpfText}>{FormatCpf(cpf)}</Text>
            </View>
            <View style={styles.statisticsBox}>
                <View style={styles.cardInfo}>
                    <Text style={styles.fontStatistics}>{data1}</Text>
                    <Text style={styles.fontDescription}>Clientes</Text>
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.fontStatistics}>{data2}</Text>
                    <Text style={styles.fontDescription}>Empréstimos</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

export default GradientHeader;