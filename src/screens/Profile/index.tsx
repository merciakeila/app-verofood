import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, ScrollView } from 'react-native';
import { GradientHeader, Button, Alert, ButtonProfile } from 'components/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootTabScreenProps } from 'types';
import { AddresseeRequest, PersonRequest } from 'services/requests/person';
import { StatisticsRequest } from 'services/requests/statistics';
import { NumbersOnly, CurrencyFormat } from 'utils/helper';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {

  const [name, setName] = useState('carregando...');
  const [email, setEmail] = useState('carregando...');
  const [cpf, setCpf] = useState('carregando...');
  const [totalLoanLended, setTotalLoanLended] = useState('0');
  const [totalAccountPersonsCreated, setTotalAccountPersonsCreated] = useState('0');

  useEffect(() => {
    getData();
    getDataStatistics();
  }, []);

  const getStatisticValue = (arr: any, find: string) => {
    return arr.find((e: any) => e.name === find).value;
  }

  const getDataStatistics = async () => {
    try {
      const response = await StatisticsRequest();
      setTotalLoanLended(NumbersOnly(getStatisticValue(response, 'Total Loan Lended'), true));
      setTotalAccountPersonsCreated(NumbersOnly(getStatisticValue(response, 'Total Account Persons Created')));
    } catch (error: any) {
      const errorMessage = error.toString();
      Alert({ title: 'Ops!', text: errorMessage });
    }
  }

  const getData = async() => {
    const btn = [{ text: 'Tentar novamente', onPress: () => getData() }];
    try {
      const addresseeResponse = await AddresseeRequest();
      setName(addresseeResponse.name);
      const personResponse = await PersonRequest();
      console.log(personResponse);
      setCpf(personResponse.cpf);
      setEmail(personResponse.email);
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.toString();
      Alert({ title: 'Ops!', text: errorMessage, button: btn });
    }
  }

  const logout = () => {
    Alert({
      title: 'Sair', text: 'Tem certeza que deseja sair?', button: [
        {
          text: 'Sair',
          onPress: () => {
            AsyncStorage.clear();
            navigation.navigate('Login');
          }
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ]
    })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <GradientHeader name={name} cpf={cpf} email={email} data1={totalAccountPersonsCreated} data2={CurrencyFormat(totalLoanLended)} />
        <View style={styles.buttonArea}>
          <ButtonProfile onPress={() => navigation.navigate('Security')} title="Segurança" >Troque a senha da sua conta</ButtonProfile>
          <Button color="secondary" onPress={logout}>Sair</Button>
        </View>
      </View>
    </ScrollView>
  );
}