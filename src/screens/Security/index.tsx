import React, { useState } from 'react';
import styles from './styles';
import { ScrollView, Text, View } from 'react-native';
import { Button, InputMask, Spacer, Alert, Loading } from 'components/index';
import {Global} from 'constants/index';
import { ChangePasswordRequest } from 'services/requests/profile';
import { RootTabScreenProps } from 'types';

export default function SecurityScreen({ navigation }: RootTabScreenProps<'Security'>) {

  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  const registerLoan = async () => {
    if (newPassword === newPassword2) {
      try {
        setLoading(true);
        const response = await ChangePasswordRequest({
          newpassword: newPassword,
          oldpassword: oldPassword
        });
        console.log(response);
        if (response?.mensagem) {
          Alert({ title: 'Sucesso', text: 'Sua senha foi alterada.' })
          navigation.goBack();
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
    } else {
      Alert({ title: 'Ops!', text: 'As novas senhas devem ser iguais.' });
    }
  }

  return (
    <>
      {loading && <Loading />}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        <View style={Global.labelBox}>
          <Text style={Global.label}>Senha antiga</Text>
        </View>
        <InputMask placeholderText="Digite a senha antiga" value={oldPassword} changeText={(text: string) => setOldPassword(text)} password={true} />

        <View style={Global.labelBox}>
        <Text style={Global.label}>Nova senha</Text>
        </View>
        <InputMask placeholderText="Digite a nova senha" value={newPassword} changeText={(text: string) => setNewPassword(text)} password={true} />

        <View style={Global.labelBox}>
          <Text style={Global.label}>Repetir nova senha</Text>
        </View>
        <InputMask placeholderText="Digite novamente a nova senha" value={newPassword2} changeText={(text: string) => setNewPassword2(text)} password={true} />

        <Button color="secondary" onPress={() => registerLoan()}>Alterar Senha</Button>
        <Spacer />

      </ScrollView>
    </>
  );
}