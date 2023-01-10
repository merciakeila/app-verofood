import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputText = (props: any) => {

    function change(text: string) {
        props.changeText(text);
    }

    return (
            <TextInput
                style={styles.textInput}
                placeholder={props.placeholderText}
                placeholderTextColor={props.placeholderTextColor}
                onChangeText={text => change(text)}
                secureTextEntry={props.password}
            />
    );
}

export default InputText;