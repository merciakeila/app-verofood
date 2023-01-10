import { StyleSheet } from 'react-native';
import {Colors, Global} from 'constants/index';

const styles = StyleSheet.create({
    container: {
        ...Global.shadow,
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignSelf: 'center',
        marginBottom: 0,
        padding: 10,
        flexDirection: 'row'
    }
})

export default styles;