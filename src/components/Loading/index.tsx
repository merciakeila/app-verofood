import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Colors } from 'constants/index';
import styles from './styles';

interface ILoading {
  transparent?: boolean
  text?: string
}

const Loading = ({ transparent, text }: ILoading) => (
  <View style={[styles.container, { backgroundColor: transparent ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.8)' }]}>
    <View style={styles.content}>
      <ActivityIndicator size="large" color={Colors.primary} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  </View>
);

export default Loading;