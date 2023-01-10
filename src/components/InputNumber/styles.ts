import { StyleSheet } from 'react-native';
import { Global, Colors } from 'constants/index';

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: 8,
    marginVertical: 0,
    width: '90%',
    backgroundColor: '#fff',
    textAlign: 'left',
    paddingLeft: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    ...Global.shadow
  },
  left: {
    alignSelf: 'flex-start',
    justifyContent: 'center'
  },
  right: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    paddingRight: 20
  },
  button: {
    paddingLeft: 5
  }
});

export default styles;