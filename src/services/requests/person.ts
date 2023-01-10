import { api } from '../api';
import { AddresseeInfo, PersonInfo } from '../endpoints';
import { GetCpf } from './login';


export const PersonRequest = async () => {
  const LenderCpf = await GetCpf();
  try {
    const response = await api.get(PersonInfo(LenderCpf), {});
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const AddresseeRequest = async () => {
  const LenderCpf = await GetCpf();
  try {
    const response = await api.get(AddresseeInfo(LenderCpf), {});
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};