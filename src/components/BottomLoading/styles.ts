import { StyleSheet } from 'react-native';
import { Colors } from 'constants/index';

const styles = StyleSheet.create({
    loading: {
        alignSelf: 'center',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        color: Colors.black,
        marginRight: 15,
        fontSize: 14
    }
});

export default styles;