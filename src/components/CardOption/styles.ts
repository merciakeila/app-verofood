import { StyleSheet } from 'react-native';
import { Global, Colors } from 'constants/index';

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 15,
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...Global.shadow
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  left: {
    width: '20%',
    paddingLeft: 10
  },
  middle: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: 10
  },
  right: {
    width: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  description: {
    fontSize: 13,
    color: '#000'
  }
});

export default styles;