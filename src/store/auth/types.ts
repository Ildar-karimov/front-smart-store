export interface AuthState {
  user: User;
  isAuthorized: boolean;
}

export interface User {
  name: string;
  surname: string;
  email: string;
  roles: string[];
  id: number;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface RegistrationBody {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}