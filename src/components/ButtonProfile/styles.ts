import { StyleSheet } from 'react-native';
import { Global, Colors } from 'constants/index';

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 15,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...Global.shadow
  },
  title: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16
  },
  left: {
    width: '80%',
    paddingLeft: 10
  },
  right: {
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
});

export default styles;