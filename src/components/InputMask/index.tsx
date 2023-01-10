import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { TextInput } from 'react-native';
import styles from './styles';

interface IInputMask {
    changeText: any,
    mask?: any,
    value: string,
    placeholderTextColor?: any,
    placeholderText: string,
    password?: boolean,
    numeric?: boolean,
    width?: string
}

const InputMask = ({ changeText, value, placeholderText, placeholderTextColor, mask, password, numeric, width }: IInputMask) => {

    function change(text: string) {
        changeText(text);
    }

    let options = {};

    if (mask == 'cel-phone') {
        options = {
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
        }
    }
    if (mask == 'datetime') {
        options = {
            format: 'DD/MM/YYYY'
        }
    }
    if (mask == 'money') {
        options = {
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
        }
    }

    if (mask) {
        return (
            <TextInputMask
                type={mask}
                value={value}
                options={options}
                onChangeText={text => change(text)}
                style={[styles.textInput, width ? {width:width} : {}]}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholderText}
                secureTextEntry={password}
            />
        )
    } else {
        return (
            <TextInput
                value={value}
                onChangeText={text => change(text)}
                style={[styles.textInput, width ? {width:width} : {}]}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholderText}
                secureTextEntry={password}
                keyboardType={numeric ? 'numeric' : 'default'}
            />
        )
    }

}

export default InputMask;