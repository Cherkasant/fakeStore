import { RootState } from '../store';

export default {
  getLoggedIn: (state: RootState) => state.authReducer.isAuth,
  isVisible: (state: RootState) => state.authReducer.isVisible
};
