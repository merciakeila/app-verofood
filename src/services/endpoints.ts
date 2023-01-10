export const Login: string = 'v1/login';
export const LoanPercentage: string = 'v1/loan/loanPercentage';
export const NewLoanNewUser: string = 'v1/loan/newLoanNewUser';
export const NewLoan: string = 'v1/loan/newLoan';
export const LenderLoanList = (cpf: any, page: string, size: string) => `v1/loan/lender/${cpf}/loans?page=${page}&size=${size}`;
export const PersonInfo = (cpf: any) => `v1/person/${cpf}/CPF`;
export const AddresseeInfo = (cpf: any) => `v1/addressee/${cpf}`;
export const StatisticsInfo: string = 'v1/statistics/all';
export const ChangePassword = (cpf: any, oldpassword: string, newpassword: string) => `v1/person/${cpf}/${newpassword}/${oldpassword}`;