import ProductList from '../../Components/ProductList';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import styles from './Catalog.module.css';
import { getAllProducts } from '../../Redux/utils/api';
import { useSelector } from 'react-redux';
import authSelector from '../../Redux/Selectors/authSelector';
import { useNavigate } from 'react-router';
import { PathNames } from '../Router/Router';

const Catalog = () => {
  const isLoggedIn = useSelector(authSelector.getLoggedIn);
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ['useProducts'],
    queryFn: () => {
      if (isLoggedIn) {
        return getAllProducts();
      } else {
        navigate(PathNames.SignIn);
      }
    }
  });

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  if (error) return <div>{'An error has occurred: ' + error}</div>;

  return (
    <div>
      <ProductList productsList={data} />
    </div>
  );
};

export default Catalog;
