import { StyleSheet } from 'react-native';
import { Global } from 'constants/index';

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        borderRadius: 8,
        marginVertical: 0,
        width: '90%',
        backgroundColor: '#fff',
        textAlign: 'left',
        paddingLeft: 20,
        alignSelf: 'center',
        marginTop: 20,
        ...Global.shadow
    }
});

export default styles;