import { EApi } from '@/constants/api.const';
import axios, { AxiosResponse } from 'axios';

export /**
 * Handle response data format when use Axios to send request
 * Example await  axiosRequestHanlder(() => axios.post('login', loginData))
 *  @date 8/22/2023 - 10:38:03 AM
 *
 * @async
 * @template T
 * @param {() => Promise<AxiosResponse<T>>} func
 * @returns {Promise<T | undefined>}
 */
const axiosRequestHanlder = async <T>(
  func: () => Promise<AxiosResponse<T>>
): Promise<T | undefined> => {
  try {
    const res = await func();
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
  }
};

export default axiosRequestHanlder;
