import { api } from '../api';
import { ChangePassword } from '../endpoints';
import { GetCpf } from './login';

interface IResetPassword {
  oldpassword: string,
  newpassword: string
}

export const ChangePasswordRequest = async ({ oldpassword, newpassword }: IResetPassword) => {
  const LenderCpf = await GetCpf();
  const response = await api.patch(ChangePassword(LenderCpf, oldpassword, newpassword), {});
  return response?.data;
};