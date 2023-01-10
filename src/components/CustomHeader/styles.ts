import { StyleSheet } from 'react-native';
import {Colors, Global} from 'constants/index';

const styles = StyleSheet.create({
    container: {
        ...Global.shadow,
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25
    },
    text: {
        color: Colors.white,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles;