interface ILogin {
  email: string;
  password: string;
}
interface IRegister extends ILogin {
  name?: string;
  rePassword: typeof password;
}
