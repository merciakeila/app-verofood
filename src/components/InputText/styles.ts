import { StyleSheet } from 'react-native';
import {Global, Colors} from 'constants/index';

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        borderRadius: 8,
        marginVertical: 0,
        marginTop: 20,
        width: '80%',
        backgroundColor: Colors.white,
        textAlign: 'left',
        paddingLeft: 20,
        ...Global.shadow
      }
});

export default styles;