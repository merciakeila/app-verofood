import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { RootTabScreenProps } from 'types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function AuthScreen({ navigation }: RootTabScreenProps<'Auth'>) {

  useEffect(() => {
    isValidSession();
  }, []);

  const isValidSession = async () => {
    const dateNow = new Date().getTime();
    const expirationDate = await getTokenExpirationDate();
    console.log('dateNow: ', new Date(dateNow));
    console.log('expirationDate: ', new Date(expirationDate));
    if (parseInt(expirationDate) > dateNow) {
      navigation.navigate('Member');
    } else {
      AsyncStorage.clear();
      navigation.navigate('Login');
    }
  }

  const getTokenExpirationDate = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      if (jsonValue) {
        return JSON.parse(jsonValue!).expirationDate;
      } else {
        return '0';
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ImageBackground source={require('images/splash.png')} resizeMode="cover" style={styles.image} />
  );

}