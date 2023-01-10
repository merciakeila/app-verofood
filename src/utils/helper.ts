export function CurrencyFormat(amount: any, decimal = ",", thousands = ".") {
    try {
        let decimalCount = Math.abs(2);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return 'R$' + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - parseFloat(i)).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

export function ValidateCpf(cpf: string) {
    let strCPF = cpf.replace(/[^a-zA-Z0-9]/g, '')
    console.log(strCPF)
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    return Resto == parseInt(strCPF.substring(10, 11));
}

export function SortArray(items: any, field: string, type = 'ASC') {
    if (type === 'DESC') {
        items.sort(function (a: any, b: any) {
            if (a[field] < b[field]) {
                return 1;
            }
            if (a[field] > b[field]) {
                return -1;
            }
            return 0;
        });
    } else {
        items.sort(function (a: any, b: any) {
            if (a[field] > b[field]) {
                return 1;
            }
            if (a[field] < b[field]) {
                return -1;
            }
            return 0;
        });
    }
    return items;
}

export function FormatDate(date: string) {
    const arr = date.split('/');
    return arr[2] + '-' + arr[1] + '-' + arr[0] + 'T00:00:00.997Z';
}

export const Wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

export function RemoveTimeFromDate(date: string) {
    const finalDate = date.split(" ");
    return finalDate[0];
}

export function FormatCpf(cpf: string) {
    return cpf
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

export function NumbersOnly(text: string, extraZero?: boolean) {
    if(extraZero){
        const newText = parseInt(text.replace(/[^0-9]/g, ''));
        return (newText/100).toString();
    }
    return text.replace(/[^0-9]/g, '');
}