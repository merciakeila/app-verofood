import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles';
import { StatisticsRequest } from 'services/requests/statistics';
import { Alert, CardStatistics } from 'components/index';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import { Wait, CurrencyFormat, NumbersOnly } from 'utils/helper';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'constants/index';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  
  const [refreshing, setRefreshing] = useState(false);
  const [totalLoanLended, setTotalLoanLended] = useState('Carregando...');
  const [totalLoanExpectedReturn, setTotalLoanExpectedReturn] = useState('Carregando...');
  const [totalLoanReturned, setTotalLoanReturned] = useState('Carregando...');
  const [totalAccountPersonsCreated, setTotalAccountPersonsCreated] = useState('0');
  const [totalLoanRequests, setTotalLoanRequests] = useState('Carregando...');

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    Wait(5000).then(() => setRefreshing(false));
  }, []);

  const getStatisticValue = (arr: any, find: string) => {
    return arr.find((e: any) => e.name === find).value;
  }

  const getData = async () => {
    const btn = [{ text: 'Tentar novamente', onPress: () => getData() }];
    try {
      const response = await StatisticsRequest();
      setTotalLoanLended(NumbersOnly(getStatisticValue(response, 'Total Loan Lended'), true));
      setTotalLoanExpectedReturn(NumbersOnly(getStatisticValue(response, 'Total Loan Expected Return'), true));
      setTotalLoanReturned(NumbersOnly(getStatisticValue(response, 'Total Loan Returned'), true));
      setTotalAccountPersonsCreated(NumbersOnly(getStatisticValue(response, 'Total Account Persons Created')));
      setTotalLoanRequests(NumbersOnly(getStatisticValue(response, 'Total Loan Requests'), true));
      
      console.log(response);
    } catch (error: any) {
      const errorMessage = error.toString();
      Alert({ title: 'Ops!', text: errorMessage, button: btn });
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.container}>
        <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} style={styles.gradientContainer}>
          <Text style={styles.mainTitle}>Total Emprestado</Text>
          <View style={styles.walletBox}>
            <Ionicons name="wallet-outline" size={30} color={Colors.white} />
            <Text style={styles.totalLoanLended}>{CurrencyFormat(totalLoanLended)}</Text>
          </View>
        </LinearGradient>
        <View style={styles.card}>
          <Text style={styles.totalLoanExpectedReturn}>{CurrencyFormat(totalLoanExpectedReturn)}</Text>
          <Text style={styles.cardSubtext}>Valor total esperado</Text>
        </View>
        <View style={styles.cardsContainer}>
          <CardStatistics icon="trophy" title={CurrencyFormat(totalLoanReturned)}>Valor total arrecadado</CardStatistics>
          <CardStatistics icon="drawer" title={CurrencyFormat(totalLoanRequests)}>Valor total de pedidos</CardStatistics>
          <CardStatistics icon="people" title={totalAccountPersonsCreated}>Total de usuários cadastrados</CardStatistics>
        </View>
      </View>
    </ScrollView>
  );
}