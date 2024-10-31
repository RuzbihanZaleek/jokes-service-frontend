interface AuthContextType {
  isAuthorized: boolean;
  login: (token: string) => void;
  logout: () => void;
}
