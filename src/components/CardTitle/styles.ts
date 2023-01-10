import { StyleSheet } from 'react-native';
import { Global, Colors } from 'constants/index';

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    backgroundColor: Colors.primary,
    padding: 15,
    width: '80%',
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...Global.shadow
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15
  },
});

export default styles;