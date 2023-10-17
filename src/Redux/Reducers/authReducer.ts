import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOKEN_KEY } from '../utils/api';
import { ProductsListType } from '../Types/products';

type authReducerState = {
  isAuth: boolean;
  products: ProductsListType;
  isVisible: boolean;
};
const initialState: authReducerState = {
  isAuth: !!localStorage.getItem(TOKEN_KEY),
  products: [],
  isVisible: false
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setProducts: (state, action: PayloadAction<ProductsListType>) => {
      state.products = action.payload;
    },
    setModalOpened: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    }
  }
});
export const { setLoggedIn, setProducts, setModalOpened } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
