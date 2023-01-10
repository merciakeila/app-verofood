import { StyleSheet } from 'react-native';
import { Colors, Global } from 'constants/index';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    gradientContainer: {
      height: 170,
      width:'100%',
      padding: 20,
      paddingTop: 50
    },
    mainTitle: {
      color: Colors.white,
      fontSize: 16
    },
    walletBox: {
      flexDirection: 'row',
      paddingVertical: 5
    },
    totalLoanLended: {
      fontSize: 22,
      color: Colors.white,
      marginLeft: 10,
      fontWeight: 'bold'
    },
    card: {
      width: '80%',
      alignSelf: 'center',
      borderRadius: 5,
      ...Global.shadow,
      height: 80,
      backgroundColor: Colors.white,
      position: 'absolute',
      top: 130,
      zIndex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardsContainer: {
      marginTop: 60,
      width: '100%',
      padding: 20
    },
    totalLoanExpectedReturn: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      color: Colors.primary
    },
    cardSubtext: {
      fontSize: 14,
      marginTop: -3
    }
  });

export default styles;