import { StyleSheet } from 'react-native';
import { Colors, Global } from 'constants/index';

const styles = StyleSheet.create({
    box: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: Colors.white,
        alignItems: 'center',
        padding: 15,
        width: '90%',
        maxWidth: 500,
        alignSelf: 'center',
        marginTop: 20,
        ...Global.shadow
    },
    pressable: {
        backgroundColor: Colors.white,
        width: '90%',
        alignItems: 'center',
        padding: 5,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        ...Global.shadow
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.dark.text,
        alignSelf: 'flex-end'
    },
    left: {
        width: '50%'
    },
    right: {
        width: '50%'
    },
    label: {
        fontWeight: 'bold',
        color: Colors.background,
        fontSize: 12
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 15,
        marginBottom: 0,
        color: Colors.background
    },
    subtitle: {
        alignSelf: 'flex-start',
        fontSize: 11,
        marginBottom: 10,
        color: Colors.background,
        fontWeight: 'bold',
        marginTop: -5,
    },
    content: {
        flexDirection: 'row'
    },
    status: {
        position: 'absolute',
        right: 0,
        top: 20,
        width: 90,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 5,
        ...Global.shadow
    },
    statusText: {
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        marginTop: 0,
        marginBottom: 10
    }
});

export default styles;