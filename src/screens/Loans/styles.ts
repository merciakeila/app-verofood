import { StyleSheet } from 'react-native';
import { Colors, Global } from 'constants/index';

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  dropDownArea: {
    minHeight: 300, 
    position: 'absolute', 
    width: '100%', 
    height: 50, 
    top: 70
  },
  dropDown: {
    backgroundColor: Colors.white,
    ...Global.shadow,
    borderWidth: 0,
    height: 50,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0
  },
  dropDownContainer: {
    ...Global.shadow,
    borderWidth: 0
  },
  dropDownText: {
    textAlign: 'center'
  },
  notFound: {
    width: '100%',
    marginTop: 60,
    alignItems: 'center'
  },
  textNotFound: {
    fontSize: 16
  }
});

export default styles;