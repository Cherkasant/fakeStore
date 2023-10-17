import React, { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../Redux/Reducers/authReducer';
import { PathNames } from '../../Pages/Router/Router';
import { redirect } from 'react-router-dom';
import { TOKEN_KEY } from '../../Redux/utils/api';

type createContextType = {
  token: string | null;
  setTokenHandler: (newToken: any) => void;
};

const AuthContext = createContext<createContextType>({
  token: null,
  setTokenHandler: () => {}
});

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
  const setTokenHandler = (newToken: any) => {
    setToken(newToken);
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      dispatch(setLoggedIn(true));
      redirect(PathNames.Catalog);
    }
  }, [token]);
  const contextValue = useMemo(
    () => ({
      token,
      setTokenHandler
    }),
    [token]
  );
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
