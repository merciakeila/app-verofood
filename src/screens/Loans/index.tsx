import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles';
import { Card, Loading, Alert, CustomHeader, Spacer } from 'components/index';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, View, RefreshControl, Text } from 'react-native';
import { LenderLoanListRequest } from 'services/requests/loan';
import { Wait } from 'utils/helper';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from 'constants/index';

export default function LoansScreen() {

  const [loading, setLoading] = useState(true);
  const [content, setContent]: any = useState(undefined);
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState('all');
  const [open, setOpen] = useState(false);
  const [listEmpty, setListEmpty]: any = useState(false);
  const [items, setItems] = useState([
    { label: 'Todos', value: 'all' },
    { label: 'Em andamento', value: 'andamento' },
    { label: 'Finalizados', value: 'finalizados' }
  ]);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    Wait(5000).then(() => setRefreshing(false));
  }, []);

  const getData = async () => {
    const btn = [
      { text: 'Tentar novamente', onPress: () => getData() },
      { text: 'Cancelar', style: 'cancel' }
    ];
    try {
      const response = await LenderLoanListRequest({});
      if (response?.content) {
        setContent(response?.content);
      } else {
        Alert({ title: 'Ops!', text: response?.mensagem, button: btn });
      }
    } catch (error: any) {
      const errorMessage = error.toString();
      Alert({ title: 'Ops!', text: errorMessage, button: btn });
    } finally {
      setLoading(false);
      setRefreshing(false);
      setValue('all');
    }
  }

  const setStatus = async (item: any) => {
    getNumberOfItems(item);
  }

  const getNumberOfItems = (filter?: string) => {
    let count = 0;
    content.map((data: any) => {
      count++;
      if (filter === 'andamento' && data?.repaymentDate) {
        count--;
      }
      if (filter === 'concluido' && !data?.repaymentDate) {
        count--;
      }
    })
    count > 0 ? setListEmpty(false) : setListEmpty(true);
  }

  return (
    <>
      {loading && <Loading transparent={true} text="Carregando..." />}
      <CustomHeader>Lista de empréstimos</CustomHeader>
      <View style={styles.dropDownArea}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(value: any) => setStatus(value)}
          placeholder="Selecione o status do empréstimo"
          style={styles.dropDown}
          dropDownContainerStyle={styles.dropDownContainer}
          textStyle={styles.dropDownText}
        />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.container}>
          {!loading && content.map((data: any, index: any) =>
            <Card
              key={index}
              borrowerCpf={data?.borrowerCpf}
              borrowerName={data?.borrowerName}
              amountAgreedPayment={data?.amountAgreedPayment}
              annualPercentageRate={data?.annualPercentageRate}
              loanDate={data?.loanDate}
              repaymentDate={data?.repaymentDate}
              deadlineAgreedDate={data?.deadlineAgreedDate}
              totalInstallment={data?.totalInstallment}
              filter={value ? value : 'all'}
            />
          )}
          {!loading && listEmpty && (
            <View style={styles.notFound}>
              <MaterialIcons name="search-off" size={70} color={Colors.primary} />
              <Text style={styles.textNotFound}>Sem resultados para busca.</Text>
            </View>
          )}
        </View>
        <Spacer />
      </ScrollView>
    </>
  );
}