import { StyleSheet } from 'react-native';
import { Colors, Global } from 'constants/index';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      alignSelf: 'center',
      fontSize: 18,
      marginTop: 20
    },
    value: {
      alignSelf: 'center',
      fontSize: 13,
      fontWeight: 'bold'
    },
    installmentValue: {
      ...Global.shadow,
      width: '70%',
      backgroundColor: Colors.white,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      marginBottom: -40,
      alignSelf: 'center',
      padding: 8,
      marginTop: 30
    },
    label: {
      marginLeft: 10,
      alignSelf: 'flex-start',
      color: Colors.white,
      fontSize: 12,
      fontWeight: 'bold'
    },
    labelBox: {
      marginBottom: -20,
      backgroundColor: Colors.gray,
      ...Global.shadow,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      padding: 5,
      width: '60%',
      left: '10%',
      marginTop: 20
    }
  });

export default styles;