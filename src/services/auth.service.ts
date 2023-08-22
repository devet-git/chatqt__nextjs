import api from '@/core/api';
import axiosRequestHanlder from '@/handlers/api-request.handler';

class Service {
  public async login(data: ILogin) {
    return await axiosRequestHanlder(() => api.post('auth/login', data));
  }
  public async register(data: IRegister) {
    return await axiosRequestHanlder(() => api.post('auth/register', data));
  }
}
const AuthService = new Service();
export default AuthService;
