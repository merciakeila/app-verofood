import {api} from '../api';
import {Login} from '../endpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ILogin {
    cpf: string,
    password: string
}

interface IStoreData {
  key: string,
  value: any,
  cpf: string
}

const storeData = async ({key, value, cpf}: IStoreData) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    await AsyncStorage.setItem('cpf', cpf);
  } catch (e) {
    console.log(e);
  }
}

// 45256168304
// 12345

export const LoginRequest = async ({cpf, password}: ILogin) => {
  const response = await api.post(Login, {login: cpf, senha: password});
  console.log(response?.data);
  if(response?.data?.jwt?.token){
    storeData({key: 'token', value: response?.data?.jwt, cpf});
    return {success: true}
  }else{
    return response?.data;
  }
};

export const GetCpf = async () => {
  try {
    const cpf = await AsyncStorage.getItem('cpf');
    return cpf;
  } catch (e) {
    console.log(e);
  }
}