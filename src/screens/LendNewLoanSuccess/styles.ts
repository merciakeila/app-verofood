import { StyleSheet } from 'react-native';
import {Colors} from 'constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 50
},
success: {
    fontSize: 24,
    color: Colors.success,
    marginVertical: 20,
    alignSelf: 'center',
    textAlign: 'center'
},
msg: {
    alignSelf: 'center',
    color: Colors.darkGray,
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    marginTop: 32,
    marginBottom: 30
}
  });

export default styles;