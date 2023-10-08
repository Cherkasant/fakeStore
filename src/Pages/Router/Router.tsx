import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Catalog from '../Catalog';
import ProductPage from '../ProductPage';
import PagesWrapper from '../../Components/PagesWrapper';
import SignIn from '../SignIn/SignIn';

export enum PathNames {
  Home = '/',
  SignIn = '/signin',
  ProductPage = '/products/:id',
  Catalog = '/products'
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.Catalog} element={<Catalog />} />
          <Route path={PathNames.ProductPage} element={<ProductPage />} />
        </Route>
        <Route path={PathNames.SignIn} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
