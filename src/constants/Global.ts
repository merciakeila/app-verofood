import { StyleSheet } from 'react-native';
import Colors from './Colors';

function ElevationShadow(elevation: number) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const SHADOW_SIZE = 8;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20
    },
    textInput: {
        height: 50,
        borderRadius: 10,
        marginHorizontal: 0,
        marginTop: 20,
        paddingLeft: 60,
        marginVertical: 5,
        backgroundColor: Colors.background,
        fontStyle: 'italic',
        fontSize: 18,
    },
    label: {
        marginLeft: 10,
        alignSelf: 'flex-start',
        color: Colors.white,
        fontSize: 12,
        fontWeight: 'bold'
    },
    labelBox: {
        marginBottom: -20,
        backgroundColor: Colors.gray,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 5,
        width: '60%',
        left: '10%',
        marginTop: 20,
        elevation: SHADOW_SIZE,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * SHADOW_SIZE },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * SHADOW_SIZE
    },
    shadow: ElevationShadow(SHADOW_SIZE)
});