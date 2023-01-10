import { StyleSheet } from 'react-native';
import {Layout, Global, Colors} from 'constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.window.width
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 50
  },
  registerText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 16
  },
  logo: {
    height: 90,
    resizeMode: 'contain',
    marginBottom: 32
  }
});

export default styles;