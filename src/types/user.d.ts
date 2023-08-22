interface IUser {
  id: string;
  name?: string;
  email: string;
  avatar?: string;
  role: 'USER' | 'ADMIN';
  refreshToken: string;
  status: 'UNVERIFIED' | 'ACTIVE' | 'DELETED';
}
