import React, { useEffect, useState } from 'react';
import styles from './styles';
import { ScrollView, Text, View } from 'react-native';
import { Button, InputMask, InputNumber, Spacer, Alert, Loading, CardTitle } from 'components/index';
import { AddressRequest, RegisterLoanRequest } from 'services/requests/loan';
import { FormatDate, CurrencyFormat, NumbersOnly } from 'utils/helper';
import { RootTabScreenProps } from 'types';

export default function LendNewUserScreen({ navigation }: RootTabScreenProps<'LendNewUser'>) {

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [value, setValue] = useState('');
  const [installments, setInstallments] = useState(1);
  const [date, setDate] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [installmentValue, setInstallmentlValue] = useState('');
  let percentage = 1.1;

  const requestAddress = async (zipcode: string) => {
    setZipcode(zipcode);
    if (zipcode.length > 8) {
      const addressObj = await AddressRequest(zipcode);
      setDistrict(addressObj.bairro);
      setAddress(addressObj.logradouro);
    }
  }

  const registerLoan = async () => {
    try {
      setLoading(true);
      const response = await RegisterLoanRequest({
        bairro: district,
        cep: zipcode.replace('-', ''),
        cpf: NumbersOnly(cpf),
        dtPagamentoParcelaInicial: FormatDate(date),
        email: email,
        endereco: address,
        nomeCompleto: fullName,
        numero: number,
        telefone: NumbersOnly(phone),
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

        {step === 1 &&
          <>
            <CardTitle icon="user-follow">Dados Pessoais</CardTitle>

            <View style={styles.labelBox}>
              <Text style={styles.label}>Nome do cliente</Text>
            </View>
            <InputMask placeholderText="Nome completo" value={fullName} changeText={(text: string) => setFullName(text)} />

            <View style={styles.labelBox}>
              <Text style={styles.label}>CPF do cliente</Text>
            </View>
            <InputMask placeholderText="CPF" value={cpf} changeText={(text: string) => setCpf(text)} mask="cpf" />

            <View style={styles.labelBox}>
              <Text style={styles.label}>Email do cliente</Text>
            </View>
            <InputMask placeholderText="Email" value={email} changeText={(text: string) => setEmail(text)} />

            <View style={styles.labelBox}>
              <Text style={styles.label}>Telefone do cliente</Text>
            </View>
            <InputMask placeholderText="Telefone" value={phone} changeText={(text: string) => setPhone(text)} mask="cel-phone" />

            <Button color="secondary" onPress={() => setStep(2)}>Próximo</Button>
          </>
        }

        {step === 2 &&
          <>

            <CardTitle icon="home">Dados Residenciais</CardTitle>

            <View style={styles.labelBox}>
              <Text style={styles.label}>CEP do cliente</Text>
            </View>
            <InputMask placeholderText="CEP" value={zipcode} changeText={(text: string) => requestAddress(text)} mask="zip-code" />

            <View style={styles.labelBox}>
              <Text style={styles.label}>Bairro do cliente</Text>
            </View>
            <InputMask placeholderText="Bairro" value={district} changeText={(text: string) => setDistrict(text)} />

            <View style={styles.labelBox}>
              <Text style={styles.label}>Endereço do cliente</Text>
            </View>
            <InputMask placeholderText="Endereço" value={address} changeText={(text: string) => setAddress(text)} />

            <View style={styles.labelBox}>
              <Text style={styles.label}>Número do Endereço do cliente</Text>
            </View>
            <InputMask placeholderText="Número" value={number} changeText={(text: string) => setNumber(text)} />

            <Button color="secondary" onPress={() => setStep(3)} marginBottom={-25}>Próximo</Button>
            <Button onPress={() => setStep(1)}>Anterior</Button>
          </>
        }

        {step === 3 &&
          <>

            <CardTitle icon="wallet">Dados do Empréstimo</CardTitle>

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

            <Button color="secondary" onPress={() => registerLoan()} marginBottom={-25}>Cadastrar</Button>
            <Button onPress={() => setStep(2)}>Anterior</Button>
          </>
        }

        <Spacer />

      </ScrollView>
    </>
  );
}