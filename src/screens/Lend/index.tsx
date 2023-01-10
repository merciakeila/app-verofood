import React, { useState } from 'react';
import styles from './styles';
import { View } from 'react-native';
import { Button, CustomHeader, CardOption, Alert, SubHeader } from 'components/index';
import { RootTabScreenProps } from 'types';

export default function LendScreen({ navigation }: RootTabScreenProps<'LendStack'>) {

  const [type, setType] = useState('');

  const goToLend = () => {
    if (type) {
      type === 'newuser' ? navigation.navigate('LendNewUser') : navigation.navigate('LendNewLoan');
    } else {
      Alert({ title: 'Ops!', text: 'Selecione o tipo de empréstimo antes de prosseguir.' });
    }
  }

  return (
    <>
      <CustomHeader>Tipo de empréstimo</CustomHeader>
      <SubHeader>Solicitação de novo empréstimo pelo colaborador</SubHeader>
      <View style={styles.container}>

        <CardOption active={type === 'newuser' ? true : false} title="Novo Cliente" icon="user-plus" onPress={() => setType('newuser')} >
          Empréstimo com cadastro de novo cliente.
        </CardOption>
        <CardOption active={type === 'newloan' ? true : false} title="Cliente Cadastrado" icon="users" onPress={() => setType('newloan')} >
          Empréstimo para cliente cadastrado no sistema.
        </CardOption>

        <Button onPress={() => goToLend()}>Continuar</Button>
      </View>
    </>
  );
}