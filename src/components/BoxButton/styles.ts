import { StyleSheet } from 'react-native';
import { Colors, Global } from 'constants/index';

const styles = StyleSheet.create({
  box: {
      borderRadius: 8,
      backgroundColor: Colors.white,
      paddingTop: 24,
      paddingBottom: 24,
      width: '100%',
      alignItems: 'center',
      ...Global.shadow
  },
  text: {
      color: Colors.primary,
      fontSize: 16,
      fontWeight: '400',
      marginTop: 10
  },
  pressable: {
      width: '90%',
      maxWidth: 500,
      alignSelf: 'center',
      alignItems: 'center',
      marginVertical: 20
  }
});

export default styles;