import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Colors } from 'constants/index';
import { Feather } from '@expo/vector-icons';
import Alert from '../Alert';
import styles from './styles';

const InputNumber = (props: any) => {

    function change(action: string) {
        let newValue = 0;
        action === 'plus' ? newValue = value + 1 : newValue = value - 1;
        if(newValue > 0){
            setValue(newValue);
            props.changeText(newValue);
        }else{
            Alert({title: 'Ops!', text: 'O valor mínimo é 1.'})
        }
    }

    const [value, setValue] = useState(1);

    return (
        <View style={styles.textInput}>
            <View style={styles.left}>
                <Text>{value}</Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => change('minus')} style={styles.button}>
                    <Feather name="minus-square" size={34} color={Colors.gray} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => change('plus')} style={styles.button}>
                    <Feather name="plus-square" size={34} color={Colors.gray} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default InputNumber;