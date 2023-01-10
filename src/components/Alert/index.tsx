import { Alert } from 'react-native';

interface IAlert {
    title: string,
    text: string,
    button?: any | undefined
}

const createAlert = ({ title, text, button }: IAlert) => Alert.alert(title, text, button);

export default createAlert;