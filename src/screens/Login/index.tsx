import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { Colors } from 'constants/index';
import { RootTabScreenProps } from 'types';
import styles from './styles';
import { GradientBackground, InputText, InputMask, Button, Alert, Loading } from 'components/index';
import { LoginRequest } from 'services/requests/login';
import { NumbersOnly } from 'utils/helper';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const tryLogin = async () => {
    try {
      setLoading(true);
      const response = await LoginRequest({ cpf: NumbersOnly(cpf), password });
      console.log(response);
      if (response?.success) {
        navigation.navigate('Member');
      } else {
        Alert({ title: 'Ops!', text: response?.mensagem });
      }
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.toString();
      Alert({ title: 'Ops!', text: errorMessage });
    } finally {
      setLoading(false);
      //navigation.navigate('Member');
    }

  }

  return (
    <>
      {loading && <Loading />}
      <GradientBackground>
        <View style={styles.container}>

          <Image style={styles.logo} source={require('images/logo.png')} />

          <InputMask placeholderText="CPF" placeholderTextColor={Colors.primary} value={cpf} changeText={(text: string) => setCpf(text)} mask="cpf" width="80%" />
          <InputText placeholderText="Senha" placeholderTextColor={Colors.primary} changeText={(text: string) => setPassword(text)} password />

          <Button onPress={tryLogin}>Entrar</Button>

          <TouchableOpacity>
            <Text style={styles.registerText}>QUERO ME CADASTRAR</Text>
          </TouchableOpacity>

        </View>
      </GradientBackground>
    </>
  );
}