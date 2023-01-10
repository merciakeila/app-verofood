import { StyleSheet } from 'react-native';
import {Colors, Global} from 'constants/index';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        ...Global.shadow,
        width: '100%',
        paddingTop: 50
    },
    cardInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: 60,
        marginHorizontal: '5%',
        backgroundColor: '#fff',
        borderRadius: 8,
        ...Global.shadow
    },
    fontStatistics: {
        fontWeight: 'bold',
        fontSize: 12
    },
    fontDescription: {
        color: 'gray',
        fontSize: 12
    },
    imageFrame: { 
        width: 180, 
        height: 180, 
        borderRadius: 90, 
        ...Global.shadow 
    },
    img: { 
        width: 180, 
        height: 180, 
        borderRadius: 90,
        resizeMode: 'cover'
    },
    statisticsBox: { 
        flexDirection: 'row', 
        marginTop: 35, 
        position: 'absolute', 
        alignSelf: 'center',
        top: 290 
    },
    personBox: { 
        width: '100%', 
        paddingTop: 15, 
        alignItems: 'center', 
        marginBottom: 20 
    },
    cpfText: { 
        fontSize: 12, 
        color: Colors.white,
        fontWeight: 'bold'
    },
    emailText: { 
        fontSize: 14, 
        color: Colors.white 
    },
    nameText: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: Colors.white
    },
    imageContainer: { 
        flexDirection: 'row', 
        padding: 0, 
        alignSelf: 'center',
    }
})

export default styles;