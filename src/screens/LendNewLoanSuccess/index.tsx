import * as React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import { Button } from 'components/index';
import { RootTabScreenProps } from 'types';
import {Colors} from 'constants/index';
import { AntDesign } from '@expo/vector-icons';

export default function LendNewLoanSuccessScreen({ navigation }: RootTabScreenProps<'LendStack'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.success}>Empréstimo realizado com sucesso!</Text>
      <AntDesign name="checkcircleo" size={130} color={Colors.success} />
      <Text style={styles.msg}>Agora você pode acompanhar sua solicitação de empréstimo!</Text>
      <Button onPress={() => navigation.navigate('Lend')}>Finalizar</Button>
    </View>
  );
}