import { StyleSheet } from 'react-native';
import { Global, Colors } from 'constants/index';

const styles = StyleSheet.create({
  roundBtnText: {
    fontSize: 18,
    marginTop: 3
  },
  roundBtn: {
    borderRadius: 8,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    ...Global.shadow
  }
});

export default styles;