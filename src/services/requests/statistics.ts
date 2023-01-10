import { api } from '../api';
import { StatisticsInfo } from '../endpoints';


export const StatisticsRequest = async () => {
  try {
    const response = await api.get(StatisticsInfo, {});
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};