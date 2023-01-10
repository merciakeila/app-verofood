import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'components/Themed';
import styles from './styles';

import { RootStackScreenProps } from 'types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Este local não existe.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Volte para tela anterior!</Text>
      </TouchableOpacity>
    </View>
  );
}
