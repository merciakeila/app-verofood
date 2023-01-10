import axios from "axios";
import { api } from '../api';
import { LoanPercentage, NewLoanNewUser, LenderLoanList, NewLoan } from '../endpoints';
import { GetCpf } from "./login";

const apiViaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  timeout: 10000,
});

interface IRegisterLoan {
  bairro: string,
  cep: string,
  cpf: string,
  dtPagamentoParcelaInicial: string,
  email: string,
  endereco: string,
  nomeCompleto: string,
  numero: string,
  telefone: string,
  qtdParcela: number,
  valorAReceber: string,
  valorEmprestimo: string
}

interface IRegisterLoanOnly {
  cpf: string,
  dtPagamentoParcelaInicial: string,
  qtdParcela: number,
  valorAReceber: string,
  valorEmprestimo: string
}

export const AddressRequest = async (zipcode: string) => {
  const response = await apiViaCep.get(`${zipcode}/json/`, {});
  return response?.data;
}

// Endpoint not being used yet
export const PercentageRequest = async () => {
  try {
    const response = await api.get(LoanPercentage, {});
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

export const RegisterLoanRequest = async ({ bairro, cep, cpf, dtPagamentoParcelaInicial, email, endereco, nomeCompleto, numero, telefone, qtdParcela, valorAReceber, valorEmprestimo }: IRegisterLoan) => {
  const LenderCpf = await GetCpf();
  const data = {
    bairro,
    cep,
    cpf,
    dtPagamentoParcelaInicial,
    email,
    endereco,
    lenderCpf: LenderCpf,
    nomeCompleto,
    numero,
    telefone,
    qtdParcela,
    valorAReceber,
    valorEmprestimo
  }
  console.log(data);
  const response = await api.post(NewLoanNewUser, data);
  return response?.data;
}

export const RegisterLoanOnlyRequest = async ({ cpf, dtPagamentoParcelaInicial, qtdParcela, valorAReceber, valorEmprestimo }: IRegisterLoanOnly) => {
  const LenderCpf = await GetCpf();
  const data = {
    cpf,
    dtPagamentoParcelaInicial,
    lenderCpf: LenderCpf,
    qtdParcela,
    valorAReceber,
    valorEmprestimo
  }
  const response = await api.post(NewLoan, data);
  return response?.data;
}

interface ILoanListRequest {
  page?: string,
  size?: string
}

export const LenderLoanListRequest = async ({page, size}: ILoanListRequest) => {
  const LenderCpf = await GetCpf();
  try {
    const response = await api.get(LenderLoanList(LenderCpf, page ? page : '0', size ? size : '30'), {});
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}