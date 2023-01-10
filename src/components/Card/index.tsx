import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { Colors } from 'constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import {CurrencyFormat, RemoveTimeFromDate} from 'utils/helper';
import { FormatCpf } from 'utils/helper';

interface ICard {
    onPress?: () => void,
    amountAgreedPayment: string,
    annualPercentageRate?: string,
    loanDate?: string,
    repaymentDate?: string,
    deadlineAgreedDate?: string,
    totalInstallment?: string,
    borrowerName?: string,
    borrowerCpf?: string,
    filter?: string
}

const Card = ({ amountAgreedPayment, annualPercentageRate, loanDate, repaymentDate, deadlineAgreedDate, totalInstallment, onPress, borrowerName, borrowerCpf, filter }: ICard) => {
    let status = '';
    repaymentDate ? status = 'Concluído' : status = 'Em andamento';
    if(filter==='andamento' && repaymentDate) return (<></>);
    if(filter==='concluido' && !repaymentDate) return (<></>);
    return (
        <>
            <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} start={[0, 0]} end={[1, 0]} style={styles.box}>
                <Text style={styles.title}>{borrowerName}</Text>
                {borrowerCpf && <Text style={styles.subtitle}>{FormatCpf(borrowerCpf)}</Text>}
                <View style={styles.status}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.content}>
                    <View style={styles.left}>
                        <Text style={styles.label}>Valor devido:</Text>
                        <Text style={styles.label}>Porcentagem:</Text>
                        <Text style={styles.label}>Data do empréstimo:</Text>
                        {repaymentDate && <Text style={styles.label}>Data do pagamento:</Text>}
                        <Text style={styles.label}>Prazo:</Text>
                        <Text style={styles.label}>Total de parcelas:</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.text}>{CurrencyFormat(parseInt(amountAgreedPayment.toString())/100)}</Text>
                        <Text style={styles.text}>{annualPercentageRate}%</Text>
                        {loanDate && <Text style={styles.text}>{RemoveTimeFromDate(loanDate)}</Text>}
                        {repaymentDate && <Text style={styles.text}>{RemoveTimeFromDate(repaymentDate)}</Text>}
                        {deadlineAgreedDate && <Text style={styles.text}>{RemoveTimeFromDate(deadlineAgreedDate)}</Text>}
                        <Text style={styles.text}>{totalInstallment} parcelas</Text>
                    </View>
                </View>
            </LinearGradient>
        <Pressable onPress={onPress} style={styles.pressable}>
            <Text>Ver mais</Text>
        </Pressable>
        </>
    );

}

export default Card;