import ProductList from '../../Components/ProductList';
import { useSelector } from 'react-redux';
import authSelector from '../../Redux/Selectors/authSelector';
import { useProducts } from '../../Hooks/useProducts/useProducts';

const Catalog = () => {
  const isLoggedIn = useSelector(authSelector.getLoggedIn);
  const { data } = useProducts(isLoggedIn);

  return (
    <div>
      <ProductList productsList={data} />
    </div>
  );
};

export default Catalog;
