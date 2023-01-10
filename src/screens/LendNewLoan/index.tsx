import React, { useEffect, useState } from 'react';
import styles from './styles';
import { ScrollView, Text, View } from 'react-native';
import { Button, InputMask, InputNumber, Spacer, Alert, Loading, CardTitle } from 'components/index';
import { RegisterLoanOnlyRequest } from 'services/requests/loan';
import { FormatDate, CurrencyFormat, NumbersOnly } from 'utils/helper';
import { RootTabScreenProps } from 'types';

export default function LendNewLoanScreen({ navigation }: RootTabScreenProps<'LendNewUser'>) {

  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');
  const [value, setValue] = useState('');
  const [installments, setInstallments] = useState(1);
  const [date, setDate] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [installmentValue, setInstallmentlValue] = useState('');
  let percentage = 1.1;

  const registerLoan = async () => {
    try {
      setLoading(true);
      const response = await RegisterLoanOnlyRequest({
        cpf: NumbersOnly(cpf),
        dtPagamentoParcelaInicial: FormatDate(date),
        qtdParcela: installments,
        valorAReceber: NumbersOnly(finalValue),
        valorEmprestimo: NumbersOnly(value)
      });
      console.log(response);
      if (response?.mensagem) {
        navigation.navigate('LendNewLoanSuccess');
      } else {
        Alert({ title: 'Ops!', text: response?.mensagem });
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.toString();
      Alert({ title: 'Ops!', text: errorMessage });
    } finally {
      setLoading(false);
    }
  }

  const setLoanInstallmentals = (text: string) => {
    if (!value) {
      Alert({ title: 'Ops!', text: 'Primeiro digite o valor do empréstimo.' });
    } else {
      if (!text) text = '1';
      setInstallments(parseInt(text));
      const valueNumber = parseFloat(value.replace(/[^0-9]/g, ''));
      const finalValue = (valueNumber * percentage).toFixed(0).toString();
      setFinalValue(finalValue);
      setInstallmentlValue(((parseInt(finalValue) / 100) / parseInt(text)).toString());
    }
  }

  const setLoanFinalValue = (text: string) => {
    setFinalValue(text);
    const installmentLoanValue = ((parseInt(text.replace(/[^0-9]/g, '')) / 100) / installments)
    setInstallmentlValue(installmentLoanValue.toString());
  }

  const setLoanValue = (text: string) => {
    setValue(text);
    if (installments) {
      const valueNumber = parseFloat(text.replace(/[^0-9]/g, ''));
      const finalValue = (valueNumber * percentage).toFixed(0).toString();
      setFinalValue(finalValue);
      setInstallmentlValue(((parseInt(finalValue) / 100) / installments).toString());
    }
  }

  return (
    <>
      {loading && <Loading transparent={true} />}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <CardTitle icon="wallet">Dados do Empréstimo</CardTitle>

        <View style={styles.labelBox}>
          <Text style={styles.label}>CPF do cliente</Text>
        </View>
        <InputMask placeholderText="CPF" value={cpf} changeText={(text: string) => setCpf(text)} mask="cpf" />

        <View style={styles.labelBox}>
          <Text style={styles.label}>Valor do empréstimo</Text>
        </View>
        <InputMask placeholderText="Valor" value={value} changeText={(text: string) => setLoanValue(text)} mask="money" />

        <View style={styles.labelBox}>
          <Text style={styles.label}>Quantidade de parcelas</Text>
        </View>
        <InputNumber changeText={(text: string) => setLoanInstallmentals(text)} />

        <View style={styles.labelBox}>
          <Text style={styles.label}>Data do primeiro pagamento</Text>
        </View>
        <InputMask placeholderText="Data inicial" value={date} changeText={(text: string) => setDate(text)} mask="datetime" />

        <View style={styles.labelBox}>
          <Text style={styles.label}>Valor a receber</Text>
        </View>
        <InputMask placeholderText="Valor total" value={finalValue} changeText={(text: string) => setLoanFinalValue(text)} mask="money" />

        <View style={styles.installmentValue}>
          <Text style={styles.value}>Valor da parcela: {CurrencyFormat(installmentValue)}</Text>
        </View>

        <Button color="secondary" onPress={() => registerLoan()}>Cadastrar</Button>
        <Spacer />

      </ScrollView>
    </>
  );
}